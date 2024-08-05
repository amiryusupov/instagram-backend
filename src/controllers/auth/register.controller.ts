import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../../models/auth/user.model";
import RegisterService from "../../services/auth/register.service";
import VerificationService from "../../services/auth/verification.service";
import { verifyCode } from "../../utils/functions";
import dotenv from "dotenv";
import { CreateVerificationDto } from "../../models/auth/verification.model";

dotenv.config();
const accountService = new RegisterService()
const verificationService = new VerificationService()

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = verifyCode()
    const bodyDto: CreateUserDto = req.body
    const userByEmail = await accountService.findUserByEmail(bodyDto.email)
    if(userByEmail != null) {
      return res.status(401).json({
        message: "User with this email already exists"
      })
    }
    const verificationDto: CreateVerificationDto = {
      code: code,
      email: bodyDto.email
    }
    const verification = await verificationService.createVerification(verificationDto)
    const user = await accountService.create(bodyDto)
    return res.status(200).json({
      message: "Verification code sent",
      email: user.email,
      verificationId: verification.id,
      timeOut: process.env.TIME_OUT
    })
    const deleteUser = verificationService.cleanVerification(+process.env.TIME_OUT!)
    console.log("Delete user:" + cleanVerification)
  }
  catch {
    next
  }
}