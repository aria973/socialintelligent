import { pgTable, text, integer, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table
export const users = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  username: text('username').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// User progress table
export const userProgress = pgTable('user_progress', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('user_id').references(() => users.id).notNull(),
  moduleId: text('module_id').notNull(),
  lessonIndex: integer('lesson_index').default(0).notNull(),
  completedLessons: jsonb('completed_lessons').default([]).notNull(),
  discoveredSecrets: jsonb('discovered_secrets').default([]).notNull(),
  quizScores: jsonb('quiz_scores').default({}).notNull(),
  totalXp: integer('total_xp').default(0).notNull(),
  level: integer('level').default(1).notNull(),
  streak: integer('streak').default(0).notNull(),
  lastStudyDate: timestamp('last_study_date'),
});

// Secrets table - hidden content to discover
export const secrets = pgTable('secrets', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  moduleId: text('module_id').notNull(),
  secretCode: text('secret_code').notNull().unique(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  hint: text('hint'),
  difficulty: integer('difficulty').default(1).notNull(),
  isRevealed: boolean('is_revealed').default(false).notNull(),
});

// Achievements table
export const achievements = pgTable('achievements', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  icon: text('icon').notNull(),
  requirement: text('requirement').notNull(), // JSON string describing requirement
  xpReward: integer('xp_reward').default(100).notNull(),
});

// User achievements junction
export const userAchievements = pgTable('user_achievements', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('user_id').references(() => users.id).notNull(),
  achievementId: integer('achievement_id').references(() => achievements.id).notNull(),
  unlockedAt: timestamp('unlocked_at').defaultNow().notNull(),
});

// Lessons table - all educational content
export const lessons = pgTable('lessons', {
  id: text('id').primaryKey(),
  moduleId: text('module_id').notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(), // Markdown content
  type: text('type').notNull(), // 'theory', 'exercise', 'puzzle', 'scenario', 'reflection'
  difficulty: integer('difficulty').default(1).notNull(),
  estimatedMinutes: integer('estimated_minutes').default(10).notNull(),
  prerequisites: jsonb('prerequisites').default([]).notNull(),
  secretUnlocks: jsonb('secret_unlocks').default([]).notNull(), // Secrets revealed after completion
});

// Scenarios for interactive learning
export const scenarios = pgTable('scenarios', {
  id: text('id').primaryKey(),
  lessonId: text('lesson_id').references(() => lessons.id),
  title: text('title').notNull(),
  setup: text('setup').notNull(),
  choices: jsonb('choices').notNull(), // Array of choice objects
  outcomes: jsonb('outcomes').notNull(), // Map of choiceId -> outcome
  optimalChoice: text('optimal_choice'), // Which choice is best
  explanation: text('explanation'), // Why certain choices are better
});

// Quiz questions
export const quizQuestions = pgTable('quiz_questions', {
  id: text('id').primaryKey(),
  lessonId: text('lesson_id').references(() => lessons.id),
  question: text('question').notNull(),
  options: jsonb('options').notNull(), // Array of { id, text }
  correctOption: text('correct_option').notNull(),
  explanation: text('explanation').notNull(),
  points: integer('points').default(10).notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  progress: many(userProgress),
  achievements: many(userAchievements),
}));

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type UserProgress = typeof userProgress.$inferSelect;
export type Secret = typeof secrets.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type Scenario = typeof scenarios.$inferSelect;
export type QuizQuestion = typeof quizQuestions.$inferSelect;
