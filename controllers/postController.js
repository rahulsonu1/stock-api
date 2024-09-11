const { error } = require('../config/errorMiddleware');
const Post = require('../models/Post');
const asyncHandler = require('express-async-handler');
const Comment=require('../models/Comment')


module.exports.create = asyncHandler(async (req, res) => {
    const { stockSymbol, title, description, tags } = req.body;
    console.log(req.user)
    const post = new Post({
        stockSymbol,
        title,
        description,
        tags,
        user: req.user.id,
    });
    
    await post.save();
    
    res.json({
        success: true,
        post: post,
        message: 'Post created successfully',
    });
});

module.exports.getPostbyId=asyncHandler(async (req,res)=>{
    const post=await Post.findById(req.params.postId).populate('comments').populate('user','username')
    if(!post){
        res.status(404)
        throw new Error('Post not found')
    }else{
        res.status(200).json({
            post:post}
        )
    }
})


module.exports.deletePostbyId=asyncHandler(async (req,res)=>{

    const post=await Post.findById(req.params.postId)
    if(!post){
        res.status(404)
        throw new Error('Post not found')
    }
    if(post.user.toString()!==req.user.id){
        res.status(403)
        throw new Error('Not authorised')
    }
    await post.deleteOne();
    await Comment.deleteMany({post:req.params.postId})
    res.json({ success: true, message: 'Post and associated comments deleted successfully' });
})


module.exports.like=asyncHandler(async(req,res)=>{
    const post=await Post.findById(req.params.postId)
    if(!post){
        res.status(404)
        throw new Error('Post not found')
    }else{
        if(post.likes.includes(req.user.id)){
            res.status(404).json({message:"You have already liked this post"})
        }
        post.likes.push(req.user.id)
        post.likesCount +=1
        await post.save()
        res.json({ success: true, message: 'Post liked' });

    }
})


module.exports.unlike=asyncHandler(async(req,res)=>{
    const post=await Post.findById(req.params.postId)
    if(!post){
        res.status(404)
        throw new Error("Post not found")
    }else{
        post.likes = post.likes.filter(like => like.toString() !== req.user.id);
        post.likesCount -= 1;
        await post.save();
        res.json({ success: true, message: 'Post unliked' });
    }
})