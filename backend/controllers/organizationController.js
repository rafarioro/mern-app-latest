const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')
// const Organization = require('../models/organizationModel')


// @desc    Get organization data
// @route   GET /api/organization
// @access  Private
const getOrganizationData = asyncHandler(async (req, res) => {
  const orgName = req.body.userName

  const organizationData = await User.find( { userName: orgName } )

  // console.log(`organization ${organizationData}`)

  res.status(200).json(organizationData)


})


module.exports = {
    getOrganizationData,
  }
  