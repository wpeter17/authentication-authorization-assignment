const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// LOCAL STRATEGY
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: false,
    },
    async (email, password, done) => {
      try {
        // Find the user given the email
        const user = await User.findOne({
          email: email,
        });

        // If not, handle it
        if (!user) {
          return done(null, false);
        }

        // Check if the password is correct
        const isValid = await user.isValidPassword(password);
        // If not, handle it
        if (!isValid) {
          return done(null, false, {
            message: "Unknown User",
          });
        }

        // Otherwise, return the user
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

module.exports = passport;
