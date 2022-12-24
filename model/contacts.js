const {model, Schema} = require('mongoose');

const contactSchema = Schema({
	name: {
		type: String,
	},
	number: {
		type: String,
	},
});

const Contact = model('contact', contactSchema);

module.exports = Contact;