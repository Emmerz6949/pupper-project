const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
require("./routes/api/owner")(app);
require("./routes/api/walker")(app);
app.use(routes);


// Start the API server
db.sequelize.sync().then(() => {

    db.Owner.create({
        dogName: "Rufus",
        lastName: "Ruff",
        dogBreed: "Dalmation",
        dogSize: "Medium",
        email: "suzi@example.com",
        password: "suziQ789",
        zipcode: 78950
    });

    db.Walker.create({
        firstName: "Kyle",
        lastName: "Walkson",
        email: "kyle@example.com",
        password: "kyle666",
        zipcode: 78950,
        dogSize: "Medium"
    });

    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});
