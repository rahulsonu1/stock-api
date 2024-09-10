const express=require('express')
const router=express.Router()
const authMiddleware=require('../config/auth')
const postController=require('../controllers/postController')
const commentController=require('../controllers/commentController')


//posts
router.post('/',authMiddleware,postController.create)
router.get('/:postId',postController.getPostbyId)
router.delete('/:postId',authMiddleware,postController.deletePostbyId)


//comments
router.post('/:postId/comments',authMiddleware,commentController.create)
router.delete('/:postId/comments/:commentId',authMiddleware,commentController.deleteCommentById)

module.exports=router