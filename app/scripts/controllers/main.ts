declare var angular;

module Controllers {
    class MainController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
            $scope.files = fileList.getFiles();
            $scope.title = 'Work!';
            $scope.nameOrder = function (node) {
                return !node.file ? '1'+node.name : '2'+node.name;
            };
        }

    }

    //noinspection JSUnusedAssignment
    export var mod = mod || angular.module('controllers', ['models']);
    mod.controller('MainCtrl', MainController);
}



