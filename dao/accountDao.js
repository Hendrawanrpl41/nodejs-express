var conn = require('../db/conn');
const sqlSelect = "select *from account";
const sqlSearch = "select *from account where accountNumber = ?";
const sqlInsert = "insert into account set ?";
const sqlDelete = "delete from account where accountNumber = ?";
const sqlUpdate = "update account set ? where accountNumber ?";

// select
exports.selAccount = function(callback){
    conn.query(sqlSelect, function(error, rows){
        if(error){
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
}; 
// insert
exports.insAccount = function (id, callback) {
    conn.query(sqlInsert, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// delete
exports.delAccount = function (id, callback) {
    conn.query(sqlDelete, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// update
exports.updAccount = function (data, id, callback) {
    conn.query(sqlUpdate, data, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// seacrh
exports.seaAccount = function (id, callback) {
    conn.query(sqlSearch, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 
