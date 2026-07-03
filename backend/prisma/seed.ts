import { PrismaClient, AssetType } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const STOCK_SYMBOLS = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "TSLA", "BRK.B", "JPM", "V",
  "UNH", "XOM", "JNJ", "WMT", "MA", "PG", "HD", "CVX", "MRK", "ABBV",
  "LLY", "PEP", "KO", "AVGO", "COST", "BAC", "PFE", "TMO", "CSCO", "ACN",
  "MCD", "ABT", "DHR", "ADBE", "CRM", "NFLX", "NKE", "TXN", "WFC", "VZ",
  "DIS", "PM", "INTC", "AMD", "QCOM", "UPS", "RTX", "ORCL", "IBM", "GS",
];

const CRYPTO_SYMBOLS = [
  "bitcoin", "ethereum", "tether", "binancecoin", "solana",
  "ripple", "usd-coin", "cardano", "dogecoin", "tron",
  "avalanche-2", "shiba-inu", "polkadot", "chainlink", "bitcoin-cash",
  "near", "litecoin", "matic-network", "uniswap", "internet-computer",
];

async function main() {
  console.log("Seeding demo user...");
  const passwordHash = await bcrypt.hash("password123", 10);

  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      password: passwordHash,
      watchlists: {
        create: {
          name: "My Watchlist",
          items: {
            create: [
              { symbol: "AAPL", assetType: AssetType.STOCK },
              { symbol: "NVDA", assetType: AssetType.STOCK },
              { symbol: "bitcoin", assetType: AssetType.CRYPTO },
            ],
          },
        },
      },
    },
  });
  console.log(`Demo user ready: ${user.email} / password123`);

  console.log(`Seeding ${STOCK_SYMBOLS.length} tracked stock symbols...`);
  for (const symbol of STOCK_SYMBOLS) {
    await prisma.trackedSymbol.upsert({
      where: { symbol },
      update: {},
      create: { symbol, assetType: AssetType.STOCK, active: true },
    });
  }

  console.log(`Seeding ${CRYPTO_SYMBOLS.length} tracked crypto symbols...`);
  for (const symbol of CRYPTO_SYMBOLS) {
    await prisma.trackedSymbol.upsert({
      where: { symbol },
      update: {},
      create: { symbol, assetType: AssetType.CRYPTO, active: true },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });