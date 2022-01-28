const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = `src/uploads/${req.params.id}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, `${dir}`);
  },
  filename(req, file, cb) {
    cb(null, `avatar.jpg`);
  },
});
const fileFilter = (req, file, cb) => {
  const types = [`image/jpeg`, `image/jpg`];
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({
  storage,
  fileFilter,
});
