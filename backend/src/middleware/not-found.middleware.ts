import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error";

function notFoundMiddleware(req: Request, _res: Response, next: NextFunction) {
  next(new AppError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

export { notFoundMiddleware };
