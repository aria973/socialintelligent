import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * Lazy database client.
 *
 * IMPORTANT: We must NOT throw (or create a Pool) at module-import time.
 * `next build` imports route handlers to collect page data, and at that
 * point DATABASE_URL may not be present. Throwing there fails the build
 * with: "Error: DATABASE_URL is required".
 *
 * Instead we defer all initialization until the first actual query at
 * request time, via a Proxy.
 */

const globalForDb = globalThis as typeof globalThis & {
  __mgaPool?: Pool;
  __mgaDb?: NodePgDatabase;
};

export function getDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function getPool(): Pool {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }
  if (!globalForDb.__mgaPool) {
    globalForDb.__mgaPool = new Pool({
      connectionString: databaseUrl,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
    // Never let an idle-client error crash the process.
    globalForDb.__mgaPool.on("error", () => {});
  }
  return globalForDb.__mgaPool;
}

export function getDb(): NodePgDatabase {
  if (!globalForDb.__mgaDb) {
    globalForDb.__mgaDb = drizzle(getPool());
  }
  return globalForDb.__mgaDb;
}

/**
 * Proxy that behaves like a Drizzle client but only initializes on first
 * property access (i.e. when a query actually runs at request time).
 */
export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop, receiver) {
    const real = getDb() as unknown as Record<string | symbol, unknown>;
    const value = Reflect.get(real, prop, receiver);
    return typeof value === "function" ? value.bind(real) : value;
  },
});

export const pool = new Proxy({} as Pool, {
  get(_target, prop, receiver) {
    const real = getPool() as unknown as Record<string | symbol, unknown>;
    const value = Reflect.get(real, prop, receiver);
    return typeof value === "function" ? value.bind(real) : value;
  },
});
