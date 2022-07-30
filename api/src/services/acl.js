export const Action = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
};

export const Possession = {
  ANY: 'any',
  OWN: 'own',
};

export const Resources = {
  POST: 'post',
  USER: 'user',
};

export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
};

export const allowAny = [
  {
    action: Action.CREATE,
    possession: Possession.ANY,
  },
  {
    action: Action.READ,
    possession: Possession.ANY,
  },
  {
    action: Action.UPDATE,
    possession: Possession.ANY,
  },
  {
    action: Action.DELETE,
    possession: Possession.ANY,
  },
];

export const allowOwn = [
  {
    action: Action.CREATE,
    possession: Possession.ANY,
  },
  {
    action: Action.READ,
    possession: Possession.ANY,
  },
  {
    action: Action.UPDATE,
    possession: Possession.OWN,
  },
];

export const aclRules = {
  [Roles.ADMIN]: {
    [Resources.USER]: allowAny,
    [Resources.POST]: allowAny,
  },
  [Roles.USER]: {
    [Resources.USER]: allowOwn,
    [Resources.POST]: allowOwn,
  },
};
