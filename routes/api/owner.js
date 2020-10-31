//owner api goes here
//owner api goes here
// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the owner has valid login credentials, send them to the members page.
    // Otherwise the owner will be sent an error
    app.post("/api/owner_login", passport.authenticate("local-owner"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up a owner. The owner's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the owner is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/owner_signup", (req, res) => {
        db.Owner.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect(307, "/api/owner_login");
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
            res.json({ it: 'does not work' });
        } else {
            // Otherwise send back the owner's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                dogName: req.owner.dogname,
                lastName: req.owner.lastname,
                zipcode: req.owner.zipcode,
                dogSize: req.owner.dogsize,
                dogBreed: req.owner.dogbreed,
                email: req.owner.email,
                id: req.owner.id
            });
        }
    });

    app.put("/api/add_owner_profile", function (req, res) {
        db.Owner.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbOwner) {
                res.json(dbOwner);
            });
    });

    app.put("/api/add_owner_schedule", function (req, res) {
        db.Owner.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbOwner) {
                res.json(dbOwner);
            });
    });

    app.get("/api/match", function (req, res) {
        db.Walker.findAll({
            where: {
                zipcode: req.owner.zipcode,
                dogSize: req.owner.dogsize || 'Any Size'
            },
            include: [db.Owner]
        }).then(function (dbWalker) {
            const resultsJSON = dbWalker.map(result => {
                return result.toJSON();
            });
            console.log("ping");
            res.json(resultsJSON);
        });
    });
};
