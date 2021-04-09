import { UserAuth } from "../interfaces/user-auth.interface";
import * as jwt from 'jsonwebtoken'

export function generateAccessToken(user: UserAuth): string {
    return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '1d' });
}