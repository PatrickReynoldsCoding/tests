var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "hello" });
});

router.get("/paddypage", function (req, res, next) {
  res.render("paddypage", {
    title: "Paddy's page!!!",
    list: [
      { name: "amir" },
      { name: "joe" },
      { name: "saif" },
      { name: "clare" },
      { name: "chris" },
    ],
  });
});

router.get("/paddypage2", function (req, res, next) {
  res.render("paddypage2", {
    title: "Paddy's fav food!!!",
    list: [
      { name: "cheese" },
      { name: "chicken" },
      { name: "pizza" },
      { name: "pringles" },
      { name: "curly whurly" },
    ],
  });
});

router.get("/paddypage3", function (req, res, next) {
  res.render("paddypage3", {
    title: "Paddy's fav food!!!",
    amir: "hello amir",
    list: [
      { name: "cheese" },
      { name: "chicken" },
      { name: "pizza" },
      { name: "pringles" },
      { name: "curly whurly" },
    ],
  });
});

module.exports = router;
