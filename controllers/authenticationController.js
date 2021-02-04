const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

const passport = require("../config/passport");

router.get("/", (req, res) => {
  db.SalesPerson.findAll().then(salesPerson => {
    const hbsObject = {
      salesPerson: salesPerson
    };
    console.log(hbsObject);
    res.render("signup", hbsObject);
  });
});

router.get("/login", (req, res) => {
  db.SalesPerson.findAll().then(salesPerson => {
    const hbsObject = {
      salesPerson: salesPerson
    };
    console.log(hbsObject);
    res.render("login", hbsObject);
  });
});

router.get("/members", isAuthenticated, (req, res) => {
  db.SalesPerson.findAll().then(salesPerson => {
    const hbsObject = {
      clients: salesPerson
    };
    console.log(hbsObject);
    res.render("members", hbsObject);
  });
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json(req.salesPerson);
});

router.post("/api/signup", (req, res) => {
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

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  if (!req.salesPerson) {
    res.json({});
  } else {
    res.json({
      email: req.salesPerson.email,
      id: req.salesPerson.id
    });
  }
});

router.post("/api/client", (req, res) => {
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

router.post("api/notes", (req, res) => {
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

router.put("api/client", (req, res) => {
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

router.delete("/api/client/:id", (req, res) => {
  db.Client.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbClient => {
    res.json(dbClient);
  });
});

module.exports = router;
