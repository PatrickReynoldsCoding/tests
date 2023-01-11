var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    name: "paddy",
    list: [
      { name: "amir" },
      { name: "joe" },
      { name: "saif" },
      { name: "clare" },
      { name: "chris" },
    ],
  });
});

router.get("/info", function (req, res, next) {
  res.render("info", { title: "Express" });
});

module.exports = router;
