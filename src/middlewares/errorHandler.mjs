const errorHandler = (err, req, res, next) => {
  if (err) return res.status(err.output.statusCode || 500).send({ message: err.message || 'Internal Server Error' })
  next()
}

export default errorHandler
