const db = require('../services/db');

const logger = (table) => async (req, res, next) => {
  const date = new Date(Date.now());
  const dbLog = await db(table).insert({
    method: req.method,
    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    date,
  });
  next();
};
module.exports = logger;
