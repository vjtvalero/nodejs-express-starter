/**
 * Data Model Interfaces
 */

import { UserAuth } from "../common/interfaces/user-auth.interface";
import { UserLogin } from "./user.interface";
import { getUserByLogin } from "./users.model";


/**
 * Service Methods
 */

export const find = async (credentials: UserLogin): Promise<UserAuth> => {
  const users = await getUserByLogin(credentials)
  if (users.length > 0) {
    const { firstName, lastName, email, role } = users[0]
    return { firstName, lastName, email, role }
  }
  throw new Error('User not found.')
}