import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "../../models/auth/user.model";
import { v4 } from "uuid";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export default class RegisterService{
  async create(user: CreateUserDto) {
    const token = v4()
    const saltRounds = 10
    const password = user.password
    const isConfirmed: boolean = false
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        phone: user.phone,
        isConfirmed: isConfirmed,
        token: token
      }
    })
  }
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email
      }
    })
  }
  async findUserByPhone(phone: string) {
    return await prisma.user.findUnique({
      where: {
        phone
      }
    })
  }
}