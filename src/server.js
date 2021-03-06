'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 3000;


// 3rd party packages
const express = require('express');
const app = express();

//local modules
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const logger = require('./middleware/logger');
// const v1 =require('./routes/v1');

//this to parse the data from the req.body
app.use(express.json());

app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);
// app.use(v1);
app.get('/', (req, res) => {
  res.status(200).send('Go to the food path or cloth path ');
});
app.use('*', notFoundHandler);
app.use(errorHandler);




function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};