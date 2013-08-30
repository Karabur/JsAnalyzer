declare var angular;

module Controllers {
    export var mod;

    class FileDetailsController {

        static $inject = ['$scope', '$routeParams', 'fileList', 'pathResolver', '$location'];
        name:string;

        constructor($scope, $routeParams, fileList, public pathResolver, public $location) {
            var name = decodeURIComponent($routeParams.name);
            this.name = name;
            $scope.name = name;
            $scope.file = fileList.getFile(name);
            $scope.onRequireClick = this.onRequireClick.bind(this);
        }

        onRequireClick(file) {
            this.$location.path('/file/'+encodeURIComponent(this.pathResolver.resolve(this.name, file)));
        }
    }

//    noinspection JSUnusedAssignment

    mod.controller('FileDetailsCtrl', FileDetailsController);
}



