const Animal = require("../models/animals");

const AnimalController = {
  create: async (req, res) => {
    const animal = new Animal({
      name: req.body.name,
    });

    await animal.save().then((doc) => res.status(201).json(animal)); //doc?
  },

  mammals: async (req, res) => {
    const allAnimals = await Animal.find();
    return res.json(allAnimals);
  },
};

module.exports = AnimalController;
