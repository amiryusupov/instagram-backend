import { Router } from "express";
import auth from "./auth"

const router = Router()
.use("/auth", auth)

export default router;