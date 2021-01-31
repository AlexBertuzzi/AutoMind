const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.salesPerson);
  });
  app.post("/api/signup", (req, res) => {
    db.SalesPerson.create({
      name: req.body.name,
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
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/user_data", (req, res) => {
    if (!req.salesPerson) {
      res.json({});
    } else {
      res.json({
        email: req.salesPerson.email,
        id: req.salesPerson.id
      });
    }
  });
  app.post("/api/client", (req, res) => {
    db.Client.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNember,
      make: req.body.make,
      model: req.body.model,
      color: req.body.color,
      quote: req.body.quote,
      timeStamp: req.body.timeStamp
    })
      .then(() => {
        res.redirect(307, "/api/client");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.post("api/notes", (req, res) => {
    db.Notes.create({
      note: req.body.note
    })
      .then(() => {
        res.redirect(307, "api/notes");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.put("api/client", (req, res) => {
    db.Client.update({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      make: req.body.make,
      model: req.body.model,
      color: req.body.color,
      quote: req.body.quote,
      timeStamp: req.body.timeStamp
    })
      .then(() => {
        res.redirect(307, "/api/client");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.delete("/api/client/:id", (req, res) => {
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbClient => {
      res.json(dbClient);
    });
  });
};
