const asyncHandler=require('express-async-handler')
const Comment=require('../models/Comment')
const Post=require('../models/Post')


module.exports.create=asyncHandler(async (req,res)=>{
    const io = req.app.get('socketio');
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

    io.to(req.params.postId).emit('newComment', {
        commentId: newComment._id,
        postId: req.params.postId,
        comment: newComment.comment,
        user: req.user.id,
        createdAt: newComment.createdAt,
      });
  

    res.json({ success: true, commentId: newComment.id, message: 'Comment added successfully' });

})

module.exports.deleteCommentById=asyncHandler(async(req,res)=>{
    const comment = await Comment.findById(req.params.commentId);
    if(!comment){
        res.status(404)
        throw new Error('comment not found')
    }
    if(comment.user.toString()!==req.user.id){
        res.status(403).json({
            message:"Not authorised"
        })
    }

    await Comment.findByIdAndDelete(req.params.commentId);

    await Post.findByIdAndUpdate(
        req.params.postId,
        { $pull: { comments: req.params.commentId } },
        { new: true }
    );
    res.json({ success: true, message: 'Comment deleted successfully' });

})