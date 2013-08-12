declare var angular;

module Controllers {
    class FileDetailsController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
        }

    }

//    noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('FileDetailsCtrl', FileDetailsController);
}



