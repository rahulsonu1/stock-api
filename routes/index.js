const express=require('express')
const router=express.Router()


router.use('/auth',require('./auth'))
router.use('/posts',require('./post'))
router.use('/user',require('./user'))




module.exports=router