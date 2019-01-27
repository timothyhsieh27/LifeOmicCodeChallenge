var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  /* created model loading here */
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

/* mongoose instance connection url connection */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Import and register route */
var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});