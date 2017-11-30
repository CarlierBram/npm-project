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
    socket.emit('test',{id: "test"});
    
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

