var jQuery = function(param) {
	if(typeof(param) === 'function') {
		window.addEventListener("load", param);
		return;
	}
	
	var elements;
	if(typeof(param) === 'string') {
		elements = document.querySelectorAll(param);
	}
	return new _jQuery(elements || []);
}

var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < this.length; i++) {
		this[i] = elements[i];
	}	
}


_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.length; i++) {
		this[i].addEventListener('click', handler);
		console.log(this[i]);
	}	
	return this;
} 

_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++) {
		this[i].style[name] = value;
		console.log(this[i]);
	}
	return this;
} 

_jQuery.prototype.get = function(index) {
	return this[index];
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';

var $ = jQuery;