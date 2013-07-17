var PORT = 9001;

var express = require('express'),
    expressApp = express();
    Application = require('../app.js');


var App = new Application();

expressApp.get('/files', function(req, res){
    res.json({asd:11})
});

expressApp.listen(PORT);
console.log('Listening on port '+ PORT);