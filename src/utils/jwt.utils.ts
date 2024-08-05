import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const secretKey = process.env.JWT_TOKEN!

export const generateToken = (payload: object, expiresIn: string | number = '1h') => {
  return jwt.sign(payload, secretKey, {expiresIn})
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  }
  catch (err) {
    return null;
  }
}