const User = require("../models/User");
const asyncHandler=require('express-async-handler')
const {generateToken}=require('../config/tokengenerator')
const bcrypt=require('bcryptjs')

module.exports.register = async function (req, res) {
  try {
    const { username, email, password } = req.body;
    console.log(username)
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(404);
      throw new Error("User already exists");
    }
    const user=await User.create({username,email,password})
    if(user){
      res.status(201).json({
        id:user.id,
        username:user.username,
        email:user.email
      })
    }
  } catch (error) {
    res.status(404)
    console.log(error)
    throw new Error('Invalid user data')
  }
};


module.exports.login= asyncHandler(async function(req,res){

  const {email,password}=req.body
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password))  {
    return res.json({
      id: user._id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
})
