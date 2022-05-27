const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();
const auth = require('./routes/auth');
const cors = require("cors")

mongoose.connect('mongodb+srv://root:fatih123@proje1.3wzx4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(cors());

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));