const express = require('express');
const helmet = require('helmet');
const { ErrorResponseObject } = require('./common/http');
const routes = require('./routes');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use('/', routes);

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));


// default catch all handler
//app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('route not defined')));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql.wellness-ph.com",
  user: "dash_data_user",
  password: "MySql#2023"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = app;
