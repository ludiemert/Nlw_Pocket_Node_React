import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

//table goals
export const goals = pgTable("goals", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	desiredWeeklyFrenquency: integer("desired_weekly_frequency").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});

//other table - goal_completions
export const goalCompletions = pgTable("goal_completions", {
	id: text("id").primaryKey(),
	goalId: text("goal_id")
		.references(() => goals.id)
		.notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});
