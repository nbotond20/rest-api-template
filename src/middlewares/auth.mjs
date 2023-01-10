import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.TOKEN_KEY

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return res.status(403).send('Access denied. No token provided.')
    }

    const decoded = jwt.verify(token, SECRET_KEY)
    req.token = decoded
  } catch (err) {
    return res.status(401).send('Invalid access token.')
  }
  return next()
}
export default auth
