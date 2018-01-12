var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var oneDay = 86400000; 
//choices made in morning.html, workWithChoices.html, party1.html

var lilaRoom = "i";
var ghostRoom = "i";

var block = ["0", "0", "0"];  //0 indicates nothing blocked rest 1-3 correspond to choice blocked
								

app.use(express.static(__dirname)); //loads the website

io.on('connection', function(socket){ //listens for user events 

  socket.on('user input', function(msg){ //detects when event happens and runs code in brackets

   console.log('user input: ' + msg); //prints to console

	io.emit('server output' , msg); //outputs an event heard by all users

  });

  socket.on('getBlock', function(msg){ 
  	console.log('getBlock: ' + msg);
  	if(msg == "0"){
	socket.emit('block' , block[0]);
	}
	if(msg == "1"){
	socket.emit('block' , block[1]);
	}
	if(msg == "2"){
	socket.emit('block' , block[2]);
	}
});

socket.on('setBlock', function(message){ 
	console.log('setBlock: ' + message);
	var msg = message.split(',');
  	if(msg[0] == "0"){
	block[0] = msg[1];
	io.emit('block' , block[0]);
	}
	if(msg[0] == "1"){
	block[1] = msg[1];
	io.emit('block' , block[1]);
	}
	if(msg[0] == "2"){
	block[2] = msg[1];
	io.emit('block' , block[2]);
	}
});

socket.on('getRoom', function(msg){ 
	if(msg == "lila"){
		socket.emit("returnRoom", lilaRoom);
		lilaRoom = lilaRoom + "i";
	}
	if(msg == "ghost"){
		socket.emit("returnRoom", ghostRoom);
		ghostRoom = ghostRoom + "i";
	}
   console.log('user input: ' + msg); 

  });

});
http.listen(3002);
console.log('listening on :3002');