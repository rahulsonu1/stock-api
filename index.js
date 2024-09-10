const express=require('express')
const app=express()
require('dotenv').config()
require('./config/database')
const errorHandler=require('./config/errorMiddleware')


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