var db = require('../lib/db')();

console.log(db);
function imageModel(image){
	var image = {
		id: 	image.id,
		name: 	image.name,
		hred: 	image.href
	}
	image.create = function(){

	}

	return image;
}

module.exports = imageModel();
