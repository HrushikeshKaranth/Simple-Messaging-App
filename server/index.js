const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors());

// creating server
const server = http.createServer(app);
// creating instance of Server class from socket.io
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
});

// listening to incoming messages
io.on("connection", (socket)=>{

    console.log(`User Connected ${socket.id}`);

    //broadcasting received messages to others
    socket.on("send_message", (data)=>{
        console.log(data);
        socket.broadcast.emit("receive_message", data)
    })

    // notify when user disconnects
    socket.on("disconnect", ()=>{
        console.log(`User Disconnected ${socket.id}`);
    })
})

server.listen(3001, ()=>{
    console.log('Server Running!');
})