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

        return this;
    },
    append: function(html) {
        this.element.innerHTML = this.element.innerHTML + html;
        return this;
    },
    prepend: function(){
    	return this;
    }
}
