const port = 80;
var express = require('express');
var app = express();
//var app = require('express')();
var http = require('http').createServer(app);

app.use(express.static('public'));
app.use('/public', express.static(__dirname +'/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
