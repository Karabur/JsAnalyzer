"use strict";

var esprima = require('esprima'),
    q = require('q'),
    fs = require('fs');

var JsAstFile = function (fileName, rootPath) {
    this.fileName = fileName;
    this.rootPath = rootPath;
    this.loadDef = q.defer();
    fs.readFile(rootPath + fileName, this.onFileRead.bind(this));
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
    },

    onFileRead: function (err, data) {
        if (err) throw err;
        this.ast = esprima.parse(data);
//        console.log('Parsed:'+this.fileName);
    }
};

exports.JsAstFile = JsAstFile;