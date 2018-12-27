const { Transaction, Account, Customer } = require("../db/sequelize");
var logger = require("../winston-logger");

exports.getById = function getById(id, callback) {
    Transaction.findById(id)
        .then(transaction => {
            return callback(null, transaction);
        })
        .catch(error => {
            logger.error(error);
            return callback(error);
        });
};

exports.getAll = function getAll(callback) {
    Transaction.findAll({
        include: [{
            model: Account,
            include: [
                Customer]
            }]
    })
        .then(transactions => {
            return callback(null, transactions);
        })
        .catch(error => {
            logger.error(error);
            return callback(error);
        });
};

exports.insert = function insert(data, callback) {
    transaction = data;
    if (transaction.account == null && transaction.accountNumber == null) {
        res.json('account kosong');
    } else {
        if (transaction.accountNumber == null) {
            transaction.accountNumber = transaction.account.accountNumber;
        }
    }

    Transaction.create(transaction)
        .then(transaction => {
            return callback(null, transaction);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}


exports.update = function update(id, data, callback) {
    transaction = data;
    if (transaction.account == null && transaction.accountNumber) {
        res.json('account kosong');
    } else {
        if (transaction.accountNumber == null) {
            transaction.accountNumber = transaction.account.accountNumber

        }
    }
    Transaction.update(data, {
        where: { id : data.id },
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
    Transaction.destroy({
        where: { id: id }
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
