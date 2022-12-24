const Note = require('../model/notes');
const Contact = require('../model/contacts')

const getNotes = async (req, res) => {
    const allNotes = await Note.find().populate('contact', {
        name: 1,
        number: 1,
    });

	if(allNotes.length === 0){
		return res.status(400).json({message: 'No notes'});
	};

	res.json(allNotes);
};

const createNote = async (req, res) => {
	const {title, text, contact} = req.body;

    const newNote = await Note.create({title, text, contact});
    await Contact.findByIdAndUpdate(contact, { $push: { notes: newNote._id } }, { new: true });
    res.status(201).json(newNote);
    
};

const deleteNote = async (req, res) => {
  const {NoteId} = req.params;
	const deletedNote = await Note.findByIdAndDelete(NoteId);

	if(deletedNote === null){
		return res.status(401).json('Not Note with ${id}');
	};
    await Contact.findByIdAndUpdate(deletedNote.contact, { $pull: { notes: deleteNote._id } }, { new: true });
	res.json(deletedNote);
};

module.exports = {
	getNotes,
	createNote,
	deleteNote,
};