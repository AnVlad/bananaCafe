require('dotenv').config();

const mongoUrl = process.env.MONGODB_URI;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dishesRouter = require('./controllers/dishes');

morgan.token('data', (req, res) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(':method :url :status :res[content-length] :response-time :data')
);

mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.use('/', dishesRouter);

module.exports = app;
