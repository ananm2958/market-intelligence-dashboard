import { Request, Response, NextFunction } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(`[${req.method} ${req.path}]`, err.message);

  const status = (err as any).status ?? 500;
  res.status(status).json({
    error: err.message || "Internal server error",
  });
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
}