import * as jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express';
import { UserAuthRequest } from '../common/interfaces/user-auth.interface';

export function authenticate(req: UserAuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies.token || ''

  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}