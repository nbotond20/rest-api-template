import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import userDomain from '@domains/usersDomain'
import { CreateUserRequestBody, LoginUserRequestBody } from '@models'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const SECRET_KEY: Secret = process.env.TOKEN_KEY!

const authController = {
  // Logging in a user
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body as LoginUserRequestBody

      const user = await userDomain.getUserByEmail(email)

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })
      }

      const isValid = await bcrypt.compare(password, user.password)
      if (isValid) {
        const token = jwt.sign({ sub: user.email }, SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256' })
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json({ token })
      } else {
        res.status(401).json({ message: 'Invalid credentials!' })
      }
    } catch (error) {
      next(error)
    }
  },

  // Registering a user
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userInput = req.body as CreateUserRequestBody
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(userInput.password, salt)

      const user = await userDomain.createUser({ ...userInput, password: hashedPassword })

      const token = jwt.sign({ sub: user.email }, SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256' })

      res.cookie('token', token, { httpOnly: true })
      res.status(200).json({ token })
    } catch (error) {
      next(error)
    }
  },

  // Logging out a user
  logout: async (_: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie('token')
      res.status(200).json({ message: 'Logged out successfully!' })
    } catch (error) {
      next(error)
    }
  },
}

export default authController
