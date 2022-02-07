const router = require('express').Router();
const asyncHandler = require('../middlewares/asyncHandler');
const commentController = require('../controller/comment.controller');

router.post('/comments', asyncHandler(commentController.createComment));
router.get('/comments', asyncHandler(commentController.getCommentsUnderPost));
router.delete('/comments/:id', asyncHandler(commentController.deleteComment));
router.put('/comments/:id', asyncHandler(commentController.updateComment));
module.exports = router;
