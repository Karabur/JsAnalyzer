"use strict";

var Scope = function () {
    this.names = [];
};

Scope.prototype = {
    constructor: Scope,
    getName: function (name) {
        for (var i = 0; i < this.names.length; i++) {
            if (this.names[i].name == name) return this.names[i];

        }
        return null;
    }
};

exports.Scope = Scope;
