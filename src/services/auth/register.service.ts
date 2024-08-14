import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "../../models/auth/user.model";
import bcrypt from "bcrypt";
import { UpdateAfterVerificationDto } from "../../models/auth/verification.model";

const prisma = new PrismaClient();

export default class RegisterService {
  async create(user: CreateUserDto) {
    const saltRounds = 10;
    const password = user.password;
    const isConfirmed: boolean = false;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        phone: user.phone,
        is_confirmed: isConfirmed,
        token: user.token
      },
    });
  }
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async findUserByPhone(phone: string) {
    return await prisma.user.findUnique({
      where: {
        phone,
      },
    });
  }
  async updateUserAfterVerification(user: UpdateAfterVerificationDto) {
    return await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        role: user.role,
        is_confirmed: user.is_confirmed
      }
    })
  }
}
