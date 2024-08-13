import { NextFunction, Request, Response } from "express";
import VerificationService from "../../services/auth/verification.service";
import { ReceiveVerificationDto } from "../../models/auth/verification.model";
import RegisterService from "../../services/auth/register.service";
import { getTimeOut } from "../../utils/functions";

const verificationService = new VerificationService();
const userService = new RegisterService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyDto: ReceiveVerificationDto = req.body;
    const verification = await verificationService.findVerificationById(bodyDto.verificationId);
    if(verification == null) {
      return res.send(400).json({
        message: "Verification not found"
      })
    }
    const findUserByEmail = await userService.findUserByEmail(verification.email)
    if(findUserByEmail == null) {
      return res.status(401).json({
        message: "User not found"
      })
    }
    const timeOut = getTimeOut(verification.created_at, +process.env.TIME_OUT!)
    if(timeOut <= 0) {
      return res.status(410).json({
        message: "Verification code is expires, please resend code",
        verificationId: verification.id
      })
    }
    if(verification.code != bodyDto.code) {
      return res.status(400).json({
        message: "Wrong verification code!"
      })
    }
    if(verification.id != bodyDto.verificationId) {
      return res.status(400).json({
        message: "Wrong verification id"
      })
    }
    if(findUserByEmail.role == "USER") {
      return res.status(400).json({
        message: "User already verified"
      })
    }
    const is_confirmed: Boolean = true
    
  } catch (err) {
    next(err);
  }
};
