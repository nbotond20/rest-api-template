import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import limiter from '@utils/rateLimiter'
import { auth } from 'express-openid-connect'

// Load environment variables from .env file
dotenv.config()

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: `https://${process.env.DOMAIN}`,
  secret: process.env.SECRET,
}

// Create Express server
const app = express()

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config))

// Express configuration
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('tiny'))
app.use(limiter())

export default app
