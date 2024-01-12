const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

routes(app);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log('connect DB success!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log('listening on port, server is running in port: ' + port);
});
