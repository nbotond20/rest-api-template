import { NextFunction, Request, Response } from 'express'
import userDomain from '../domains/users'

const userController = {
  // Getting all users
  getUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userDomain.getUsers()

      if (users) return res.status(200).send(users)

      res.status(404).send({ message: 'No users found' })
    } catch (error) {
      next(error)
    }
  },

  // Getting a specific user by id
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userDomain.getUser(req.params.id)

      if (user) return res.status(200).send(user)

      res.status(404).send({ message: 'User not found' })
    } catch (error) {
      next(error)
    }
  },

  // Adding a new user
  addUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userDomain.addUser(req.body)

      if (user) return res.status(201).send(user)

      res.status(500).send({ message: 'User not created' })
    } catch (error) {
      next(error)
    }
  },
}

export default userController
