// Dependencies
const User = require('../models/userModel');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');



// Finds or Creates new user with Google Oauth 2.0
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {

      /**
       * Encrypt password for google user based on access token, secures account. Access Token only
       * obtained through successful google login, and hashed password can't be used in database leak.
       */ 
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(accessToken, salt)

      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // User already exists in the database
          return done(null, user);
        } else {
          // Create a new user in the database
          const newUser = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            password: hash,
            profilePicture: profile.photos[0].value
          });

          user = await newUser.save();
          return done(null, user);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
