declare var angular;

module Controllers {
    export var mod;
    var f = 0;

    class FileListController {

        static $inject = ['$scope', 'fileList', '$location'];
        selectOff:any;

        constructor(public $scope, fileList, public $location) {
            $scope.node = fileList.getFiles();
            $scope.nameOrder = (node) => { return !node.file ? '1' + node.name : '2' + node.name; };
            $scope.onClick = this.onClick.bind(this);
            if (this.$scope.node.selectedNode) {
                this.$scope.node.selectedNode.selected = false;
                this.$scope.node.selectedNode = undefined;
            }
            this.selectOff = $scope.$root.$on('fileSelect', this.focusFile.bind(this));
            $scope.$on('$destroy', this.destroy.bind(this));
        }

        onClick(node) {
            if (node.file) {
                this.$location.path('/file/'+encodeURIComponent(node.file.name));
            } else {
                node.expanded = !node.expanded
            }
        }

        destroy() {
            this.selectOff();
        }

        focusFile(e, file) {
            var path = file.split('/');
            this.$scope.node.then(function (node) {
                var found = false;
                node = node.children.filter(function (d) { return d.name == path[0]})[0];
                while (node && !node.file) {
                    path.splice(0, 1);
                    node.expanded = true;
                    node = node.children.filter(function (d) { return d.name == path[0]})[0];
                }
                node.selected = true;
                this.$scope.node.selectedNode = node;
                this.$scope.selectedNode = node;
            }.bind(this))
        }
    }

    mod.controller('FileListCtrl', FileListController);
}



