const router = require('express').Router();
const mult = require('../middlewares/multer');
const multPost = require('../middlewares/multerPost');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/users/:id', authMiddleware, mult.single('avatar'), (req, res) => {
  if (req.file) res.json(req.file);
});
router.post(
  '/posts/:id',
  authMiddleware,
  multPost.single('photo'),
  (req, res) => {
    if (req.file) res.json(req.file);
  }
);
module.exports = router;
