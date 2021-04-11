/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { errorHandler } from "./middleware/error.middleware"
import { notFoundHandler } from "./middleware/not-found.middleware"
import { usersRouter } from "./users/users.router"
import cookieParser from 'cookie-parser'

dotenv.config()

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

/**
 * App Configuration
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(cookieParser())

/**
 * Routes
 */
 app.use("/api/account", usersRouter)
 
/**
 * Handlers
 */
 app.use(errorHandler)
 app.use(notFoundHandler)


/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})