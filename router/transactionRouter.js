module.exports = function(app) {
  var transaction = require("../controller/transactionController");

  app.route("/transactions").get(transaction.selTransaction);
  app.route("/transaction/:id").put(transaction.updTransaction);
  app.route("/transaction/:id").delete(transaction.delTransaction);
  app.route("/transaction").post(transaction.insTransaction);
  app.route("/transaction/:id").get(transaction.seaTransaction);
};
