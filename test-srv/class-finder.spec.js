'use strict';

var ClassFinder = require('../lib/processing/class-finder').ClassFinder,
    JsAstFile = require('./mocks/js-ast-file.js').JsAstFile,
    fs = require('fs');

describe('Class finder', function () {
    beforeEach(function () {
       this.file = new JsAstFile(fs.readFileSync(__dirname + '/fixtures/class-finder-test.js'));
        this.finder = new ClassFinder(this.file);
    });

    it('should find class by prototype use', function () {
        this.finder.process();
        expect(this.file.classList).toBeDefined();
//        expect(this.file.classList.SimpleClass).toBeDefined();
    });
});
