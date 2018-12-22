var response = require("../model/res");
var accouuntDao = require("../dao/transactionDao");

// select
exports.selTransaction = function (req, res) {
    accouuntDao.selTransaction(function(error, rows) {
      if (error) {
        response.err(error, res);
      } else {
        response.ok(rows, res);
      }
    });
};

// insert
exports.insTransaction = function (req, res) {
    accouuntDao.insTransaction(req.body, function (error, rows) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
};

// delete
exports.delTransaction = function (req, res) {
    accouuntDao.delTransaction(req.params["id"], function (error, rows) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok("data deleted", res);
        }
    });
};

// update
exports.updTransaction = function (req, res) {
    accouuntDao.updTransaction(req.body, req.params["id"], function (error, rows) {
        if (error) {
            console.log(error);
            response.err(error, res);
        } else {
            response.ok("data updated", res);
        }
    });
};

// search
exports.seaTransaction = function (req, res) {
    accouuntDao.seaTransaction(req.params["id"], function (error, rows) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
};