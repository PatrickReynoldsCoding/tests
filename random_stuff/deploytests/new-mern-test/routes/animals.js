const express = require("express");
const router = express.Router();
const AnimalController = require("../controllers/animals");

router.get("/mammals", AnimalController.mammals);
router.post("/createmammal", AnimalController.create);

module.exports = router;
