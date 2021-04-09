export interface BaseUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export interface User extends BaseUser {
  id: number;
}

export interface UserLogin {
  email: string;
  password: string;
}

export enum Role {
  superAdmin = 'Super Admin',
  admin = 'Admin',
  networkHead = 'Network Head',
  lifeGroupLeader = 'Life Group Leader',
  usher = 'Usher'
}