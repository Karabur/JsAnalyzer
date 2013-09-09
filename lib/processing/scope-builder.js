"use strict";
var ScopeBuilder = function (file) {
    this.file = file;
    this.file.scope = {};
};

ScopeBuilder.prototype = {
    process: function () {

    }
};

exports.ScopeBuilder = ScopeBuilder;