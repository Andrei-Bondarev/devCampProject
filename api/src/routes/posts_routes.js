const router = require('express').Router();

const postController = require('../controller/post.controller');

router.post('/post', postController.createPost);
router.get('/post', postController.getPostByUser);
router.delete('/post/:id', postController.deletePost);
router.put('/post', postController.updatePost);
router.get('/post/:id', postController.getPost);
module.exports = router;
