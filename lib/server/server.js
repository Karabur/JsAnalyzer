var PORT = 9000;

var express = require('express'),
    expressApp = express();
    Application = require('../app.js').Application;


var App = new Application();
var cors = require('./cors-middleware.js'),
    indexmw = require('./index-middleware.js');

expressApp.all('/api/files', function(req, res, next){
    App.getFileList().then(function (data) {
        res.json(data)
    });
});

expressApp.use(cors);
var path = require('path');
expressApp.use(express.static(path.resolve('../.tmp')));
expressApp.use(express.static(path.resolve('../app')));
expressApp.use(indexmw(path.resolve('../app/index.html')));


expressApp.listen(PORT);
console.log('Listening on port '+ PORT);