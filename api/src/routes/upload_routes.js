const router = require('express').Router();
const mult = require('../middlewares/multer');
const multPost = require('../middlewares/multerPost');

router.post('/users/:id', mult.single('avatar'), (req, res) => {
  if (req.file) res.json(req.file);
});
router.post('/posts/:id', multPost.single('photo'), (req, res) => {
  if (req.file) res.json(req.file);
});
module.exports = router;
