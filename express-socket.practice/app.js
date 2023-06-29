const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = 0;

io.on('connection', (socket)=>{
    console.log('User connected');
    users++;
    // io.sockets.emit('userCount', {description: users + 'users connected'});

    setTimeout(function(){
        // Sending an object when emmiting an event
        socket.emit('customEvent', { description: 'Custom event triggered'});
     }, 4000); // it will trigger event after 4 seconds

    socket.on('disconnect', function () {
        users--;
        console.log('User disconnected');
        // io.sockets.emit('userCount', {description: users + 'users connected'});
     });
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});