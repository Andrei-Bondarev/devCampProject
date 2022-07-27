const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const postController = require('../controller/post.controller');
const acl = require('../middlewares/acl');
const db = require('../services/db');

router.post('/posts', asyncHandler(postController.createPost));
router.get('/posts', asyncHandler(postController.getAllPost));
router.delete(
  '/posts/:id',
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
router.get('/posts/:id', asyncHandler(postController.getPost));
module.exports = router;
