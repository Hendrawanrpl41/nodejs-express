var connection = require("../db/conn");
const sqlSelect = "select *from customer";
const sqlInsert = "insert into customer set ?"
const sqlDelete = "delete from customer where customerNumber  = ?";
const sqlUpdate = "update customer set ? where customerNumber = ?";
const sqlSearch = "select *from customer where customerNumber = ?";

exports.getCustomer  = function(id, callback){
    connection.query(sqlSelect, id, function(error, rows){
        if(err){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows[0]);
        }
    });
};
exports.updateCustomer =  function(data, id, callback){
    connection.query(sqlUpdate,[data,id] , function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
};
exports.delCustomer = function(id, callback){
    connection.query(sqlDelete, id, function(error, rows){
        if(error){
            console.log(error);
            callback(error);
        }else{
            callback(null, rows);
        }
    });
};

exports.insertCustomer = function(id , callback){
    connection.query(sqlInsert, id, function(error, rows){
        if(error){
            return callback(error)
        }else{
            callback(null, rows)
        }
    });
};
exports.searchCustomer = function(id, callback){
    connection.query(sqlSearch, id , function(error, rows){
        if(error){
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
}
