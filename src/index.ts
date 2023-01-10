import app from './app'
import errorHandler from './middlewares/errorHandler'

import userRoute from './routes/users'

// List the available routes
app.use('/users', userRoute)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`)
})
