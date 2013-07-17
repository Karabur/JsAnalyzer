var PORT = 9001;

var express = require('express'),
    expressApp = express();
    Application = require('../app.js').Application;


var App = new Application();

expressApp.get('/files', function(req, res){
    App.getFileList().then(function (data) {res.json(data)});
});

expressApp.listen(PORT);
console.log('Listening on port '+ PORT);