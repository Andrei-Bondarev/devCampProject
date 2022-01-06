const router = require('express').Router();

const likeController = require('../controller/like.controller');

router.post('/like', likeController.createLike);
router.get('/like', likeController.getLikesUnderPost);
router.delete('/like/:id', likeController.deleteLike);
module.exports = router;
