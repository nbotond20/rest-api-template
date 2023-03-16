import userController from '@controllers/usersController'
import { Router } from 'express'
//import auth from '@middlewares/auth'

const router = Router()

// Use middleware for every call on this route
/* router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) */

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)

// To use the auth middleware
// router.get('/', auth, controller.getUsers)

// CRUD Examples
// router.delete(`/:id`, auth, controller.deleteUser)

export default router
