version = '0.0.0';
var	express = require('express');
	global = require('./config');

	fs = require('fs');

	//config
	config = require('nconf');
	app = express();

	//router
	router = express.Router();
	app.use(router);
	controller = require(global.dir.system+'engine/controller');
	controller.init(app);

app.listen(3000,function(){
  console.log('Your Store strating!');
});
