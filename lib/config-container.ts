///<reference path='../defs/node/node.d.ts'/>

var fs = require('fs');

export class ConfigContainer {
    config:Object;

    constructor(private configPath){
        this.config = JSON.parse(fs.readFileSync(configPath,'r'));
    }

    getValue(name:string){
        return this.config[name];
    }
}