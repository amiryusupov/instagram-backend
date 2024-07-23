import { Router } from "express";
import register from "../../controllers/auth/register.controller"
import errorHandler from "../../middleware/errorHandler";

const router = Router()

.post("/register", register, errorHandler)

export default router;