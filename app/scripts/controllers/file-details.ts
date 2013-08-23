declare var angular;

module Controllers {
    class FileDetailsController {

        static $inject = ['$scope', '$routeParams', 'fileList'];

        constructor($scope, $routeParams, fileList) {
            var name = decodeURIComponent($routeParams.name);
            console.log(name);
            $scope.fileName = name;
            $scope.file = fileList.getFile($scope.fileName);
        }

    }

//    noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('FileDetailsCtrl', FileDetailsController);
}



