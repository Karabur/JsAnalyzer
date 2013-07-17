"use strict";
var fs = require('fs'),
    JsAstFile = require('js-ast-file').JsAstFile;

var FileFinder = function () {

};

FileFinder.prototype = {
    constructor: FileFinder,

    getFile: function (path) {
        if (!this.files[path]) {
            this.files[path] = new JsAstFile(fs.readFileSync(path));
        }
        return this.files[path];
    }
};

