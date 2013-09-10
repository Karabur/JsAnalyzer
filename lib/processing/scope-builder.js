"use strict";

var Scope = require('../analyze/scope.js').Scope;

var ScopeBuilder = function (file) {
    this.file = file;
    this.file.scope = new Scope();
};

ScopeBuilder.prototype = {
    process: function () {
        var scope = this.file.scope;

    }
};

exports.ScopeBuilder = ScopeBuilder;