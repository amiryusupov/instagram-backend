import { NextFunction, Request, Response } from "express";
import VerificationService from "../../services/auth/verification.service";
import { ReceiveVerificationDto } from "../../models/auth/verification.model";

const verificationService = new VerificationService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyDto: ReceiveVerificationDto = req.body;
    const findVerificationById = await verificationService.findVerificationById(bodyDto.verificationId);
    if(findVerificationById == null) {
      return res.send(400).json({
        message: "Verification not found"
      })
    }
    
  } catch (err) {
    next(err);
  }
};
