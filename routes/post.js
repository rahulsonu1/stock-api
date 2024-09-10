const express=require('express')
const router=express.Router()
const authMiddleware=require('../config/auth')
const postController=require('../controllers/postController')



router.post('/',authMiddleware,postController.create)
router.get('/:postId',postController.getPostbyId)
router.delete('/:postId',authMiddleware,postController.deletePostbyId)


module.exports=router