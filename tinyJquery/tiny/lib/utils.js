/*
* 辅助工具函数
*/

var utils = {
	toArray: function(arr){
		//slice
		//call
		return [].slice.call(arr);
	},
	extend: function(child, parent, bool){
		if (bool == undefined) {
            bool = false;
        }
        for (var key in parent) {
            if (parent.hasOwnProperty(key)) {
                if (bool == true) {
                    child[key] = parent[key];
                } else {
                    child[key] = child[key] || parent[key];
                }
            }
        }
        return child;
	}
}


module.exports = utils;