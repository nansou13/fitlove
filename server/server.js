const io = require('socket.io')()

const sockets = {}
const socketIds = {}

io.on('connection', socket => {
  socketIds[socket.id] = null
  console.log('New user...', socket.id)

  socket.on('visite', user_id => {
    if (sockets[user_id]) {
      const userVisited = sockets[user_id]
      io.sockets.connected[userVisited].emit('visited', socketIds[socket.id])
      console.log(
        'page visited for user: ',
        user_id,
        ' by ',
        socketIds[socket.id]
      )
    }
  })

  socket.on('loggedUser', user_id => {
    console.log('client is connect with id: ', user_id, socket.id)
    if (user_id) {
      sockets[user_id] = socket.id
      socketIds[socket.id] = user_id
    }
  })

  socket.on('disconnect', message => {
    console.log('client is disconnected... ', socket.id)
    delete sockets[socketIds[socket.id]]
    delete socketIds[socket.id]
  })
})

const port = 8000
io.listen(port)
console.log('listening on port ', port)
