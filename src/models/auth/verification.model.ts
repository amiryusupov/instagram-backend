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
  code: string;
  verificationId: string;
}
