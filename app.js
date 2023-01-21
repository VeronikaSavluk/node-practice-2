const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contacts');
const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes')

require("dotenv").config();
const {PORT, DB_HOST} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', authRouter);
app.use('/contacts', contactsRouter);
app.use('/notes', notesRouter);
mongoose.set('strictQuery', true);
mongoose.connect(DB_HOST, () => console.log("DB is running"));
app.listen(PORT, () => console.log("Server is running"));