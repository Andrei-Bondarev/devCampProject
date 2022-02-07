const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const postController = require('../controller/post.controller');

router.post('/posts', asyncHandler(postController.createPost));
router.get('/posts', asyncHandler(postController.getAllPost));
router.delete('/posts/:id', asyncHandler(postController.deletePost));
router.put('/posts', asyncHandler(postController.updatePost));
router.get('/posts/:id', asyncHandler(postController.getPost));
module.exports = router;
