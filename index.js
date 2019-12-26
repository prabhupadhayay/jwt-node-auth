require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
// const stage = require('./config.js')[environment];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'production') {
  app.use(logger('dev'));
}

const routes = require('./routes/index.js');

app.use('/api/v1', routes(router));

app.listen(`${3000}`, () => {
  console.log(`Server now listening at localhost:${3000}`);
});

module.exports = app;