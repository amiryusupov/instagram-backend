import jwt from "jsonwebtoken"
import { jwtConfig } from "../config"

export const generateToken = (payload: object, expiresIn: string | number = jwtConfig.expiresIn) => {
  return jwt.sign(payload, jwtConfig.secretKey, {expiresIn})
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtConfig.secretKey);
  }
  catch (err) {
    return null;
  }
}