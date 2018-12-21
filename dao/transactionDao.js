var conn = require('../db/conn');
const sqlSelect = "select *from transaction";
const sqlSearch = "select *from transaction where id = ?";
const sqlInsert = "insert into transaction set ?";
const sqlDelete = "delete from transaction where id = ?";
const sqlUpdate = "update transaction set ? where id = ?";

// select
exports.selTransaction = function(callback){
    conn.query(sqlSelect, function(error, rows){
        if(error){
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
}; 
// insert
exports.insTransaction = function (id, callback) {
    conn.query(sqlInsert, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// delete
exports.delTransaction = function (id, callback) {
    conn.query(sqlDelete, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// update
exports.updTransaction = function (data, id, callback) {
    conn.query(sqlUpdate, [data, id], function (error, rows) {
        if (error) {
            console.log(error);
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 

// seacrh
exports.seaTransaction = function (id, callback) {
    conn.query(sqlSearch, id, function (error, rows) {
        if (error) {
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
}; 
