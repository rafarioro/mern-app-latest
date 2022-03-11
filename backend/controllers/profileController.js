const asyncHandler = require('express-async-handler')

// const Post = require('../models/postModel')
const User = require('../models/userModel')


// @desc    Get profile data
// @route   GET /api/profile
// @access  Private
const getProfileData = asyncHandler(async (req, res) => {
  const profileName = req.body.profileName

  const profileData = await User.findOne( { userName: profileName } )

  console.log(`profileData: ${profileData}`)

  res.status(200).json(profileData)

})


module.exports = {
    getProfileData,
  }
  