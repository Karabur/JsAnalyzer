"use strict";

var glob = require('glob'),
    Q = require('q'),
    fs = require('fs');

var Application = function () {

};

Application.prototype = {
    constructor: Application,
    srcRoot: '/home/ant/Work/Web/Trader/js',
    getFileList: function () {
        var def = Q.defer();
        glob('**/*.js',{cwd:this.srcRoot}, function (er, files) {
            if (er) {def.resolve([])}
            else {
                def.resolve(files);
            }
        });
        return def.promise;
    }
};

exports.Application = Application;