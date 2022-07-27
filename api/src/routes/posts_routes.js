const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const postController = require('../controller/post.controller');
const acl = require('../middlewares/acl');
const db = require('../services/db');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/posts', authMiddleware, asyncHandler(postController.createPost));
router.get('/posts', authMiddleware, asyncHandler(postController.getAllPost));
router.delete(
  '/posts/:id',
  authMiddleware,
  acl([
    {
      resource: 'post',
      action: 'delete',
      possession: 'own',
      getResource: (req) => db('Posts').where('PostID', req.params.id),
      isOwn: (resource, userId) => resource.user_id === userId,
    },
  ]),
  asyncHandler(postController.deletePost)
);
router.put(
  '/posts',
  authMiddleware,
  acl([
    {
      resource: 'post',
      action: 'update',
      possession: 'own',
      getResource: (req) => db('Posts').where('PostID', req.params.id),
      isOwn: (resource, userId) => resource.user_id === userId,
    },
  ]),
  asyncHandler(postController.updatePost)
);
router.get('/posts/:id', authMiddleware, asyncHandler(postController.getPost));
module.exports = router;
