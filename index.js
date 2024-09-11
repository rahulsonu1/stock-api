const express=require('express')
const http=require('http')
const socketIo=require('socket.io')
const cors=require('cors')
const app=express()
require('dotenv').config()
require('./config/database')
const errorHandler=require('./config/errorMiddleware')

app.use(cors())
const server=http.createServer(app)
const io = socketIo(server, { cors: { origin: '*' } });

app.set('socketio', io);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use(express.json())
app.use(express.urlencoded())

app.use('/api',require('./routes/index'))

app.use(errorHandler.error)
app.use(errorHandler.errorStatus)
app.use(express.json())

const port=process.env.PORT
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server at port : ${port}`)
    }
    console.log(`Server is running at port : ${port}`)
})