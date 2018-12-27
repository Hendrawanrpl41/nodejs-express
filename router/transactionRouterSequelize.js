"use strict";

module.exports = function (app) {
    var controller = require("../controller/transactionControllerSequelize");

    app.route("/transactions").get(controller.transactions);
    app.route("/transaction").post(controller.insertTransaction);
    app.route("/transaction/:id").get(controller.getTransactionById);
    app.route("/transaction").put(controller.updateTransaction);
    app.route("/transaction/:id").delete(controller.del);
};
