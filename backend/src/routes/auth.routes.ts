import { Router } from "express";
import { register, login } from "../services/auth.service";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const result = await register(email, password);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const result = await login(email, password);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;