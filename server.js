'use strict'

var http = require('http');
var Router = require(__dirname + '/lib/router.js');
var writeDirectory = require(__dirname + '/lib/writeDirectory.js');
var sendFile = require(__dirname + '/lib/sendFile.js');
var respond = require(__dirname + '/lib/respond.js');

var router = new Router();

router.get('/test', function(req, res){
  respond(res, 'Test worked!');
});

router.get('/', function(req, res) {
  router.routes['GET']['/public/index.html'](req, res);
})

writeDirectory(router, '/public', 'GET');

var server = http.createServer(function(req, res) {
  router.route(req, res);
}).listen(3000, function() {
  console.log('server listening on port 3000');
});
