import { ProfileDto } from "./profile.model"

// readonly is used for immutable DTOs where data should not be modified after being set.

export interface UserDto {
  readonly id: number
  readonly email: string
  readonly phone: string
  readonly password: string
  readonly role: "USER" | "ADMIN"
  readonly isConfirmed: Boolean
  readonly token: string
  readonly profile: ProfileDto // Assuming User has a Profile
}

export interface CreateUserDto {
  email: string
  password: string
  phone: string
  is_confirmed: boolean
  token: string
}

export interface UpdateUserDto {
  email?: string
  password?: string
  phone?: string
}