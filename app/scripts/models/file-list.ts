declare var angular;

module Models {

    interface JsFile {
        name: string
        requreCount: Number
        requiredFromCount: Number
    }

    interface Node {
        name:string;
        children?;
        file?:JsFile;
        expanded: boolean;
        selected: boolean;
    }

    var id = 0;
    class FileList {
        rawFiles = [];
        id = id++;
        loadDef = null;
        tree:Node = {
            selected: false,
            name: 'root',
            children: [],
            expanded: true
        };
        all;
        files = {};

        constructor(Restangular) {
            this.all = Restangular.all('files');
        }

        getFiles = function () {
            if (this.loadDef) return this.loadDef;
            this.loadDef = this.all.getList().then(this.parseFileList.bind(this));
            return this.loadDef;
        };

        getFile = function(filePath) {
            return this.getFiles().then(() => {return this.rawFiles[filePath]});
        };

        parseFileList = function (res) {
            res = res.originalElement || [];
            this.rawFiles = {};

            for (var i = 0; i < res.length; i++) {
                var path = res[i].name.split('/');
                var tree = this.tree;
                for (var j = 0; j < path.length; j++) {
                    var name = path[j];
                    var node:Node = tree.children.filter((node) => {return node.name == name})[0];

                    if (!node) {
                        node = {name: name, expanded: false, selected: false};
                        if (name.match(/.*js$/)) { node.file = res[i] }
                        else { node.children = [] }
                        tree.children.push(node);
                    }
                    tree = node;
                }
                this.rawFiles[res[i].name] = res[i];
            }
            return this.tree;
        };
    }

    export var mod = mod || angular.module('models', ['restangular']).config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:9000/api');
        RestangularProvider.setResponseExtractor(function (response) {
            var newResponse = response;
            newResponse.originalElement = angular.copy(response);
            return newResponse
        });
    });
    mod.service('fileList', FileList)
}

