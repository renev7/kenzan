/*
 *
 * API Generator
 * employee.js
 * Contact
 *
 */

var express = require("express");
var bodyParser = require("body-parser");
var pool = require("../connector/mysql-connector.js");
const basicAuth = require('express-basic-auth');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {
  console.log("Calling employee...");
  next();
});

router.get("/", function(req, res) {
  var sql = "select * from vemployee where employeeStatus='ACTIVE'";
  pool.getConnection(function(err, connection) {
  	connection.query(sql, function (err, rows, fields) {
      connection.release();
      if (err) {
        res.json({message: "error"});
        console.log(err);
      } else
        res.json(rows);
    });
  });

})

router.post("/", function(req, res) {
    var values = req.body;
    pool.getConnection(function(err, connection) {
        connection.query("insert into employee set ?", values, function (err, rows, fields) {
            connection.release();
            if (err) {
              res.json({message: "error"});
              console.log(err);
            } else
              res.json({message: "inserted"});
        });
    });
})

router.get("/:id", function(req, res) {
    pool.getConnection(function(err, connection) {
        connection.query("select * from vemployee where employeeStatus='ACTIVE' and employeeId = ?", [req.params.id], function (err, rows, fields) {
            connection.release();
            if (err) {
              res.json({message: "error"});
              console.log(err);
            } else
              res.json(rows);
        });
    })
})

router.put("/:id", function(req, res) {
    pool.getConnection(function(err, connection) {
        var update = "update employee set ? where employeeId = ?";
        connection.query(update, [req.body, req.params.id], function (err, rows, fields) {
          connection.release();
          if (err) {
            res.json({message: "error"});
            console.log(err);
          } else
            res.json({message: "updated"});
        });
    });
})

router.delete("/:id", basicAuth({
  users: { 'admin': 'kenzan' },
  unauthorizedResponse: { message : 'Valid authorization required' }
}), function(req, res) {
  pool.getConnection(function(err, connection) {
    connection.query("update employee set employeeStatus='INACTIVE' where employeeId = ?", [req.params.id], function (err, rows, fields) {
      connection.release();
      if (err) {
        res.json({message: "error"});
        console.log(err);
      } else
        res.json({message: "updated to INACTIVE"});
    });
  });
});

module.exports = router;
