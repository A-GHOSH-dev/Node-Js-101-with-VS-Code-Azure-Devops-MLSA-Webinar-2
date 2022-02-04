### Download a chat icon img.

### Download a chat notification tone mp3.

### Make an index.html file.

## INDEX.HTML:
```
<!DOCTYPE html>
<html lang="en">
<link>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NODE Chat Application</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <img src="wechat_app.png" alt="wechat logo" class="logo">
        <h1>Welcome to Node Js 101 with VS Code and Azure Devops Chat App</h1>
        
    </nav>
    <div class="container">
       <div class="message left">Arun: Hello I am Arun</div>
        <div class="message right">Me: Hi I am Ananya</div>
    </div>
    <div class="send">
        <form action="#" id="send-container">
            <input type="text" name="messageInp" id="messageInp">
            <button class="btn" type="submit">Send</button>
        </form>
    </div>
</body>
</html>
```

### Make a ccs folder. 

### Make style.css inside css folder.

## STYLE.CSS:
```
.logo{
    display: block;
    margin: auto;
    width: 50px;
    height: 30px;
}

body{
    height: 100%;
    background-image: linear-gradient(rgb(22, 255, 1), rgb(255, 0, 157));
}
h1{
    margin-top: 12px;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
.container{
    max-width: 955px;
    background-color: rgba(247, 7, 155, 0);
    margin: auto;
    height: 60vh;
    padding: 33px;
    overflow-y: auto;
    margin-bottom: 23px;
    border: 2px solid black;
}

.message{
    background-color: rgb(0, 0, 0);
    font-size: larger;
    color: white;
    font-weight: bold;
    width: 40%;
    padding: 20px;
    margin: 17px 12px;
    border: 2px solid rgb(5, 114, 10);
    border-radius: 10px;
}

.left{
    float: left;
    clear: both;
}

.right{
    float: right;
    clear: both;
}

#send-container{
    text-align: center;
    max-width: 985px;
    width: 100%;
    display: block;
    margin: auto;
}

#messageInp{
    width: 92%;
    border: 2px solid black;
    border-radius: 6px;
    height: 34px;
}

.btn{
    cursor: pointer;
    border: 2px solid black;
    border-radius: 6px;
    height: 34px;
}
```

### Make a js folder.

### Make a client.js inside js folder.

### Link the client.js script an the style.css file to index.html file.
- defer separates the script from interfering with the html file.
```
  <title>NODE Chat Application</title>
    <script defer src="js/client.js"></script>
    <link rel="stylesheet" href="css/style.css">
```

### Make a nodeServer named folder.

### Put the following commands in Terminal.
```
cd nodeServer
npm init
```

### Install Socket.io
```
npm i socket.io
```

### Create an index.js file inside nodeServer
Index.js is the nodeserver that will handle the socket.io connections.

## INDEX.JS:
- Using socket.io on port 8000. The require('socket.io')(http) creates a new socket.io instance attached to the http server.
```
const io = require('socket.io')(8000)
```
- Incase you are getting some error use this
```
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });
```
- server will listen to incoming events.
- make empty space for storing the users.
```
const users = {};
```
- io.on is an instance of socket.io, listen to all instances. Whenever there is connection made, what has to be done with the connection is decided by io.on.
- socket.on accepts an event named new-user-joined
- when it recieves the event new-user-joined, it appends the user name in the users.
- gives separate id to users who joined socket.id.
- socket.broadcast.emit emits an event user-joined with the user name to all other users except the one who joined to inform them that this new user joined.
- We will print New User in console whenever a new user joins.
```
io.on('connection', socket =>{ 
    socket.on('new-user-joined', name =>{ 
        console.log("New User", name);
        users[socket.id] = name; 
        socket.broadcast.emit('user-joined', name); 

    });
    //the next parts of code here
})

```
- When a message is sent by any user, send event.
- recieve event emitted to other users to let them see the message sent
- create an object message: message, name: users[socket.id]
```
 socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]}); //if anyone sent message, show it to everyone
    });
```
- When someone leaves the chat/closes chat tab, event disconnect.
- emit event left to show other users that a user left chat.
- delete user from users.
```
socket.on('disconnect', message =>{
      socket.broadcast.emit('left', users[socket.id]);
     //if anyone left, show it to everyone
     delete users[socket.id];
  });
```

### By default, the Socket.IO server exposes a client bundle at /socket.io/socket.io.js. Hence we need to add this script in index.html. By this, server and client is connected.
```
<script defer src="http://localhost:8000/socket.io/socket.io.js"></script>
```

## CLIENT.JS:
- io will be registered as a global variable
```
const socket = io('http://localhost:8000');
```
- Get the form, input field, message container
```
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
```
- New user joined. Ask for a prompt to enter name. Emit event new-user-joined.
```
const name = prompt("Enter you Name to join chat");
socket.emit('new-user-joined', name);
```
- user-joined event. Append the message in the container.
```
//define append function

socket.on('user-joined', name =>{
append(`${name} joined the chat`, 'right')
})
```
- Define append, takes 2 arguments. 
```
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);    
}
```
- recieve event. Name: Message in left side for other users.
```
socket.on('recieve', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})
```
- send event. on submit.Eventlistener to the form. when form gets submitted, send message to server.
- preventDefault prevents page reload.
- message gets the inpu that user gives.
- run append function. to show that You have sent the message. this time right side.
- emit send event and message.
- make input field empty.
```
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})
```
- User left the chat. event left.
```
socket.on('left', name =>{
    append(`${name} left the chat`, 'left')
})
```

### Audio adding. tone.mp3.
- In client.js add the tone. Inside append function.
```
 if(position == 'left'){
        audio.play();
    }
```

### Remove the default messages in index.html
```
 <div class="container">
       <!--- <div class="message left">Arun: Hello I am Arun</div>
        <div class="message right">Me: Hi I am Ananya</div>
    -->
    </div>
```




































