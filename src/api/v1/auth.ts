import { Router } from "express";
import register from "../../controllers/auth/register.controller"
import errorHandler from "../../middleware/errorHandler";
import verification from "../../controllers/auth/verification.controller"

const router = Router()

.post("/register", register, errorHandler)
.post("/verify", verification)

export default router;