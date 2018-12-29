var response = require('../model/res');
var accountDaoSequelize = require('../dao/accountDaoSequelize');
var logger = require('../winston-logger');
var util = require('util');

exports.accounts = function(req, res) {
  accountDaoSequelize.getAll(function(error, rows) {
    if (error) {
      logger.error('error while select: ' + error);
      response.err(error, res);
    } else {
      response.ok(rows, res)
    }
  });
};

exports.getAccountById = function(req, res) {
  accountDaoSequelize.getById(req.params['id'], function(err, data) {
    if (err) {
      logger.error('error call getById : ' + err);
      response.err(err, res);
    }
    response.ok(data, res);
  });
};

exports.updateAccount = function(req, res) {
  logger.info('request for update :');
  logger.debug(req.body);
  accountDaoSequelize.getById(req.body.accountNumber, function(err, data) {
    //check account exists
    if (err) {
      logger.error('error call getById : ' + err);
      response.err(err, res);
    } else if (data == null) {
      response.datanotfound('account not found', res);
    } else {
      //if exists, then continue update
      accountDaoSequelize.update(req.body.accountNumber, req.body, function(
        err,
        data
      ) {
        if (err) {
          logger.error('error call update : ' + err);
          response.err(error, res);
        }
        response.ok('updated data : ' + data.accountNumber, res);
      });
    }
  });
};

exports.insertAccount = function(req, res) {
  logger.info('request for insert :');
  logger.debug(req.body);
  accountDaoSequelize.insert(req.body, function(err, data) {
    if (err) {
      logger.error('error call insert : ' + err);
      response.err(err, res);
    }
    response.ok('data inserted with id ' + data.accountNumber, res);
  });
};

exports.del = function(req, res) {
  logger.info(util.format('deleting account id %s', req.params['id']));
  accountDaoSequelize.getById(req.params['id'], function(err, data) {
    //check account exists
    if (err) {
      logger.error('error call getById : ' + err);
      response.err(err, res);
    } else if (data == null) {
      response.datanotfound('account not found', res);
    } else {
      //if exists, continue delete
      accountDaoSequelize.del(req.params['id'], function(err, data) {
        if (err) {
          logger.error('error call delete : ' + err);
          response.err(error, res);
        }
        response.ok('account deleted with id : ' + data, res);
      });
    }
  });
};
