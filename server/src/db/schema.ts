import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2"; //cria id unico

//table goals
export const goals = pgTable("goals", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	title: text("title").notNull(),
	desiredWeeklyFrequency: integer("desired_weekly_frequency").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});

//other table - goal_completions
export const goalCompletions = pgTable("goal_completions", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	goalId: text("goal_id")
		.references(() => goals.id)
		.notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});
