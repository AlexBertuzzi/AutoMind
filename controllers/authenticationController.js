const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models/");

router.get("/", (req, res) => {
  db.all(data => {
    const hbsObject = {
      salesPerson: data
    };
    console.log(hbsObject);
    res.render("signup", hbsObject);
  });
});

router.get("/login", (req, res) => {
  db.all(data => {
    const hbsObject = {
      salesPerson: data
    };
    console.log(hbsObject);
    res.render("login", hbsObject);
  });
});

router.get("/members", isAuthenticated, (req, res) => {
  db.all(data => {
    const hbsObject = {
      clients: data
    };
    console.log(hbsObject);
    res.render("members", hbsObject);
  });
});
