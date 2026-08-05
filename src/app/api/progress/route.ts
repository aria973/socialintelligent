import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb, isDatabaseConfigured } from '@/db';
import { userProgress } from '@/db/schema';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type ProgressPayload = {
  sessionId: string;
  displayName: string;
  currentModule: string;
  completedLessons: string[];
  completedPuzzles: string[];
  secretsFound: string[];
  quizScores: Record<string, number>;
  totalXp: number;
  level: number;
  streakDays: number;
  notes: Record<string, string>;
  bookmarks: string[];
  masteryLevels: Record<string, number>;
  persisted?: boolean;
};

function emptyProgress(sessionId: string, persisted = false): ProgressPayload {
  return {
    sessionId,
    displayName: 'Agent',
    currentModule: 'welcome',
    completedLessons: [],
    completedPuzzles: [],
    secretsFound: [],
    quizScores: {},
    totalXp: 0,
    level: 1,
    streakDays: 0,
    notes: {},
    bookmarks: [],
    masteryLevels: {},
    persisted,
  };
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('sessionId');
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId required' }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json(emptyProgress(sessionId));
  }

  try {
    const db = getDb();
    const rows = await db.select().from(userProgress).where(eq(userProgress.sessionId, sessionId));

    if (rows.length === 0) {
      const { persisted: _persisted, ...seed } = emptyProgress(sessionId);
      void _persisted;
      const created = await db.insert(userProgress).values(seed).returning();
      return NextResponse.json({ ...created[0], persisted: true });
    }

    return NextResponse.json({ ...rows[0], persisted: true });
  } catch {
    // Database unreachable — the client keeps working from local state.
    return NextResponse.json(emptyProgress(sessionId));
  }
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const { sessionId, ...updates } = body as { sessionId?: string } & Record<string, unknown>;
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId required' }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ ok: true, persisted: false });
  }

  try {
    const db = getDb();
    const existing = await db.select().from(userProgress).where(eq(userProgress.sessionId, sessionId));

    if (existing.length === 0) {
      const created = await db
        .insert(userProgress)
        .values({ sessionId, ...updates, lastActiveAt: new Date() })
        .returning();
      return NextResponse.json({ ...created[0], persisted: true });
    }

    const updated = await db
      .update(userProgress)
      .set({ ...updates, lastActiveAt: new Date() })
      .where(eq(userProgress.sessionId, sessionId))
      .returning();

    return NextResponse.json({ ...updated[0], persisted: true });
  } catch {
    return NextResponse.json({ ok: true, persisted: false });
  }
}
