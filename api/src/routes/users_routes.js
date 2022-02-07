const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const userController = require('../controller/user.controller');

router.get('/users', asyncHandler(userController.getAllUsers));
router.get('/users/:id', asyncHandler(userController.getUser));
router.post('/users', asyncHandler(userController.createUser));
router.delete('/users/:id', asyncHandler(userController.deleteUser));
router.put('/users/:id', asyncHandler(userController.updateUser));
module.exports = router;
