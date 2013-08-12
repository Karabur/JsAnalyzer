'use strict';

var path = require('path');

module.exports = function (indexPath) {
    return function(req, res, next) {
        console.log(req.url);
        res.sendfile(indexPath);
    }
};