'use strict';

var esprima = require('esprima');

function JsAstFile (text) {
    this.ast = esprima.parse(text);
}

JsAstFile.prototype = {
    constructor: JsAstFile
};

exports.JsAstFile = JsAstFile;
