import { NextFunction, Response } from "express"
import { UserAuthRequest } from "../common/interfaces/user-auth.interface"

export default function authorize(...permittedRoles: string[]) {
  return (req: UserAuthRequest, res: Response, next: NextFunction) => {
    const { user } = req

    if (user && permittedRoles.includes(user.role)) next()
    else return res.sendStatus(401)
  }
}