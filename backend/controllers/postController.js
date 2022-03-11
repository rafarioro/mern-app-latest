const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id })

  // console.log(posts)
  res.status(200).json(posts)
})
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @desc    Get organization posts
// @route   GET /api/posts/getOrganizaionPosts
// @access  Private
const getOrganizationPosts = asyncHandler(async (req, res) => {
  const orgName = req.body.userName
  const organizationPosts = await Post.find( { organization: orgName } )
  res.status(200).json(organizationPosts)
})


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @desc    Get profile posts should work with any profile
// @route   GET /api/posts/getOrganizaionPosts
// @access  Private
const getProfilePosts = asyncHandler(async (req, res) => {
  const profileName = req.body.profileName

  const profilePosts = await Post.find( { postedTo: profileName } )

  console.log(` Profile posts : ${profilePosts} `)

  res.status(200).json(profilePosts)

})

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @desc    Set Post
// @route   POST /api/posts
// @access  Private
const setPostOrganization = asyncHandler(async (req, res) => {
    // if (!req.body.text) {
    //   res.status(400)
    //   throw new Error('Please add a text field')
    // }

    const postOrganization = await Post.create({
        user: req.user.id,
        userName: req.user.userName,
        toAnother: true,
        postedTo: req.body.organization,
        organization: req.body.organization,
        postType: req.body.postType,
        postText: req.body.postText,
    })
  
    // console.log( post.id )

    const filter = { userName: req.body.organization }
    const update = {  $push: { posts: { _id: postOrganization._id } } }
    const addPostToOrganization = await User.findOneAndUpdate( filter, update, {
      new: true
    })

    // console.log(addPostToOrganization)
    res.status(200).json(postOrganization)

    //this runs after the  first response is set, so it shouldnt slow things down
    const filterU = { _id: req.user.id }
    const updateU = {  $push: { posts: { _id: postOrganization._id } } }    
    const addPostUser = await User.findOneAndUpdate( filterU, updateU, {
      new: true
    })
  })

  const setPost = asyncHandler(async (req, res) => {
    // if (!req.body.text) {
    //   res.status(400)
    //   throw new Error('Please add a text field')
    // }
    let toAnother
    if(req.user.userName === req.body.postedTo){
      toAnother = false;
    }else{
      toAnother = true;
    }


    const post = await Post.create({
        user: req.user.id,
        userName: req.user.userName,
        toAnother: toAnother,
        postedTo: req.body.postedTo,
        postType: req.body.postType,
        postText: req.body.postText,
    })
  
    // console.log( post.id )

    const filter = { userName: req.body.postedTo }
    const update = {  $push: { posts: { _id: post._id } } }

    const addPostToProfile = await User.findOneAndUpdate( filter, update, {
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



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const postIdU = req.params.postId

  const post = await Post.findById(postIdU)


  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id && post.organization !== req.user.userName ) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await post.remove()

  res.status(200).json({ id: req.params.postId })
  
 //run this after the sending of data, testing if works
  const findUsersWithPost = await User.find( { posts: { _id: postIdU } } )
  console.log(`find users with post ${findUsersWithPost}`)

  if(post.toAnother === true){
    findUsersWithPost[0].posts.pull( { _id: postIdU } )
    findUsersWithPost[1].posts.pull( { _id: postIdU } )
    findUsersWithPost[0].save()
    findUsersWithPost[1].save()
  }else{
    findUsersWithPost[0].posts.pull( { _id: postIdU } )
    findUsersWithPost[0].save()
  }


})

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // users will not be able to update a post for now

  module.exports = {
    getPosts,
    setPost,
    setPostOrganization,
    getOrganizationPosts,
    deletePost,
    getProfilePosts
  }
  