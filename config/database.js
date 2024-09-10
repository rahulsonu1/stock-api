const mongoose=require('mongoose')

const url=process.env.dbURL

mongoose.connect(url)


const db=mongoose.connection

db.on('error',console.error.bind(console,"Error in connecting MongoDB"))

db.once('open',function(){
    console.log("Connected to Database : MongoDb")
})

module.exports=db