import dayjs from "dayjs";
//import weekOfYear from "dayjs/plugin/weekOfYear";
import { db } from "../db";
import { goals, goalCompletions } from "../db/schema";
import { lte, and, count, sql as drizzleSql, gte, eq, sql } from "drizzle-orm";

//dayjs.extend(weekOfYear);

export async function getWeekPendingGoals() {
	const firstDayOfWeek = dayjs().startOf("week").toDate();
	const lastDayOfWeek = dayjs().endOf("week").toDate();

	console.log(lastDayOfWeek.toISOString());

	//busca todas  as metas daquela semana (durante ou antes da semana)
	const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
		db
			.select({
				id: goals.id,
				title: goals.title,
				desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
				createdAt: goals.createdAt,
			})
			.from(goals)
			.where(lte(goals.createdAt, lastDayOfWeek)),
	);

	//verificar quantas metas ja completei
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

	// Fazendo a junção das tabelas
	const pendingGoals = await db
		.with(goalsCreatedUpToWeek, goalCompletionCounts)
		.select({
			id: goalsCreatedUpToWeek.id,
			title: goalsCreatedUpToWeek.title,
			desiredWeeklyFrequency: goalsCreatedUpToWeek.desiredWeeklyFrequency,
			createdAt: goalsCreatedUpToWeek.createdAt,

			completionCount: sql /*sql*/` 
		   COALESCE(${goalCompletionCounts.completionCount}, 0)
		`.mapWith(Number),
		})

		.from(goalsCreatedUpToWeek)
		.leftJoin(
			goalCompletionCounts,
			eq(goalCompletionCounts.goalId, goalsCreatedUpToWeek.id),
		)
		.toSQL();

	return { pendingGoals };
}
