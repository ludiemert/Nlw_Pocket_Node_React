import { lte, and, count, sql as drizzleSql, gte, eq, sql } from "drizzle-orm";
import { db } from "../db";
import { goalCompletions } from "../db/schema";
import dayjs from "dayjs";

interface CreateGoalCompletionRequest {
	goalId: string;
}

export async function CreateGoalCompletion({
	goalId,
}: CreateGoalCompletionRequest) {
	const firstDayOfWeek = dayjs().startOf("week").toDate();
	const lastDayOfWeek = dayjs().endOf("week").toDate();

	const goalCompletionCounts = db.$with("goal_completion_counts").as(
		db
			.select({
				goalId: goalCompletions.goalId,
				completionCount: count(goalCompletions.id).as("completionCount"),
			})
			.from(goalCompletions)
			.where(
				and(
					gte(goalCompletions.createdAt, firstDayOfWeek),
					lte(goalCompletions.createdAt, lastDayOfWeek),
				),
			)
			.groupBy(goalCompletions.goalId),
	);

	const result = await db
		.insert(goalCompletions)
		.values({ goalId })
		.returning();

	const goalCompletion = result[0];

	return {
		goalCompletion,
	};
}
