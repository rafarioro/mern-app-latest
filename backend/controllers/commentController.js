const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @route   GET /api/posts
// @access  Private
const getComments = asyncHandler(async (req, res) => {
    // const posts = await Post.find({ user: req.user.id })
  
    // console.log(posts)
    // res.status(200).json(posts)
  })


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @route   GET /api/posts/setComment
  const setComment = asyncHandler(async (req, res) => {
    // if (!req.body.text) {
    //   res.status(400)
    //   throw new Error('Please add a text field')
    // }

    if(req.user.userName === req.body.postedTo){
      toAnother = false;
    }else{
      toAnother = true;
    }

    //find user comment, then find the comments
    // otherwise searching through billions of comments can take a long time
    const filter = { userName: req.body.postedTo }
    const update = {  $push: { posts: { _id: post._id } } }

    const addCommentToPost = await User.findOneAndUpdate( filter, update, {
      new: true
    })


    // console.log(addPostToOrganization)
    res.status(200).json(post)

    //this runs after the  first response is set, so it shouldnt slow things down
    const filterU = { _id: req.user.id }
    const updateU = {  $push: { posts: { _id: post._id } } }    
    const addPostUser = await User.findOneAndUpdate( filterU, updateU, {
      new: true
    })
  })

  module.exports = {
    getComments,
    setComment
  }
  