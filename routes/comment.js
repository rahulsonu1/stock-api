const express=require('express')
const router=express.Router()
const authMiddleware=require('../config/auth')
const commentController=require('../controllers/commentController')

router.post('/:postId/create',authMiddleware,commentController.create)


module.exports=router