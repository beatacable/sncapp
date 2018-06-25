var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + "/views"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
//server.use(express.static(__dirname + "/controllers"));
app.use('/Public', express.static(__dirname + "/Public"));
//app.use('/Config', express.static(__dirname + "/Config"));

// app.get('/', function (req, res) {
//   res.send('testing port 3000! Its working!!!!')
// });

app.get('/', function (req, res) {
 res.sendFile(__dirname +'/index.html');

});

 // app.use('/', apiroutes);

 // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// var routes = require("./routes/routes.js")(app);

var server = app.listen(3040, function () {
    console.log("Listening on port %s...", server.address().port);
});



exports = module.express = app;
