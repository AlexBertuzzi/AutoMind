// DEPENDENCIES ======================================================
const express = require("express");
const session = require("express-session");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring models for syncing ****
const db = require("./models");

// Setting express (app) to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES ============================================================
require("./routes/----")(app);
require("./routes/----")(app);
require("./routes/----")(app);

// Syncing sequelize models and then starting the Express app ==========
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port http://localhost:" + PORT);
  });
});
