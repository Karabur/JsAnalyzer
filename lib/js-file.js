"use strict";

var esprima = require('esprima'),
    q = require('q'),
    fs = require('fs');

var JsFile = function (fileName, rootPath) {
    this.fileName = fileName;
    this.rootPath = rootPath;
//    this.requires = [];
    this.requiredFromCount = 0;
    /** @private */ this.loadDef = q.defer();
    this.loadPromise = this.loadDef.promise;

    fs.readFile(rootPath + fileName, this.onFileRead.bind(this));
};

JsFile.prototype = {
    constructor: JsFile,
    toJSON: function () {
        return {
            name: this.fileName,
            requires: this.requires,
            requiredFromCount: this.requiredFromCount
        };
    },

    onFileRead: function (err, data) {
        if (err) throw err;
        this.ast = esprima.parse(data);
        this.loadDef.resolve(this);
        console.log('Parsed:'+this.fileName);
    }

};

exports.JsFile = JsFile;