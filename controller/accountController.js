// var response = require("../model/res");
// var accouuntDao = require("../dao/accountDao");

// // select
// exports.selAccount = function(req, res){
//     accouuntDao.selAccount(function(error, rows){
//         if(error){
//             response.err(error,res);
//         }else{
//             response.ok(rows, res);
//         }
//     });
// };

// // insert
// exports.insAccount = function (req, res) {
//     accouuntDao.insAccount(req.body, function (error, rows) {
//         if (error) {
//             response.err(error,res);
//         } else {
//             response.ok(rows, res);
//         }
//     });
// };

// // delete
// exports.delAccount = function (req, res) {
//     accouuntDao.delAccount(req.params["id"], function (error, rows) {
//         if (error) {
//             response.err(error,res);
//         } else {
//             response.ok(rows, res);
//         }
//     });
// };

// // update
// exports.updAccount = function (req, res) {
//     accouuntDao.updAccount(req.body,req.params["id"], function (error, rows) {
//         if (error) {
//             response.err(error,res);
//         } else {
//             response.ok(rows, res);
//         }
//     });
// };

// // search
// exports.seaAccount = function (req, res) {
//     accouuntDao.seaAccount(req.params["id"], function (error, rows) {
//         if (error) {
//             response.err(error,res);
//         } else {
//             response.ok(rows, res);
//         }
//     });
// };