import { NextFunction, Request, Response } from "express";

export const bodyValidation = (scheme: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const result = scheme.validate(body, { abortEarly: true });
    if (result.error) {
      return res.status(400).send({
        error: result.error.details.map(
          (details: { message: string; path: string }) => {
            return {
              message: details.message,
              path: details.path,
            };
          }
        ),
      });
    }
    next();
  };
};
