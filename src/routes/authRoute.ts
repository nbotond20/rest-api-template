/* import authController from '@controllers/authController'
import auth from '@middlewares/auth' */
import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'
//import auth from '@middlewares/auth'

const router = Router()

/* router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', auth, authController.logout) */
router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user))
})

export default router
