import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const SECRET_KEY: Secret = process.env.TOKEN_KEY!

interface CustomRequest extends Request {
  token: string | JwtPayload
}

// Auth middleware used to verify the token
const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return res.status(403).send('Access denied. No token provided.')
    }

    const decoded = jwt.verify(token, SECRET_KEY)
    ;(req as CustomRequest).token = decoded
  } catch (err) {
    return res.status(401).send('Invalid access token.')
  }
  return next()
}
export default auth
