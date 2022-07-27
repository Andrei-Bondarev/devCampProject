const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');
const commentController = require('../controller/comment.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post(
  '/comments',
  authMiddleware,
  asyncHandler(commentController.createComment)
);
router.get(
  '/comments',
  authMiddleware,
  asyncHandler(commentController.getCommentsUnderPost)
);
router.delete(
  '/comments/:id',
  authMiddleware,
  asyncHandler(commentController.deleteComment)
);
router.put(
  '/comments/:id',
  authMiddleware,
  asyncHandler(commentController.updateComment)
);
module.exports = router;
