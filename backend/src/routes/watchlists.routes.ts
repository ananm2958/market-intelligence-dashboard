import { Router } from "express";
import { requireAuth, AuthRequest } from "../middleware/auth";
import * as watchlistService from "../services/watchlist.service";

const router = Router();

router.use(requireAuth);

router.get("/", async (req: AuthRequest, res, next) => {
  try {
    const watchlists = await watchlistService.getUserWatchlists(req.userId!);
    res.json(watchlists);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req: AuthRequest, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "name is required" });
    }
    const watchlist = await watchlistService.createWatchlist(req.userId!, name);
    res.status(201).json(watchlist);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/items", async (req: AuthRequest, res, next) => {
  try {
    const { symbol, assetType } = req.body;
    if (!symbol || !assetType) {
      return res.status(400).json({ error: "symbol and assetType are required" });
    }
    const item = await watchlistService.addItem(String(req.params.id), req.userId!, symbol, assetType);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/items/:itemId", async (req: AuthRequest, res, next) => {
  try {
    await watchlistService.removeItem(String(req.params.id), req.userId!, String(req.params.itemId));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
