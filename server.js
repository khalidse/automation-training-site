// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     =  80;
var path = require('path');





require('rootpath')();


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating



// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport
// launch ======================================================================
app.use(express.static('./.'));
app.listen(port);
console.log('The magic happens on port ' + port);
