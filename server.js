import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import createGame from './public/game.js'

const app = express()
const server = http.createServer(app)
const sockets = sockets(server)

app.use(express.static('public'))

const game = createGame()

game.addPlayer({ playerId: 'player1', playerX: 1, playerY: 1 })
game.addFruit({ fruitId: 'fruit1', fruitX: 4, fruitY: 4 })
game.addFruit({ fruitId: 'fruit2', fruitX: 3, fruitY: 5 })

console.log(game.state)

sockets.on('connection', (socket) => {
    const playerId = socket.id 
    console.log(`New player connected with id ${playerId}`)
})

server.listen(8080, () => {
    console.log(`Listening to port 8080`)
})