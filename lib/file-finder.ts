///<reference path='../defs/node/node.d.ts'/>
///<reference path='./js-ast-file.ts'/>

//var fs = require('fs');
import fs = module('fs');
import af = module('js-ast-file');
var JsAstFile = af.JsAstFile;

export class FileFinder {
    files:Object;

    getFile(path:string) {
        if (!this.files[path]) {
            this.files[path] = new JsAstFile(fs.readFileSync(path));
        }
        return this.files[path];
    }
}