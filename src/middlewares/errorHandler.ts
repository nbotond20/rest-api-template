import { Boom } from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'

const errorHandler = (err: Boom, req: Request, res: Response, next: NextFunction) => {
  if (err) return res.status(err.output.statusCode || 500).send({ message: err.message || 'Internal Server Error' })
  next()
}

export default errorHandler
