const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contacts');

require("dotenv").config();
const {PORT, DB_HOST} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/contacts', contactsRouter);

mongoose.connect(DB_HOST, () => console.log("DB is running"));
app.listen(PORT, () => console.log("Server is running"));