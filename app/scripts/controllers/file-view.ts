declare var angular;

module Controllers {
    export var mod;

    class FileViewController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
        }

    }

    mod.controller('FileViewCtrl', FileViewController);
}



