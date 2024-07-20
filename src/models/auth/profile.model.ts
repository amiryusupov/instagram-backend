export interface ProfileDto {
  readonly id: number
  readonly bio?: string
  readonly gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY"
  readonly profile_picture?: string
  readonly fullname: string
  readonly birthday: string
  readonly username: string
  readonly created_at: string
  readonly updated_at: string
  readonly userId: number
}

export interface CreateProfileDto {
  bio?: string
  gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY"
  birthday: string
  fullname: string
  username: string
  userId: number
}

export interface UpdateProfileDto {
  bio?: string
  gender?: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY"
  birthday?: string
  fullname?: string
  username?: string
}
