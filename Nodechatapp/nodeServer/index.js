// Node server which will handle socket io connections

//const io = require('socket.io')(8000) //wanna use socket.io on 8000 port
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });
//server will listen to incoming events
const users = {};

io.on('connection', socket =>{ //io.on is an instance of socket.io, listen to all instance
    socket.on('new-user-joined', name =>{ //particular instance //append to list
        console.log("New User", name);
        users[socket.id] = name; //giving an id to each user
        socket.broadcast.emit('user-joined', name); //show to others

    });

    socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]}); //if anyone sent message, show it to everyone
    });

    socket.on('disconnect', message =>{
      socket.broadcast.emit('left', users[socket.id]);
     //if anyone left, show it to everyone
     delete users[socket.id];
  });
})