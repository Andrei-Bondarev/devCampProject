const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const asyncHandler = require('../middlewares/asyncHandler');
const { authorize, authorizeById } = require('../services/auth');

let refreshTokens = [];
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { accessToken, refreshToken } = await authorize(
      req.body.email,
      req.body.password
    );
    if (accessToken) {
      refreshTokens.push(refreshToken);
      return res.send({
        accessToken,
        refreshToken,
        success: true,
      });
    }
    res.sendStatus(401);
  })
);
router.post(
  '/refresh',
  asyncHandler(async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });
      res.json({ accessToken });
    });
  })
);

router.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

router.post(
  '/google',
  passport.authenticate('google-token', { session: false }),
  asyncHandler(async (req, res) => {
    const { accessToken, refreshToken } = await authorizeById(req.user.id);
    if (accessToken) {
      refreshTokens.push(refreshToken);
      return res.send({
        accessToken,
        refreshToken,
        success: true,
      });
    }
    res.sendStatus(401);
  })
);

router.post(
  '/facebook',
  passport.authenticate('facebook-token'),
  asyncHandler(async (req, res) => {
    const { accessToken, refreshToken } = await authorizeById(req.user.id);
    if (accessToken) {
      refreshTokens.push(refreshToken);
      return res.send({
        accessToken,
        refreshToken,
        success: true,
      });
    }
    res.sendStatus(401);
  })
);
module.exports = router;
