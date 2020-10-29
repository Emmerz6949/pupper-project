//owner api goes here
//owner api goes here
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the owner has valid login credentials, send them to the members page.
    // Otherwise the owner will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.owner.email,
            id: req.owner.id
        });
    });

    // Route for signing up a owner. The owner's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the owner is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        db.Owner.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

    // Route for logging owner out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our owner to be used client side
    app.get("/api/owner_data", (req, res) => {
        if (!req.owner) {
            // The owner is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the owner's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                dogName: req.owner.dogname,
                lastName: req.owner.lastname,
                zipCode: req.owner.zipcode,
                dogSize: req.owner.dogsize,
                dogBreed: req.owner.dogbreed,
                email: req.owner.email,
                id: req.owner.id
            });
        }
    });
};
