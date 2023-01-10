import app from './app.mjs'
import errorHandler from './middlewares/errorHandler.mjs'

import userRoute from './routes/users.mjs'

// List the available routes
app.use('/users', userRoute)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`)
})
