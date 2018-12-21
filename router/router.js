'use strict';

module.exports = function (app) {
    var todoList = require('../controller/controller');
    var controller = require('../controller/customerController');

    app.route('/')
        .get(todoList.index);
    // app.route('/customers').get(controller.customers);
    // app.route('/customer')
    //     .get(todoList.customer);
    // app.route('/testpost')
    //     .post(todoList.testpost);
    // app.route('/customer')
    //     .post(todoList.insertcustomer);
    // app.route('/customer/:id')
    //     .get(todoList.getById);
    // app.route('/customer/:id')
    //     .delete(todoList.deletecustomer);
    // app.route('/customer/:id')
    //     .put(todoList.updatecustomer);
};
