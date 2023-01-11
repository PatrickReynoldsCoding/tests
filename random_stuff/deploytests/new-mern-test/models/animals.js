const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Animal", AnimalSchema);
