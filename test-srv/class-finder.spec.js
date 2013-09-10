'use strict';

var ClassFinder = require('../lib/processing/class-finder').ClassFinder,
    JsFile = require('./mocks/js-file.js').JsFile,
    fs = require('fs');

describe('Class finder', function () {
    beforeEach(function () {
       this.file = new JsFile(fs.readFileSync(__dirname + '/fixtures/class-finder-test.js'));
        this.finder = new ClassFinder(this.file);
    });

    it('should find class by prototype use', function () {
        this.finder.process();
        expect(this.file.classList).toBeDefined();
//        expect(this.file.classList.SimpleClass).toBeDefined();
    });
});
