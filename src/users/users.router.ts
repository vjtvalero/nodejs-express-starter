/**
 * Required External Modules and Interfaces
 */

import { Request, Response, Router } from "express"
import * as UserService from "./users.service"
import { UserLogin } from "./user.interface"
import { UserAuth } from "../common/interfaces/user-auth.interface"
import { generateAccessToken } from "../common/config/auth"

/**
 * Router Definition
 */

export const usersRouter = Router()


/**
 * Controller Definitions
 */

// POST /api/account/login
usersRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const params: UserLogin = req.body

    const user: UserAuth = await UserService.find(params)
    const token = generateAccessToken(user)
    const expiration = 86400000
    res.cookie('token', token, {
      expires: new Date(Date.now() + expiration),
      secure: process.env.SECURE_COOKIE === 'true', // set to true if your using https
      httpOnly: true,
      sameSite: 'strict'
    })

    res.status(200).send('Login success.')
  } catch (e) {
    res.status(500).send(e.message)
  }
})