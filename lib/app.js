"use strict";

var FileProcessor = require('./file-processor.js').FileProcessor;

var Application = function () {
    this.fileProcessor = new FileProcessor();
    this.fileProcessor.loadFiles();
};

Application.prototype = {
    constructor: Application,

    getFileList: function () {
        return this.fileProcessor.getFileList();
    }
};

exports.Application = Application;