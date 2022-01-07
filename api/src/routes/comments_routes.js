const router = require('express').Router();

const commentController = require('../controller/comment.controller');

router.post('/comments', commentController.createComment);
router.get('/comments', commentController.getCommentsUnderPost);
router.delete('/comments/:id', commentController.deleteComment);
router.put('/comments/:id', commentController.updateComment);
module.exports = router;
