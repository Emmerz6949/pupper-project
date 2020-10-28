const passportW = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passportW.use(
  new LocalStrategy(
    // Our walker will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    (email, password, done) => {
      // When a walker tries to sign in this code runs
      db.Walker.findOne({
        where: {
          email: email
        }
      }).then(dbWalker => {
        // If there's no walker with the given email
        if (!dbWalker) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a walker with the given email, but the password the walker gives us is incorrect
        else if (!dbWalker.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the walker
        return done(null, dbWalker);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the walker
// Just consider this part boilerplate needed to make it all work
passportW.serializeWalker((walker, cb) => {
  cb(null, walker);
});

passportW.deserializeWalker((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passportW;
