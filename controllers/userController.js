const User=require('../models/User')
const asyncHandler=require('express-async-handler')


// asyncHandler : Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.



module.exports.profile=asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.userId).select('-password');
    if(!user){
        res.status(404)
        throw new Error('User not found')
    }
    res.status(200).json({user})
})


module.exports.updateProfile=asyncHandler(async(req,res)=>{
    const { username, bio, profilePicture } = req.body;
    if(!req.user){
        res.status(403)
        throw new Error("Not authorised")
    }
    const updatedUser = await User.findByIdAndUpdate(req.user.id, { username, bio, profilePicture }, { new: true });
    res.json({ success: true, message: 'Profile updated', user: updatedUser });
})