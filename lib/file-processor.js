'use strict';

var glob = require('glob'),
    Q = require('q'),
    config = require('./config'),
    JsAstFile = require('./js-ast-file.js').JsAstFile;

var FileProcessor = function () {
    this.files = [];
    this.loadDef = Q.defer();
};

FileProcessor.prototype = {
    constructor: FileProcessor,

    loadFiles: function () {
        glob('**/*.js', {cwd: config.srcRoot}, function (er, files) {
            if (er) {files = []}
            files = files.map(function (f) { return new JsAstFile(f) });
            this.loadDef.resolve(files);
        }.bind(this));
    },

    getFileList: function () {
        return this.loadDef.promise;
    }
};

exports.FileProcessor = FileProcessor;