const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const likeController = require('../controller/like.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/likes', authMiddleware, asyncHandler(likeController.createLike));
router.get(
  '/likes',
  authMiddleware,
  asyncHandler(likeController.getLikesUnderPost)
);
router.delete(
  '/likes/:id',
  authMiddleware,
  asyncHandler(likeController.deleteLike)
);
module.exports = router;
