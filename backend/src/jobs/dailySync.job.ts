import { prisma } from "../config/prisma";
import * as alphaVantage from "../providers/alphaVantage.provider";
import * as coinGecko from "../providers/coinGecko.provider";
import { AssetType } from "../generated/prisma";

const STOCK_DELAY_MS = 12_000;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function processDailySyncJob() {
  const tracked = await prisma.trackedSymbol.findMany({ where: { active: true } });

  console.log(`Daily sync: ${tracked.length} tracked symbols`);

  for (const t of tracked) {
    try {
      const bars =
        t.assetType === AssetType.STOCK
          ? await alphaVantage.fetchDailySeries(t.symbol, 30)
          : await coinGecko.fetchDailySeries(t.symbol, 30);

      for (const bar of bars) {
        await prisma.dailyPrice.upsert({
          where: {
            symbol_assetType_date: {
              symbol: t.symbol,
              assetType: t.assetType,
              date: new Date(bar.date),
            },
          },
          update: {
            open: bar.open,
            high: bar.high,
            low: bar.low,
            close: bar.close,
            volume: BigInt(Math.floor(bar.volume)),
          },
          create: {
            symbol: t.symbol,
            assetType: t.assetType,
            date: new Date(bar.date),
            open: bar.open,
            high: bar.high,
            low: bar.low,
            close: bar.close,
            volume: BigInt(Math.floor(bar.volume)),
          },
        });
      }
    } catch (err) {
      console.error(`Daily sync failed for ${t.assetType}:${t.symbol}`, err);
    }

    if (t.assetType === AssetType.STOCK) {
      await sleep(STOCK_DELAY_MS);
    }
  }

  console.log("Daily sync complete");
}