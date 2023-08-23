const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesCtrl.getNotes);
router.post('/', ensureLoggedIn, notesCtrl.createNote);
router.delete('/:id', notesCtrl.deleteNote);
router.put('/:id', ensureLoggedIn, notesCtrl.updateNote);


module.exports = router;