const express = require('express')
const router = express.Router()
const {
  getProfileData,
} = require('../controllers/profileController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, getProfileData)
//router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router