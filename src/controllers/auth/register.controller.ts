import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../../models/auth/user.model";
import RegisterService from "../../services/auth/register.service";
import VerificationService from "../../services/auth/verification.service";
import { verifyCode } from "../../utils/functions";
import { verificationConfig } from "../../config";
import { generateToken } from "../../utils/jwt.utils";
import { sendEmail } from "../../services/auth/mail.service";

const accountService = new RegisterService();
const verificationService = new VerificationService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = verifyCode();
    const bodyDto: CreateUserDto = req.body;
    const userByEmail = await accountService.findUserByEmail(bodyDto.email);
    if (userByEmail != null) {
      return res.status(401).json({
        message: "User with this email already exists",
      });
    }
    const verification = await verificationService.createVerification(
      code,
      bodyDto.email
    );
    console.log(`Verification created with code: ${verification.code}, email: ${verification.email}`);
    if (verification == null) {
      return res.status(500).json({
        message: "Cannot save the verification",
      });
    }
    const user = await accountService.create(bodyDto);
    console.log(user)
    await sendEmail(bodyDto.email, code);
    const token = generateToken({ userId: user.id, email: user.email });
    res.status(200).json({
      message: "Verification code sent",
      email: user.email,
      verificationId: verification.id,
      timeOut: process.env.TIME_OUT,
      token,
    });
    const deleteUser = verificationService.cleanVerification(
      +verificationConfig.timeOut
    );
    console.log("Delete user:" + deleteUser);
  } catch {
    next();
  }
};
