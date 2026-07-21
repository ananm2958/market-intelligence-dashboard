import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface AuthRequest extends Request {
  userId?: string;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  // EventSource (used for SSE) cannot set custom headers, so the stream route
  // allows the token via query param as a fallback.
  const queryToken = typeof req.query.token === "string" ? req.query.token : null;

  let token: string | null = null;

  if (header && header.startsWith("Bearer ")) {
    token = header.slice("Bearer ".length);
  } else if (queryToken) {
    token = queryToken;
  }

  if (!token) {
    return res.status(401).json({ error: "Missing or invalid Authorization header" });
  }

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as { sub: string };
    req.userId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}