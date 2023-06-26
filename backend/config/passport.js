// Note, this method didn't seem to work with Passport 0.6. Switched to 0.5 and bug was resovled.

require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
  function(accessToken, refreshToken, profile, /*cb*/done) {
    
    done(null, profile);
    
    /*
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
    */
   /*
   const user = {
    username: profile.displayName,
    avatar: profile.photos[0]
   }
   user.save
   */ 
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});