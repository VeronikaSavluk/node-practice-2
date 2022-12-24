const {model, Schema} = require('mongoose');

const contactSchema = Schema({
	name: {
		type: String,
	},
	number: {
		type: String,
	},
	notes: [{
		type: Schema.Types.ObjectId,
		ref: 'note'
	}]
});

const Contact = model('contact', contactSchema);

module.exports = Contact;