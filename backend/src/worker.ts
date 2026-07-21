import { Worker } from "bullmq";
import { redis } from "./config/redis";
import { scheduleRepeatableJobs } from "./jobs/queues";
import { processQuoteFetchJob } from "./jobs/quoteFetch.job";
import { processDailySyncJob } from "./jobs/dailySync.job";

console.log("Starting worker process...");

const quoteFetchWorker = new Worker(
  "quote-fetch",
  async (job) => {
    console.log(`Processing job: ${job.name} (${job.id})`);
    await processQuoteFetchJob(job.name, job.data);
  },
  { connection: redis, concurrency: 1 }
);

const dailySyncWorker = new Worker(
  "daily-sync",
  async (job) => {
    console.log(`Processing job: ${job.name} (${job.id})`);
    await processDailySyncJob();
  },
  { connection: redis, concurrency: 1 }
);

quoteFetchWorker.on("failed", (job, err) => {
  console.error(`quote-fetch job ${job?.id} failed:`, err.message);
});

dailySyncWorker.on("failed", (job, err) => {
  console.error(`daily-sync job ${job?.id} failed:`, err.message);
});

scheduleRepeatableJobs().catch((err) => {
  console.error("Failed to schedule repeatable jobs", err);
  process.exit(1);
});

console.log("Worker ready, listening for jobs on quote-fetch and daily-sync queues");

process.on("SIGTERM", async () => {
  console.log("Shutting down worker...");
  await quoteFetchWorker.close();
  await dailySyncWorker.close();
  process.exit(0);
});