"use strict";
var esprima = require('esprima'),
    astutils = require('./ast-utils');

/*
 * the template is the part of ast tree with some meta-data
 * The meta-data describes additional logic used for comparision:
 * names what are extracted, wildcards for node type etc.
 *
 * templateNode is the object in form:
 * {
 *   types: [] array of accepted ast node types
 *   children: {} map of properties from node which should match template, key is the name of property, value is another templateNode, or an array of templateNodes
  *}
 *
 */

var ASTTemplate = function () {
    this.root = {};
};

ASTTemplate.prototype = {
    constructor: ASTTemplate,

    /**@private */
    nodeToTemplate: function (node) {
        var res = {};
        res.types = [node.type];
        res.children = {};

        astutils(node).iterate(function (name, child) {
            if (Array.isArray(child)) {
                res.children[name] = child.map(this.nodeToTemplate.bind(this));
            } else {
                res.children[name] = this.nodeToTemplate(child);
            }
        }.bind(this));
        return res;
    },

    fromNode: function (node) {
        this.root = this.nodeToTemplate(node);
    },

    fromSrc: function (src) {
        var ast = esprima.parse(src);
        this.root = this.nodeToTemplate(ast.body[0]);
    },

    match: function (node) {
        return this.matchNode(this.root, node);
    },

    matchNode: function (templateNode, node) {
        if (!node) return false;
        if (templateNode.types.indexOf(node.type)==-1) return false;
        for (var k in templateNode.children) {
            var tNode = templateNode.children[k];
            if (Array.isArray(tNode)) {
                if (!Array.isArray(node[k])) return false;
                //todo: match the arrays of templateNodes and ASTNodes
            } else {
                if (!this.matchNode(tNode, node[k])) return false;
            }
        }

        return true;
    }

};

exports.Templates = {
    'VariableDeclarator': new ASTTemplate().fromNode(esprima.parse('var x=1').body[0].declarations[0])
};

exports.ASTTemplate = ASTTemplate;
