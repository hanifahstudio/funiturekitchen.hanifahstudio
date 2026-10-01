import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma + SQLite only work where a local database file exists (local
// development and the sandbox). On serverless hosts such as Cloudflare
// Workers or Netlify functions there is no SQLite engine, so the client is
// constructed lazily and callers fall back gracefully when it cannot start.
export function getDb(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: ["query"],
    });
  }
  return globalForPrisma.prisma;
}
