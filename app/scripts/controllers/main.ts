declare var angular;

module Controllers {
    export var mod;

    class MainController {

        static $inject = ['$scope', 'fileList'];

        constructor($scope, fileList) {
        }

    }

    mod.controller('MainCtrl', MainController);
}



