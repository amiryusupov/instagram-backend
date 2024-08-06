import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.utils";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("authorization")
  const token = authHeader && authHeader.split(" ")[1]

  if(!token) {
    return res.status(401)
  }

  const user = verifyToken(token)

  if(!user) {
    return res.status(403)
  }

  req.user = user
  next()
}