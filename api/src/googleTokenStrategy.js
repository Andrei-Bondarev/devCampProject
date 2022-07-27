const passport = require('passport');
const db = require('./services/db');
// eslint-disable-next-line import/order
const GoogleTokenStrategy = require('passport-google-token').Strategy;

const { GOOGLE_CLIENT_ID } = process.env.GOOGLE_CLIENT_ID;
const { GOOGLE_CLIENT_SECRET } = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    },
    //  Passport verify callback
    async (accessToken, refreshToken, profile, done) => {
      const [{ value: email }] = profile.emails;
      let user = await db('Users').where('Email', email);
      if (!user) {
        await db('Users').insert({
          Surname: profile.displayName,
          Email: email,
        });
        user = await db('Users').where('Email', email);
      }
      return done(null, {
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
  )
);
