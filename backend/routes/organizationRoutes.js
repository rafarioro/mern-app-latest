const express = require('express')
const router = express.Router()
const {
  getOrganizationData,
} = require('../controllers/organizationController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, getOrganizationData)
//router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router