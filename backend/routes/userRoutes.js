const express = require('express')
const router = express.Router()
const {
  registerUser,
  registerOrganization,
  loginUser,
  getMe,
  loginOrganization,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/loginOrganization', loginOrganization)
router.post('/organization', registerOrganization)
router.get('/me', protect, getMe)

module.exports = router
