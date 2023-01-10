import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('combined'))

export default app
