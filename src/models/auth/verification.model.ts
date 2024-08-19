import { Role } from "@prisma/client";

export interface VerificationDto {
  id: string;
  code: string;
  email: string;
  created_at: Date;
}
export interface CreateVerificationDto {
  code: string,
  email: string
}
export interface ReceiveVerificationDto {
  code: number;
  verificationId: string;
}
export interface UpdateAfterVerificationDto{
  id: number,
  role: Role,
  is_confirmed: boolean
}