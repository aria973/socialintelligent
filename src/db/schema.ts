import { pgTable, serial, text, integer, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const userProgress = pgTable('user_progress', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull().unique(),
  displayName: text('display_name').default('Agent'),
  currentModule: text('current_module').default('welcome'),
  completedLessons: jsonb('completed_lessons').$type<string[]>().default([]),
  completedPuzzles: jsonb('completed_puzzles').$type<string[]>().default([]),
  secretsFound: jsonb('secrets_found').$type<string[]>().default([]),
  quizScores: jsonb('quiz_scores').$type<Record<string, number>>().default({}),
  totalXp: integer('total_xp').default(0),
  level: integer('level').default(1),
  streakDays: integer('streak_days').default(0),
  lastActiveAt: timestamp('last_active_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
  notes: jsonb('notes').$type<Record<string, string>>().default({}),
  bookmarks: jsonb('bookmarks').$type<string[]>().default([]),
  masteryLevels: jsonb('mastery_levels').$type<Record<string, number>>().default({}),
});
