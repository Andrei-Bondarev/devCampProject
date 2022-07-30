const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controller/user.controller');
const acl = require('../middlewares/acl');
const db = require('../services/db');

router.get('/users', authMiddleware, asyncHandler(userController.getAllUsers));
router.get('/users/:id', authMiddleware, asyncHandler(userController.getUser));
router.post('/users', authMiddleware, asyncHandler(userController.createUser));
router.delete(
  '/users/:id',
  authMiddleware,
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
  authMiddleware,
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
