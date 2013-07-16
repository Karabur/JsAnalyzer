var fs = require('fs');
var af = require("./js-ast-file");
var JsAstFile = af.JsAstFile;

var FileFinder = (function () {
    function FileFinder() {
    }
    FileFinder.prototype.getFile = function (path) {
        if (!this.files[path]) {
            this.files[path] = new JsAstFile(fs.readFileSync(path));
        }
        return this.files[path];
    };
    return FileFinder;
})();
exports.FileFinder = FileFinder;

//@ sourceMappingURL=file-finder.js.map
