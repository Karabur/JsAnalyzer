'use strict';

var ScopeBuilder = require('../lib/processing/scope-builder.js').ScopeBuilder,
    JsFile = require('./mocks/js-file.js').JsFile,
    fs = require('fs');

describe('Scope builder', function () {
    beforeEach(function () {
//       this.file = new JsFile(fs.readFileSync(__dirname + '/fixtures/scope-builder-test.js'));
//        this.builder = new ScopeBuilder(this.file);
    });

    it('should basically create scope', function () {
        var src = '';

        var file = new JsFile(src);
        var builder = new ScopeBuilder(file);

        builder.process();
        expect(file.scope).toBeDefined();
    });

    it('should extract variables', function () {
        var src = 'var x = function () {}';

        var file = new JsFile(src);
        var builder = new ScopeBuilder(file);
//        expect(file.scope.getName('x')).not.toBeNull();
    });
});
