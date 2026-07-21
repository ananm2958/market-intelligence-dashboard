import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { errorHandler, notFoundHandler } from "./middleware/errorHandlers";

import authRoutes from "./routes/auth.routes";
import marketRoutes from "./routes/market.routes";
import watchlistRoutes from "./routes/watchlists.routes";
import streamRoutes from "./routes/stream.routes";

export const app = express();

app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/watchlists", watchlistRoutes);
app.use("/api/stream", streamRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
