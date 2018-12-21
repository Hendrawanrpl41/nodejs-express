'use strict';

var response = require('../model/res');
var connection = require('../db/conn');
var util = require('util');
exports.customer = function (req, res) {
    connection.query('SELECT * FROM customer', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};
exports.insertcustomer = function (req, res) {

    connection.query('insert into customer set ?',req.body, function (error, rows) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};
exports.getById = function (req, res) {

    connection.query('select *from customer where customerNumber =  ?', req.params['id'], function (error, rows) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};
exports.deletecustomer = function(req, res) {
  connection.query(
    "delete from customer where customerNumber =  ?",
    req.params["id"],
    function(error, rows) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.updatecustomer = function (req, res) {
    connection.query(
        "update customer set ? where customerNumber = ?", [req.body, req.params["id"]],
        function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};
exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
exports.testpost = function (req, res) {
    response.ok("post masuk" +util.inspect(req.body), res)
};