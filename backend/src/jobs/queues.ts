import { Queue } from "bullmq";
import { redis } from "../config/redis";

export const quoteFetchQueue = new Queue("quote-fetch", { connection: redis });
export const dailySyncQueue = new Queue("daily-sync", { connection: redis });

// Schedule the repeatable quote-fetch job. Called once from worker.ts on startup.
export async function scheduleRepeatableJobs() {
  await quoteFetchQueue.add(
    "fetch-all-tracked",
    {},
    {
      repeat: { every: 60_000 }, // every 60s
      removeOnComplete: true,
      removeOnFail: 50,
    }
  );

  await dailySyncQueue.add(
    "sync-daily-ohlcv",
    {},
    {
      repeat: { pattern: "0 0 * * *" }, // midnight daily
      removeOnComplete: true,
      removeOnFail: 10,
    }
  );

  console.log("Repeatable jobs scheduled: quote-fetch (60s), daily-sync (midnight)");
}