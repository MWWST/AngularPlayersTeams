var teams = require('../controllers/teams.js');
module.exports= function(app){
	app.get('/',teams.home)
}