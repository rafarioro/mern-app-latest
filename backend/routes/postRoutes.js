const express = require('express')
const router = express.Router()
const {
  getPosts, setPostOrganization, setPost, getOrganizationPosts, getProfilePosts, deletePost, setComment,
} = require('../controllers/postController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getPosts).post(protect, setPostOrganization)

router.route('/getOrganizationPosts').post(protect, getOrganizationPosts)
router.route('/organization').post(protect, setPostOrganization)
router.route('/user').post(protect, setPost)
router.route('/comments').post(protect, setComment)
router.route('/getProfilePosts').post(protect, getProfilePosts)
router.route('/:postId').delete(protect, deletePost) //.put(protect, updateGoal)

module.exports = router