'use strict';

var ClassFinder = function (file) {
    this.file = file;
    this.file.classList = this.file.classList | {};
};

ClassFinder.prototype = {
    process: function () {

    }
};

exports.ClassFinder = ClassFinder;