import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// Create Express server
const app = express()

// Express configuration
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('combined'))

export default app
