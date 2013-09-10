'use strict';

var esprima = require('esprima');

function JsFile (text) {
    this.ast = esprima.parse(text);
}

JsFile.prototype = {
    constructor: JsFile
};

exports.JsFile = JsFile;
