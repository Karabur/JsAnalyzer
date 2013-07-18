declare var angular;



class MainController {

    static $inject = ['$scope'];
    constructor($scope) {
        $scope.awesomeThings = [
            'TypeScript',
            'AngularJS',
            'Karma'
        ];
    }
}

//noinspection JSUnusedAssignment
angular.module('AnalyzerApp', ['restangular']).controller('MainCtrl', MainController);


