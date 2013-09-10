'use strict';

function iterate(node, cb) {
    switch (node.type) {
        case 'VariableDeclaration' :
            cb('declarations', node.declarations);
            break;
        case 'VariableDeclarator' :
            cb('id', node.id);
            cb('init', node.init);
            break;
    }
}

module.exports = function (node) {
    var res = {};
    res.iterate = iterate.bind(res, node);
    return res;
};
