var response = require('../model/res');
var transactionDaoSequelize = require('../dao/transactionDaoSequelize');
var logger = require('../winston-logger');
var util = require('util');

exports.transactions = function (req, res) {
    transactionDaoSequelize.getAll(function (error, rows) {
        if (error) {
            logger.error('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res);
            // res.json(rows);
        }
    });
};

exports.getTransactionById = function (req, res) {
    transactionDaoSequelize.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.updateTransaction = function (req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    transactionDaoSequelize.getById(req.body.id, function (err, data) {
        //check transaction exists
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('transaction not found', res);
        } else {
            //if exists, then continue update
            transactionDaoSequelize.update(req.body.id, req.body, function (
                err,
                data
            ) {
                if (err) {
                    logger.error('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.id, res);
            });
        }
    });
};

exports.insertTransaction = function (req, res) {
    logger.info('request for insert :');
    logger.debug(req.body);
    transactionDaoSequelize.insert(req.body, function (err, data) {
        if (err) {
            logger.error('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data inserted with id ' + data.id, res);
    });
};

exports.del = function (req, res) {
    logger.info(util.format('deleting transaction id %s', req.params['id']));
    transactionDaoSequelize.getById(req.params['id'], function (err, data) {
        //check transaction exists
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('transaction not found', res);
        } else {
            //if exists, continue delete
            transactionDaoSequelize.del(req.params['id'], function (err, data) {
                if (err) {
                    logger.error('error call delete : ' + err);
                    response.err(error, res);
                }
                response.ok('transaction deleted with id : ' + data, res);
            });
        }
    });
};
