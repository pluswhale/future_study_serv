const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "598699135017-41o7lsde6tf2pu9s15cp9lgpf43v73a3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})