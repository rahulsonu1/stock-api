const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  stockSymbol: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  comments:[{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comment'
  }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // it stores list of user liked post
  likesCount: { type: Number, default: 0 },
},{timestamps:true});

module.exports=mongoose.model('Post',postSchema)
