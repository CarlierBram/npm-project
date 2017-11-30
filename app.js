var express = require('express');
var app = express();
var serv = require('http').Server(app);


app.get('/',function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 8080);

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    console.log("socket connection");
    io.emit('test',{id: "test"});
    
    socket.on("links",function(data){
        io.emit('linksklik', {id: data.id});
    })
    socket.on("rechts",function(data){
        io.emit('rechtsklik', {id: data.id});
    })
    socket.on("shoot",function(data){
        io.emit('shootklik', {id: data.id});
    })
    
});

