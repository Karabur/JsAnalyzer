'use strict';
var processRequires = require('../lib/processing/require-finder').process,
    JsAstFile = require('./mocks/js-ast-file.js').JsAstFile,
    fs = require('fs');

describe('Require processor', function () {
    it('should extract requires', function () {
        var file = new JsAstFile(fs.readFileSync(__dirname + '/fixtures/require-test.js'));
        processRequires(file);
        expect(file.requires.length).toBe(3);
        expect(file.requires.indexOf('./local')).not.toEqual(-1);
        expect(file.requires.indexOf('./local2')).not.toEqual(-1);
        expect(file.requires.indexOf('../upfolder/upfile')).not.toEqual(-1);
    })

});