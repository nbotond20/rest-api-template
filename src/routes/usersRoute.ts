import userController from '@controllers/usersController'
import auth from '@middlewares/auth'
import { Router } from 'express'
//import auth from '@middlewares/auth'

const router = Router()

// Use middleware for every call on this route
router.use(auth)

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete(`/:id`, userController.deleteUser)

// To use the auth middleware
// router.get('/', auth, controller.getUsers)

export default router
