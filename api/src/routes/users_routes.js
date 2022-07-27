const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const userController = require('../controller/user.controller');
const acl = require('../middlewares/acl');
const db = require('../services/db');

router.get('/users', asyncHandler(userController.getAllUsers));
router.get('/users/:id', asyncHandler(userController.getUser));
router.post('/users', asyncHandler(userController.createUser));
router.delete(
  '/users/:id',
  acl({
    resource: 'user',
    action: 'delete',
    possession: 'own',
    getResource: (req) => db('Users').where('UserID', req.params.id),
    isOwn: (resource, userId) => resource.id === userId,
  }),
  asyncHandler(userController.deleteUser)
);
router.put(
  '/users/:id',
  acl({
    resource: 'user',
    action: 'update',
    possession: 'own',
    getResource: (req) => db('Users').where('UserID', req.params.id),
    isOwn: (resource, userId) => resource.id === userId,
  }),
  asyncHandler(userController.updateUser)
);
module.exports = router;
