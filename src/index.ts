import app from './app'
import errorHandler from '@middlewares/errorHandler'
import userRoute from '@routes/usersRoute'

// List the available routes
app.use('/users', userRoute)

// Error handler. Must be the last middleware
app.use(errorHandler)

// Start the server
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${process.env.PORT}`)
})
