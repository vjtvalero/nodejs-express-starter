import { Request } from "express"

export interface UserAuth {
  firstName: string
  lastName: string
  email: string
  role: string
}

export interface UserAuthRequest extends Request {
  user?: UserAuth
}