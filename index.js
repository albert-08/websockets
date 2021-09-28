const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('New connected client')
  socket.emit('message', 'Welcome!')
})

setInterval(() => {
  io.emit('message', 'Hello, writing to all')
}, 3000)

server.listen(8080, () => {
  console.log('Initialized server at http://127.0.0.1:8080')
})

