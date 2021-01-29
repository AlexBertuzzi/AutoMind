// DEPENDENCIES ======================================================
const express = require("express");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring models for syncing ****
const db = require("./models");

// Setting express (app) to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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
