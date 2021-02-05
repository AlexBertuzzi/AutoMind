// Dependencies ==============================================================
const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

const passport = require("../config/passport");

let userId;

// Passport Authentication Routes ============================================
// Get requests------------------------------
router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.render("login");
});

router.get("/members", isAuthenticated, (req, res) => {
  db.User.findAll().then(users => {
    userId = JSON.parse(JSON.stringify(users[0].id));
    const hbsObject = {
      users: JSON.parse(JSON.stringify(users))
    };
    console.log(JSON.parse(JSON.stringify(hbsObject)));
    res.render("members", hbsObject);
  });
});
// Post Ruequests----------------------------
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.post("/api/signup", (req, res) => {
  db.User.create({
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

// Geting/Posting/Updating Client information ===================================
// Get requests------------------------------
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      name: req.user.name,
      email: req.user.email,
      id: req.user.id
    });
  }
});

// router.get("/api/client", (req, res) => {
// });

// Post Put Delete Ruequests------------------
router.post("/api/client", (req, res) => {
  db.Client.create({
    UserId: userId,
    name: req.body.name,
    phoneNumber: req.body.phoneNember,
    make: req.body.make,
    model: req.body.model,
    color: req.body.color,
    quote: req.body.quote,
    followUp: req.body.followUp
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

router.put("api/client/update", (req, res) => {
  db.Client.update({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    make: req.body.make,
    model: req.body.model,
    color: req.body.color,
    quote: req.body.quote,
    followUp: req.body.followUp
  })
    .then(() => {
      res.redirect(307, "/api/client/update");
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
