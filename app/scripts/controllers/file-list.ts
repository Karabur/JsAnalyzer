declare var angular;

module Controllers {
    class FileListController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
            $scope.files = fileList.getFiles();
            $scope.node = $scope.files;
            $scope.nameOrder = (node) => { return !node.file ? '1' + node.name : '2' + node.name; };
        }

    }

//    noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('FileListCtrl', FileListController);
}



