"use strict";

function findRequireInNode(node, requires) {
    if (node.type == 'CallExpression' && node.callee.type == 'Identifier' && node.callee.name == 'require'
        && node['arguments'].length && node['arguments'][0].type=='Literal') {
        requires.push(node['arguments'][0].value);
    }

    if (node.type == 'MemberExpression') {
        findRequireInNode(node.object, requires);
    }    
}

function processVariableDeclaration(requires, vd) {
    var init = vd.init;
    if (!init) return requires;
    findRequireInNode(init, requires);
    return requires;
}

module.exports = {
    process: function (file) {
        var ast = file.ast;
        var requires = [];
        ast.body && ast.body.forEach(function (st) {
            if (st.type=='VariableDeclaration') {
                st.declarations.reduce(processVariableDeclaration, requires);
            }
        });
        file.requireCount = requires.length;
        file.requires = requires;
    }
};
