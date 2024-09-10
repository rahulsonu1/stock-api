const { error } = require('../config/errorMiddleware');
const Post = require('../models/Post');
const asyncHandler = require('express-async-handler');


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