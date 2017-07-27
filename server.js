
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

// designate express as the app to use
var app = express();

//designate variable that uses port when deployed to heroku or 8080
var PORT = process.env.PORT || 8080;
 
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
//require both routing files
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

//tell app where to listen and console log to confirm app is listening
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});