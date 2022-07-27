const db = require('../services/db');
const { aclRules, Possession } = require('../services/acl');

// eslint-disable-next-line consistent-return
const acl = (rule) => async (req, res, next) => {
  const rules = Array.isArray(rule) ? rule : [rule];
  let isAllow = false;

  const user = await db('Users').where('UserID', req.auth.id);
  if (user) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const checkRule of rules) {
      if (aclRules[user.role] && aclRules[user.role][checkRule.resource]) {
        // eslint-disable-next-line no-restricted-syntax
        for await (const permission of aclRules[user.role][
          checkRule.resource
        ]) {
          const canUseAnyAction =
            permission.possession === Possession.ANY &&
            permission.action === checkRule.action;

          if (checkRule.possession === Possession.ANY) {
            if (canUseAnyAction) {
              isAllow = true;
            }
          } else if (canUseAnyAction) {
            isAllow = true;
          } else {
            const resource = await checkRule.getResource(req);
            if (checkRule.isOwn(resource, user.id)) {
              isAllow = true;
            }
          }
        }
      }
    }
  }

  if (isAllow) {
    return next();
  }

  next(new Error('Not allowed'));
};

module.exports = acl;
