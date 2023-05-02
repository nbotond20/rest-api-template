import { NextFunction, Request, Response } from 'express'
import userDomain from '@domains/usersDomain'
import { UpdateUserRequestBody } from '@models'

const userController = {
  // Getting all users
  getUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userDomain.getUsers()

      return res.status(200).send(users)
    } catch (error) {
      next(error)
    }
  },

  // Getting a specific user by id
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id as string

      const user = await userDomain.getUser(userId)

      res.status(200).send(user)
    } catch (error) {
      next(error)
    }
  },

  // Updating a user
  updateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id as string
      const updateUserInput = req.body as UpdateUserRequestBody

      const updatedUser = await userDomain.updateUser({ ...updateUserInput, userId })

      return res.status(200).send(updatedUser)
    } catch (error) {
      next(error)
    }
  },

  // Deleting a user
  deleteUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id as string

      const deletedUser = await userDomain.deleteUser(userId)

      return res.status(200).send(deletedUser)
    } catch (error) {
      next(error)
    }
  },
}

export default userController
