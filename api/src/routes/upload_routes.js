const router = require('express').Router();
const mult = require('../middlewares/multer');

router.post('/users/:id', mult.single('avatar'), (req, res) => {
  if (req.file) res.json(req.file);
});
module.exports = router;
