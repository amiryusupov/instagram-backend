import { Router } from "express";
import register from "../../controllers/auth/register.controller";
import verification from "../../controllers/auth/verification.controller";
import { bodyValidation } from "../../middleware/bodyValidation";
import { RegisterScheme } from "../../validation/auth/register.scheme";

const router = Router()
  .post("/register", bodyValidation(RegisterScheme), register)
  .post("/verify", verification);

export default router;
