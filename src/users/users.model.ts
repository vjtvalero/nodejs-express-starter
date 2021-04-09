import { User, UserLogin } from "./user.interface";

export async function getUserByLogin({ email, password }: UserLogin) {
  let users: User[] = [
    {
      id: 1,
      firstName: 'Vincent',
      lastName: 'Valero',
      email: 'super@gmail.com',
      password: 'p@ssw0rd',
      role: 'Super Admin',
    },
    {
      id: 2,
      firstName: 'Vincent',
      lastName: 'Valero',
      email: 'admin@gmail.com',
      password: 'p@ssw0rd',
      role: 'Admin',
    },
    {
      id: 3,
      firstName: 'Vincent',
      lastName: 'Valero',
      email: 'network@gmail.com',
      password: 'p@ssw0rd',
      role: 'Network Head',
    }
  ];
  return users.filter(u => u.email === email && u.password === password)
}