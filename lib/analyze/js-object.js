"use strict";

var JsObject = function (node, type) {
    this.node = node;
    this.type = type;
};

JsObject.prototype = {
    constructor: JsObject
};

exports.JsObject = JsObject;
