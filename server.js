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
app.use(routes);
require("./routes/api/owner");
require("./routes/api/walker");

// Start the API server
db.sequelize.sync().then(() => {

  db.Owner.create({
    email: "suzi@example.com",
    password: "suziQ789",
    dogName: "Rufus", 
    lastName: "Ruff", 
    dogBreed: "Dalmation", 
    dogSize: 50,
    zipcode: 78950
  });

  db.Walker.create({
    email: "kyle@example.com",
    password: "kyle666",
    firstName: "Kyle", 
    lastName: "Walkson", 
    dogSize: 33,
    zipcode: 78950
  });

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
