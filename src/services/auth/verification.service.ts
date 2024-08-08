import { PrismaClient } from "@prisma/client";
import { CreateVerificationDto } from "../../models/auth/verification.model";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export default class VerificationService {
  async createVerification(verification: CreateVerificationDto) {
    const verificationId = uuidv4();
    return await prisma.verification.create({
      data: {
        id: verificationId,
        code: verification.code,
        email: verification.email,
      },
    });
  }
  async findVerificationById(id: string) {
    return await prisma.verification.findFirst({
      where: {
        id,
      },
    });
  }
  async cleanVerification(timeOut: number) {
    const time = new Date().getTime() - timeOut * 1000;
    return await prisma.verification.deleteMany({
      where: {
        created_at: {
          lt: new Date(time), // lt stands for "less than"
        },
      },
    });
  }
}
