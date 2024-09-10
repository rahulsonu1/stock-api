const asyncHandler=require('express-async-handler')
const Comment=require('../models/Comment')
const Post=require('../models/Post')


module.exports.create=asyncHandler(async (req,res)=>{
    const {comment}=req.body
    const post=await Post.findById(req.params.postId)
    if(!post){
        res.status(404)
        throw new Error('Post not found')
    }
    const newComment=new Comment({
        comment,
        user:req.user.id,
        post:post.id
    })

    await newComment.save();
    post.comments.push(newComment.id);
    await post.save();

    res.json({ success: true, commentId: newComment.id, message: 'Comment added successfully' });

})