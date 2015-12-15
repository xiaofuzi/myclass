var orm = require('orm'),
	config = require('../config');

module.exports = function(model){
	if(config.db.type == 'mysql'){
		var db = config.db;
		var dbInfo = db.type + '://' + db.username + ':' + db.password + '@' + db.host+ ':'+ 3306 + '/' + db.name; 
		orm.connect(dbInfo, function(err, db){
			if(err){
				return console.error('Connection error: ' + err);
			}else{
				console.log("Connection success!")
				return db;
			}
		});
	}
}