var dom = require('./dom'),
    utils = require('./utils'),
    extend = utils.extend;

/*
 * dom libary
 */

/*
 * 选择元素
 * dom操作
 */

function DOM(selector) {
    this.selector = selector;
    this.element = null;
    this.elements = null;
    this.dom = null;
}

var DomProto = DOM.prototype;

extend(DOM.prototype, dom);
extend(DOM, ajax);

console.log(DomProto);
var tinyJquery = function(selector){
	var el = new DOM(selector);
	console.log(el);
	el.init(selector);

	return el;
}

module.exports = tinyJquery;
