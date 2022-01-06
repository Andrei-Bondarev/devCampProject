const router = require('express').Router();

const userController = require('../controller/user.controller');

router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.createUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user', userController.updateUser);
module.exports = router;
