const {model, Schema} = require('mongoose');

const userSchema = Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	token: {
		type: String,
	}
});

const User = model('user', userSchema);

module.exports = User;