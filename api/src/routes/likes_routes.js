const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');

const likeController = require('../controller/like.controller');

router.post('/likes', asyncHandler(likeController.createLike));
router.get('/likes', asyncHandler(likeController.getLikesUnderPost));
router.delete('/likes/:id', asyncHandler(likeController.deleteLike));
module.exports = router;
