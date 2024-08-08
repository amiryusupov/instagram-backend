import { Router } from "express";
import register from "../../controllers/auth/register.controller"
import verification from "../../controllers/auth/verification.controller"

const router = Router()

.post("/register", register)
.post("/verify", verification)

export default router;