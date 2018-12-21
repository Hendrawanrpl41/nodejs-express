var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./router/router');
var customerRouter = require('./router/customerRouter');
var accountRouter = require('./router/accountRouter');
customerRouter(app);
routes(app);
accountRouter(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);