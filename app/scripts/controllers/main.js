var MainController = (function () {
    function MainController($scope) {
        $scope.awesomeThings = [
            'TypeScript',
            'AngularJS',
            'Karma'
        ];
    }
    MainController.$inject = ['$scope'];
    return MainController;
})();

angular.module('AnalyzerApp').controller('MainCtrl', MainController);
//@ sourceMappingURL=main.js.map
