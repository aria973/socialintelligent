import { sql } from "drizzle-orm";
import { getDb, isDatabaseConfigured } from "@/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  // The app is fully usable offline (content is bundled, progress falls back
  // to localStorage), so health should report ok even without a database.
  if (!isDatabaseConfigured()) {
    return Response.json({ ok: true, database: "not-configured" });
  }

  try {
    await getDb().execute(sql`select 1`);
    return Response.json({ ok: true, database: "connected" });
  } catch {
    return Response.json({ ok: true, database: "unavailable" });
  }
}
