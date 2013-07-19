declare var angular;

module Models {

    interface Node {
        name:string;
        children?;
        file?:boolean;
    }

    var id = 0;
    class FileList {
        rawFiles:string[] = [];
        id = id++;
        loadDef = null;
        tree:Node = {
            name: 'root',
            children: {}
        };
        all;

        constructor(Restangular) {
            this.all = Restangular.all('files');
        }

        getFiles = function () {
            if (this.loadDef) return this.loadDef;
            return this.all.getList().then(this.parseFileList.bind(this));
        };

        parseFileList = function (res) {
            res = res || [];
            this.rawFiles = res;

            for (var i = 0; i < res.length; i++) {
                var path = res[i].split('/');
                var tree = this.tree;
                for (var j = 0; j < path.length; j++) {
                    var name = path[j];

                    if (!tree.children[name]) {
                        var node:Node = {name: name};
                        if (name.match(/.*js$/)) { node.file = true }
                        else { node.children = {} }
                        tree.children[name] = node;
                    }
                    tree = tree.children[name];
                }
            }
            return this.tree;
        };
    }

    export var mod = mod || angular.module('models', ['restangular']).config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:9001/api');
    });
    mod.service('fileList', FileList)
}

