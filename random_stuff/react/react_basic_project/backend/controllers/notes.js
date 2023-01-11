const Note = require("../models/notes");

const NoteController = {
  // Add Note to DB
  create: async (req, res) => {
    console.log("creating document");
    console.log(req.body);
    try {
      const newNote = await Note.create({
        title: req.body.title,
        content: req.body.content,
      });
      res.status(200).json(newNote);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = NoteController;
