import authController from '@controllers/authController'
import auth from '@middlewares/auth'
import { Router } from 'express'
//import auth from '@middlewares/auth'

const router = Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', auth, authController.logout)

export default router
