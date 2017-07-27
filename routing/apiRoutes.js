
//require information placed in friends.js file
var friends = require('../app/data/friends.js');

module.exports = function(app) {
	app.get('../api/friends', function(req, res) {
		res.json(friends);
		// body...
	});
}