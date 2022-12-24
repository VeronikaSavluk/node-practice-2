const Contact = require('../model/contacts');
const Note = require('../model/notes')

const getContacts = async (req, res) => {
	const allContacts = await Contact.find().populate('notes', {
		title: 1,
		text: 1,
	});

	if(allContacts.length === 0){
		return res.status(400).json({message: 'No contacts'});
	};

	res.json(allContacts);
};

const createContact = async (req, res) => {
	const {name, number} = req.body;

  const newContact = await Contact.create({name, number});

	res.status(201).json(newContact);
};

const deleteContact = async (req, res) => {
  const {contactId} = req.params;
	const deletedContact = await Contact.findByIdAndDelete(contactId);

	if(deletedContact === null){
		return res.status(401).json('Not contact with ${id}');
	};
	await Note.deleteMany({ contact: contactId });
	res.json(deletedContact);
};

const updateContact = async (req, res) => { 
	const { contactId } = req.params;

	const updatedContact = await Contact.findByIdAndUpdate(contactId, { $push: { notes: req.body.notesId } }, { new: true });
	res.json(updatedContact);
}

module.exports = {
	getContacts,
	createContact,
	deleteContact,
	updateContact
};