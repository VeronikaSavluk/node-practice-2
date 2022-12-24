const router = require('express').Router();

const {getNotes, createNote, deleteNote} = require('../controllers/notes');

router.get('/', getNotes);
router.post('/', createNote);
router.delete('/:NoteId', deleteNote);

module.exports = router;
