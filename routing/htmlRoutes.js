var path = require('path');

//use module.exports to send data to other files
module.exports = function(app) {

		app.get('/survey', function(req, res) {
	    res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

		app.use(function(req, res) {
	    res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}
