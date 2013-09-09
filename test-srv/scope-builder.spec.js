'use strict';

var ScopeBuilder = require('../lib/processing/scope-builder.js').ScopeBuilder,
    JsAstFile = require('./mocks/js-ast-file.js').JsAstFile,
    fs = require('fs');

describe('Class finder', function () {
    beforeEach(function () {
       this.file = new JsAstFile(fs.readFileSync(__dirname + '/fixtures/scope-builder-test.js'));
        this.builder = new ScopeBuilder(this.file);
    });

    it('should find class by prototype use', function () {
        this.builder.process();
        expect(this.file.scope).toBeDefined();
    });
});
