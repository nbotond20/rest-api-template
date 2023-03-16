import { NextFunction, Request, Response } from 'express'
import userDomain from '@domains/usersDomain'
import { CreateUserRequestBody, UpdateUserRequestBody } from '@models'

const userController = {
  // Getting all users
  getUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userDomain.getUsers()

      if (users) return res.status(200).send(users)

      res.status(404).send({ message: 'No users found!' })
    } catch (error) {
      next(error)
    }
  },

  // Getting a specific user by id
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id as string
      const user = await userDomain.getUser(userId)

      if (user) return res.status(200).send(user)

      res.status(404).send({ message: 'User not found!' })
    } catch (error) {
      next(error)
    }
  },

  // Adding a new user
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body as CreateUserRequestBody
      const newUser = await userDomain.createUser(user)

      if (newUser) return res.status(201).send(newUser)

      res.status(500).send({ message: 'User not created!' })
    } catch (error) {
      next(error)
    }
  },

  // Updating a user
  updateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id as string
      const updateUser = req.body as UpdateUserRequestBody

      const updatedUser = await userDomain.updateUser({ ...updateUser, userId })

      if (updatedUser) return res.status(200).send(updatedUser)

      res.status(500).send({ message: 'User not updated!' })
    } catch (error) {
      next(error)
    }
  },
}

export default userController
