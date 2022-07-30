const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const db = require('./services/db');

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      fbGraphVersion: 'v3.0',
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id } = profile;
      let user = await db('Users').where('UserID', id);
      if (!user) {
        await db('Users').insert({
          Surname: profile.displayName,
        });
        user = await db('Users').where('UserID', id);
      }
      return done(null, {
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
  )
);
