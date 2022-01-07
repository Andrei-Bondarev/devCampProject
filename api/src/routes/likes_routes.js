const router = require('express').Router();

const likeController = require('../controller/like.controller');

router.post('/likes', likeController.createLike);
router.get('/likes', likeController.getLikesUnderPost);
router.delete('/likes/:id', likeController.deleteLike);
module.exports = router;
