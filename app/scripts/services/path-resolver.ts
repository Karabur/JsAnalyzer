declare var angular;

module Services {
    export var mod;

    class PathResolver {

        constructor() {
        }

        resolve(basePath, toPath) {
            basePath = basePath.split('/');
            toPath = toPath.split('/');
            var res;

            if (toPath[0]!=='.'&& toPath[0]!=='..') {
                res = toPath.join('/');
            } else {

            basePath.splice(-1);
            while (toPath[0] == '.') toPath.splice(0,1);
            while (toPath[0] == '..') {
                toPath.splice(0,1);
                basePath.splice(-1);
            }
                res = basePath.concat(toPath).join('/')
            }

            if (res.substr(-3) !== '.js') res += '.js';
            return res;
        }
    }

    mod.service('pathResolver', PathResolver)
}



