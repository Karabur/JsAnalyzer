declare var angular;

module App {
    export var mod = mod || angular.module('AnalyzerApp',['controllers','models']);

    mod.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/file/:name', {
                templateUrl: 'views/file-view.html',
                controller: 'FileViewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}

