const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://user:admin123@ds139295.mlab.com:39295/omnistack-backend', {
  useNewUrlParser: true
})

app.use((req, res, next) => {
  req.io = io

  return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
  console.log('The magic happens on port 3000')
})
