'use strict';

var glob = require('glob'),
    Q = require('q'),
    config = require('./config'),
    JsAstFile = require('./js-ast-file.js').JsAstFile,
    processRequires = require('./processing/require-finder.js').process;

var FileProcessor = function () {
    this.files = [];
    this.loadDef = Q.defer();
    this.rootPath = config.srcRoot;
};

FileProcessor.prototype = {
    constructor: FileProcessor,

    loadFiles: function () {
        glob('**/*.js', {cwd: config.srcRoot}, function (er, files) {
            if (er) { files = [] }
            files = files.map(function (f) { return new JsAstFile(f, this.rootPath) }.bind(this));
            Q.all(files.map(function (f) { return f.loadPromise})).then(this.processFiles.bind(this,files));
        }.bind(this));
    },

    getFileList: function () {
        return this.loadDef.promise;
    },

    processFiles: function (files) {
        files.forEach(function (f) {
            console.log('process '+ f.fileName);
            processRequires(f);
        });
        this.loadDef.resolve(files);
    }
};

exports.FileProcessor = FileProcessor;