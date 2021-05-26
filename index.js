const express = require('express');
require('dotenv').config()
const app  = express()
const socketio = require('socket.io')

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('chat', (req, res) => {
    res.render('chat');
});

const PORT = process.env.PORT || 8080
const httpServer = app.listen(PORT, () => console.log('http://localhost:'+PORT))
const io = socketio(httpServer)

io.on('connection', client => {
    console.log(`Client ${client.id} connected`)
    client.free = true;
    client.loginAt = new Date().toLocaleTimeString();

    // let users = Array.from(io.sockets.sockets.values())
    // .map(socket => ({id: socket.id, name: socket.username, free: socket.free, loginAt: socket.loginAt}))
    // console.log(users)
    
    client.on('disconnect', () => {
        // console.log(`\t\t${client.id} đã thoát`);
        client.broadcast.emit('user-leave', client.id)
        
    })
    client.on('register-name', username =>{
        client.username = username
        // gui thong tin dang ky cho toan bo users
        client.broadcast.emit('register-name', {id: client.id, username: username})
    })
    // gui list users dang onl cho new-user
    client.emit('list-users', Array.from(io.sockets.sockets.values())
    .map(socket => ({id: socket.id, username: socket.username, free: socket.free, loginAt: socket.loginAt})))
    // broadcast new-user info cho users
    client.broadcast.emit('new-user', {id: client.id, username: client.username, free: client.free, loginAt: client.loginAt})



});