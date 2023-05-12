import userController from '@controllers/usersController'
import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'
//import auth from '@middlewares/auth'

const router = Router()

// Use middleware for every call on this route
router.use(requiresAuth())

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete(`/:id`, userController.deleteUser)

// To use the auth middleware
// router.get('/', auth, controller.getUsers)

export default router
