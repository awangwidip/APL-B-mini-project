const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Middleware
app.use(bodyParser.json());
//Route Sources

const postRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

app.use('/persons', postRoute);
app.use('/user', authRoute);
app.use('/', express.static("public"));

//Route

mongoose
  .connect("mongodb://localhost:27017/covided", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection online");
  })
  .catch((err) => {
    console.log("Error connecting DB");
    console.log(err);
  });

app.listen(3000);
