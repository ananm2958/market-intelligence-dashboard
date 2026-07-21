import "dotenv/config";
import { z } from "zod";

const parsed = z.object({
  PORT: z.coerce.number().int().positive().default(3001),
  DATABASE_URL: z.string().default("postgresql://postgres:postgres@localhost:5432/market_intelligence"),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  JWT_SECRET: z.string().min(16).default("development-only-secret-change-me"),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  ALPHA_VANTAGE_API_KEY: z.string().optional(),
}).parse(process.env);

export const env = parsed;
