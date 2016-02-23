(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

console.log(DomProto);
var tinyJquery = function(selector){
	var el = new DOM(selector);
	console.log(el);
	el.init(selector);

	return el;
}

module.exports = tinyJquery;

},{"./dom":2,"./utils":3}],2:[function(require,module,exports){
var utils = require('./utils'),
	toArray = utils.toArray;

var dom = {
    /*
     * dom selector
     */
    init: function() {
        var selector = this.selector;

        this.dom = document.querySelectorAll(selector); //伪数组
        this.elements = toArray(this.dom);
        this.element = this.elements[0];
    },
    append: function(html) {
        this.element.innerHTML = this.element.innerHTML + html;
        return this;
    },
}

},{"./utils":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
(function (global){
var $ = require('./lib/core');

//window
global.$ = $;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/core":1}]},{},[4]);
