const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {SECRET_KEY} = process.env;

const signup = async (req, res) => {
	const {name, email, password} = req.body;

	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({name, email, password: passwordHash});
	
	res.status(201).json({
		user
	});
};

const login = async (req, res) => {
	const {email, password} = req.body;

	const user = await User.findOne({email});

	if(!user){
		return res.status(403).json({message: "Not found sach user"});
	};

	const comparedPassword = await bcrypt.compare(password, user.password);

	if(!comparedPassword){
		return res.status(403).json({message: "Not found sach user2"});
	};

	const token = jwt.sign({id: user._id}, SECRET_KEY);
	await User.findByIdAndUpdate(user._id, {token});

	res.json({
		user,
		token
	});
};

const logout = async (req, res) => {
	await User.findByIdAndUpdate(req.user._id, {token: null});
	res.status(204).json();
};

const currentUser = async (req, res) => {
	res.send({user: req.user});
};

module.exports = {
	signup,
	login,
	logout,
	currentUser
};