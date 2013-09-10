'use strict';

var ASTTemplate = require('../lib/processing/ast-template.js').ASTTemplate,
    esprima = require('esprima'),
    fs = require('fs');

describe('AST Template', function () {
    it('should do basic template matching', function () {
        var ast,
            tpl = 'var x = 2',
            template = new ASTTemplate();
        template.fromSrc(tpl);
        ast = esprima.parse('var x = 2');
        expect(template.match(ast.body[0])).toBeTruthy();
        ast = esprima.parse('x = 2');
        expect(template.match(ast.body[0])).toBeFalsy();
    });

});
