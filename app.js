var express = require('express');
var app = express();
var serv = require('http').Server(app);
//var serv2 = require('http').Server(app);


app.get('/',function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
//serv2.listen(3000);
console.log("listen on 2000");

var io = require('socket.io')(serv,{});
//var io2 = require('socket.io')(serv2,{});

io.sockets.on('connection', function(socket){
    console.log("socket connection");
    io.emit("test",{id: "test"});
    
    socket.on("links",function(data){
        console.log("linksclick " + data.id);
    })
    socket.on("rechts",function(data){
        console.log("rechtsclick " + data.id);
    })
    socket.on("shoot",function(data){
        console.log("SHOOT " + data.id);
    })
    
});

