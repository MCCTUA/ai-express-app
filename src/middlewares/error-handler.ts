import { NextFunction, Request, RequestHandler, Response } from "express";
import { AppError } from "../utils/app-error";

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const statusCode = err.status ?? 500;
  const message = err.message ?? "เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่";
  res.status(statusCode).json({
    error: message,
  });
}
