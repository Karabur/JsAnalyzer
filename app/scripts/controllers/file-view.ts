declare var angular;

module Controllers {
    class FileViewController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
        }

    }

//    noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('FileViewCtrl', FileViewController);
}



