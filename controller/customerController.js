var response = require("../model/res");
var customerDao = require("../dao/customerDao");

exports.customers = function(req, res){
    customerDao.getCustomer(function(error, rows) {
        if(error){
            console.log("error" +error);
            response.err(error, res)
        }else{
            response.ok(rows, res);
        }
    });

};
exports.updateCustomer = function(req, res){
    customerDao.updateCustomer(req.body, req.params["id"], function(error, rows){
        if(error){
            console.log(error);
            response.err(error, res);
        }else{
            response.ok("data updated", res);
        }
    });
};
exports.deleteCustomer = function(req, res){
    customerDao.delCustomer(req.params["id"], function(error, rows){
        if(error){
            console.log(error,err);
            response.err(error, res);
            
        }else{
            response.ok("data deleted", res)
            // return "data deleted";
        }
    });
};
exports.inCustomer = function(req, res){
    var data = { 
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        birthDate: req.body.birthDate, 
        phoneNumber: req.body.phoneNumber,
        phoneType : req.body.phoneType,
        username : req.body.username,
        password : req.body.password
     };
    customerDao.insertCustomer(data, function(error, rows){
        if(error){
            response.err(error,res);
        }else{
            response.ok(rows, res);
        }
    });
};
exports.seaCustomer = function (req, res){
    customerDao.searchCustomer(req.params["id"], function(error, rows){
        if(error){
            response.err(error,res);
        }else{
            response.ok(rows,res)
        }
    });
};