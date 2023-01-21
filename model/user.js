const {model, Schema} = require('mongoose');

const userSchema = Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
})