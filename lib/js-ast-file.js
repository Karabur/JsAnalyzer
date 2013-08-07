"use strict";

var esprima = require('esprima');

var JsAstFile = function (fileName) {
    this.fileName = fileName
};

JsAstFile.prototype = {
    constructor: JsAstFile,
    toJSON: function () {
        var res = {
            name: this.fileName,
            requireCount:0,
            requiredFromCount:0
        };

        return res;
    }
};

exports.JsAstFile = JsAstFile;