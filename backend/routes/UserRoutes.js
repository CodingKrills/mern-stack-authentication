// * =======================================================================================//
import express from 'express'
const router = express.Router()
import {
  registerUser,
  loginUser
} from '../controllers/UserControllers.js'

// * =======================================================================================//

router.route('/register_user').post(registerUser)
router.route('/login_user').post(loginUser)

// * =======================================================================================//

export default router;

// * =======================================================================================//