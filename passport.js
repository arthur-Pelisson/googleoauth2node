const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: "777575781460-k31k5cto8t6q1806rkbesa915vpfga31.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:5000/google/callback",
        passReqToCallback: true,
        scope: ['profile', 'email'],
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));