/*
 *
 * App.js
 * Contact
 *
 */

var bodyParser = require("body-parser");
var cors = require('cors');

var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes

var employee = require("./route/employee.js");
app.use("/api/v1/employee", employee);

app.get('/healthz', function(req, res) {
  res.json({ status: 'OK' });
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`API running on port: ${PORT}`);
});
