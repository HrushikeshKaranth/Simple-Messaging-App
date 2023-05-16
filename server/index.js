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

    // join room
    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    })

    // send messages
    socket.on("send_message", (data)=>{
        socket.to(data.room).emit("receive_message", data)
    })

    // notify when a user disconnects
    socket.on("disconnect", ()=>{
        console.log(`User Disconnected ${socket.id}`);
    })
})

server.listen(3001, ()=>{
    console.log('Server Running!');
})