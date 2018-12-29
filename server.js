
var fs = require("fs");
var cors = require("cors");
var morgan = require("morgan");
var path = require("path");
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

var logger = require("./winston-logger");

app.use(morgan('combined', { "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");



var customerRouterSequlize = require('./router/customerRouterSequelize')
var accountRouterSequlize = require("./router/accountRouterSequelize");
var transactionRouterSequlize = require("./router/transactionRouterSequelize");
customerRouterSequlize(app);
accountRouterSequlize(app);
transactionRouterSequlize(app);
app.listen(port);
logger.error("Hendrawan bootcamp, RESTful API server started on: " + port);