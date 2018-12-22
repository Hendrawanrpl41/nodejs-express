const { Customer } = require("../db/sequelize");
var logger = require("../winston-logger");

exports.getById = function getById(id, callback) {
  Customer.findById(id)
    .then(account => {
      return callback(null, account);
    })
    .catch(error => {
      logger.error(error);
      return callback(error);
    });
};

exports.getAll = function getAll(callback) {
  Customer.findAll()
    .then(accounts => {
      return callback(null, accounts);
    })
    .catch(error => {
      logger.error(error);
      return callback(error);
    });
};

exports.insert = function insert(data, callback) {
  Customer.create(data)
    .then(account => {
      return callback(null, account);
    })
    .catch(error => {
      logger.error(error);
      return callback(error);
    });
};

exports.update = function update(id, data, callback) {
  Customer.update(data, {
    where: { accountNumber: data.accountNumber },
    returning: true,
    plain: true
  })
    .then(result => {
      logger.info("result  update:");
      logger.info(result);
      return callback(null, data);
    })
    .catch(error => {
      logger.error(error);
      return callback(error);
    });
};

exports.del = function del(id, callback) {
  Customer.destroy({
    where: { accountNumber: id }
  })
    .then(result => {
      logger.info("result  update:");
      logger.info(result);
      return callback(null, id);
    })
    .catch(error => {
      logger.error(error);
      return callback(error);
    });
};
