import { User, UserLogin } from "./user.interface";

export async function getUserByLogin({ email, password }: UserLogin) {
  let users: User[] = [
    {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      email: 'super@gmail.com',
      password: 'p@ssw0rd',
      role: 'Super Admin',
    },
    {
      id: 2,
      firstName: 'First',
      lastName: 'Last',
      email: 'admin@gmail.com',
      password: 'p@ssw0rd',
      role: 'Admin',
    },
  ];
  return users.filter(u => u.email === email && u.password === password)
}