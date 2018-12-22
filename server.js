
var fs = require("fs");
var morgan = require("morgan");
var path = require("path");
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

var logger = require("./winston-logger");

app.use(morgan('combined', { "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");


var routes = require('./router/router');
var customerRouter = require('./router/customerRouter');
var accountRouter = require('./router/accountRouter');
var transactionRouter = require('./router/transactionRouter');
customerRouter(app);
routes(app);
accountRouter(app);
transactionRouter(app);
app.listen(port);
// console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
logger.debug("Hendrawan bootcamp, RESTful API server started on: " + port);