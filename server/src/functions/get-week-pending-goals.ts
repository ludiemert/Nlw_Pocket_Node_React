import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { db } from "../db";
import { goals, goalCompletions } from "../db/schema";
import { lte, and, count, sql, gte } from "drizzle-orm";

dayjs.extend(weekOfYear);

export async function getWeekPendingGoals() {
	const firstDayOfWeek = dayjs().startOf("week").toDate();
	const lastDayOfWeek = dayjs().endOf("week").toDate();

	console.log(lastDayOfWeek.toISOString());

	const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
		db
			.select({
				id: goals.id,
				title: goals.title,
				desiredWeeklyFrenquency: goals.desiredWeeklyFrenquency,
				createdAt: goals.createdAt,
			})
			.from(goals)
			.where(lte(goals.createdAt, lastDayOfWeek)),
	);

	const goalCompletionCounts = db.$with("goal_completion_counts").as(
		db
			.select({
				goalId: goalCompletions.goalId,
				completionCount: count(goalCompletions.id),
			})
			.from(goalCompletions)
			.where(
				and(
					gte(goalCompletions, firstDayOfWeek),
					lte(goalCompletions, lastDayOfWeek),
				),
			)
			.groupBy(goalCompletions.goalId),
	);

	//query que une as 2
	const sql = await db
		.with(goalsCreatedUpToWeek, goalCompletionCounts)
		.select()
		.from(goalsCreatedUpToWeek);

	return sql;
}
