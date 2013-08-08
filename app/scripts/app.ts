declare var angular;

module App {
    export var mod = mod || angular.module('AnalyzerApp',['controllers','models']);

    mod.config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/file', {
                    templateUrl: 'views/file-view.html',
                    controller: 'FileViewCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}

