"use strict";

module.exports = function(app) {
  var controller = require("../controller/accountControllerSequelize");

  app.route("/accounts").get(controller.accounts);
  app.route("/account").post(controller.insertCustomer);
  app.route("/account/:id").get(controller.getCustomerById);
  app.route("/account").put(controller.updateCustomer);
  app.route("/account/:id").delete(controller.del);
};
