"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InchConverter = function InchConverter() {
	_classCallCheck(this, InchConverter);
};

// Exportamos la clase


InchConverter.BASE = 2.54;

InchConverter.convertCmToInch = function (value) {
	return value / InchConverter.BASE;
};

InchConverter.convertInchToCm = function (value) {
	return InchConverter.BASE * value;
};

exports.default = InchConverter;