declare var angular;

module Controllers {
    export var mod;

    class FileListController {

        static $inject = ['$scope', 'fileList', '$location'];

        constructor(public $scope, fileList, public $location) {
            $scope.files = fileList.getFiles();
            $scope.node = $scope.files;
            $scope.nameOrder = (node) => { return !node.file ? '1' + node.name : '2' + node.name; };
            $scope.onClick = this.onClick.bind(this);
        }

        onClick(node) {
            if (node.file) {
                this.$location.path('/file/'+encodeURIComponent(node.file.name));
            } else {
                node.expanded = !node.expanded
            }
        }
    }

    mod.controller('FileListCtrl', FileListController);
}



