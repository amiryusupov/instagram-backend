import { PrismaClient } from "@prisma/client";
import { CreateVerificationDto } from "../../models/auth/verification.model";

const prisma = new PrismaClient()

export default class VerificationService {
  async createVerification(verification: CreateVerificationDto) {
    return await prisma.verification.create({
      data: {
        code: verification.code,
        email: verification.email
      }
    })
  }
  async findVerificationById(id: number) {
    return await prisma.verification.findFirst({
      where: {
        id
      }
    })
  }
  async cleanVerification(timeOut: number) {
    const time = new Date().getTime() - timeOut * 1000
    return await prisma.verification.deleteMany({
      where: {
        created_at: {
          lt: new Date(time) // lt stands for "less than"
        }
      }
    })
  }
}
