export interface User {
  readonly id: number,
  email: string,
  phone: string,
  password: string,
  role: string,
  token: string
}