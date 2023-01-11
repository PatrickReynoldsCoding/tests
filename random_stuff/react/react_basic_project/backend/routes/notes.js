const express = require("express");
const router = express.Router();

// import controllers
const NoteController = require("../controllers/notes");

// import middleware

// api routes

// create one todo in DB
router.post("/create", NoteController.create);

module.exports = router;
