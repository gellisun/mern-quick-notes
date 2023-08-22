const Note = require('../../models/note');

module.exports = {
    getNotes,
    createNote,
}

async function getNotes(req, res) {
    try {
        const notes = await Note.find({user: req.user._id}).sort({createdAt: -1});
        res.json(notes);
    } catch (err) {
        res.status(500).json({err: 'Internal Server Error'});
    }
}

async function createNote(req, res) {
    try {
        const newNote = new Note({
            text: req.body.text,
            user: req.user._id,
        });
        const savedNote = await newNote.save();
        res.status(200).json(savedNote);
    } catch (err) {
        res.status(500).json({err: 'Internal Server Error'});
    }
}