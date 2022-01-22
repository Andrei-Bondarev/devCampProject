const router = require('express').Router();

const postController = require('../controller/post.controller');

router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPost);
router.delete('/posts/:id', postController.deletePost);
router.put('/posts/:id', postController.updatePost);
router.get('/posts/:id', postController.getPost);
module.exports = router;
