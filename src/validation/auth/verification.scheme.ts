import Joi from "joi";

export const VerificationScheme = Joi.object({
  code: Joi.number().min(6).max(6).required(),
  verificationId: Joi.string().required(),
});
