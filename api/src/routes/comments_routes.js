const router = require('express').Router();

const commentController = require('../controller/comment.controller');

router.post('/comment', commentController.createComment);
router.get('/comment', commentController.getCommentsUnderPost);
router.delete('/comment/:id', commentController.deleteComment);
router.put('/comment', commentController.updateComment);
module.exports = router;
