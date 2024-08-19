import { Router } from "express";
import register from "../../controllers/auth/register.controller";
import verification from "../../controllers/auth/verification.controller";
import { bodyValidation } from "../../middleware/bodyValidation";
import { RegisterScheme } from "../../validation/auth/register.scheme";
import { VerificationScheme } from './../../validation/auth/verification.scheme';

const router = Router()
  .post("/register", bodyValidation(RegisterScheme), register)
  .post("/verify", bodyValidation(VerificationScheme), verification);

export default router;