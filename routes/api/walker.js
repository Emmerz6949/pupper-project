//walker api goes here
//walker api goes here
// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the owner will be sent an error
    app.post("/api/walker_login", passport.authenticate("local-walker"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up the Walker. The walker's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the walker is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/walker_signup", (req, res) => {
        db.Walker.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect(307, "/api/walker_login");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

    // Route for logging walker out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our Walker to be used client side
    app.get("/api/walker_data", (req, res) => {
        if (!req.walker) {
            // The Walker is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the Walker's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                firstName: req.walker.firstName,
                lastName: req.walker.lastName,
                email: req.walker.email,
                zipcode: req.walker.zipcode,
                dogSize: req.walker.dogSize,
                id: req.walker.id
            });
        }
    });

    app.put("/api/add_walker_profile", function (req, res) {
        db.Walker.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbWalker) {
                res.json(dbWalker);
            });
    });

    app.put("/api/add_walker_schedule", function (req, res) {
        db.Walker.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbWalker) {
                res.json(dbWalker);
            });
    });
};
