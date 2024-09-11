const express=require('express')
const router=express.Router()
const authMiddleware=require('../config/auth')
const userController=require('../controllers/userController')

router.get('/profile/userId',authMiddleware,userController.profile)

router.put('/profile',authMiddleware,userController.updateProfile)





module.exports=router