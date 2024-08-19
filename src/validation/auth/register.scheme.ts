import Joi from "joi"

export const RegisterScheme = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .max(48)
    .messages({
      "string.pattern.base": `Password should be between 8 to 48 characters`,
      "string.empty": `Password cannot be empty`,
      "any.required": `Password is required`,
    })
    .required(),
  phone: Joi.string()
    .min(7)
    .max(15)
    .messages({
      "string.pattern.base": `Phone number should be between 7 to 15 numbers`,
      "string.empty": `Phone number cannot be empty`,
      "any.required": `Phone number is required`,
    })
    .required()
})