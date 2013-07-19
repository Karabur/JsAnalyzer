"use strict";

var glob = require('glob'),
    Q = require('q'),
    fs = require('fs'),
    config = require('./config');

var Application = function () {

};

Application.prototype = {
    constructor: Application,
    getFileList: function () {
        var def = Q.defer();
        glob('**/*.js',{cwd:config.srcRoot}, function (er, files) {
            if (er) {def.resolve([])}
            else {
                def.resolve(files);
            }
        });
        return def.promise;
    }
};

exports.Application = Application;