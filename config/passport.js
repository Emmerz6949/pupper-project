const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use('local-owner',
    new LocalStrategy(
        // Our owner will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        async (email, password, done) => {
            // When a owner tries to sign in this code runs
            const dbOwner = await db.Owner.findOne({
                where: {
                    email: email
                }
            });

            if (!dbOwner) {
                return done(null, false, {
                    message: "Incorrect email."
                });

            }

            if (!dbOwner.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }

            return done(null, dbOwner);
        })
);

passport.use('local-walker',
    new LocalStrategy(
        // Our owner will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        async (email, password, done) => {
            // When a owner tries to sign in this code runs
            const dbWalker = await db.Walker.findOne({
                where: {
                    email: email
                }
            });

            if (!dbWalker) {
                return done(null, false, {
                    message: "Incorrect email."
                });

            }

            if (!dbWalker.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }

            return done(null, dbWalker);
        })
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the owner
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
