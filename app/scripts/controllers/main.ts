declare var angular;

module Controllers {
    class MainController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
            $scope.files = fileList.getFiles();
            $scope.title = 'Work!'
        }
    }

    //noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('MainCtrl', MainController);
}



