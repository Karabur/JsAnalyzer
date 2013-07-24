declare var angular;

module App {
    export var mod;
    mod.directive('stopEvent', function () {
        return {
            link: function (scope, element, attr) {
                element.bind(attr.stopEvent, function (e) {
                    e.stopPropagation();
                });
            }
        }
    })
};