import controller from '@controllers/usersController'
import { Router } from 'express'
//import auth from '@middlewares/auth'

const router = Router()

// Use middleware for every call on this route
/* router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) */

router.get('/', controller.getUsers)
router.get('/:id', controller.getUser)
router.post('/', controller.createUser)

// To use the auth middleware
// router.get('/', auth, controller.getUsers)

// CRUD Examples
// router.put(`/:id`, auth, controller.updateUser)
// router.delete(`/:id`, auth, controller.deleteUser)

export default router
