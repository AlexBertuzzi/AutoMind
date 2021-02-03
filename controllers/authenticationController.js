const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

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

module.exports = router;
