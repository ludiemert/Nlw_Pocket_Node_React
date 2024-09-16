import dayjs from "dayjs";
import { db } from "../db";
import { goalCompletions, goals } from "../db/schema";
import { and, count, eq, gte, lte, sql } from "drizzle-orm";

//details my week
export async function getWeekSummary() {
	const firstDayOfWeek = dayjs().startOf("week").toDate(); //primeiro dia da semana
	const lastDayOfWeek = dayjs().endOf("week").toDate(); //ultimo dia da semana

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

	//verificar as metas ja completei MAIS buscar metas completadas mas separar elas por dia
	const goalsCompletedInWeek = db.$with("goal_completed_in_week").as(
		db
			.select({
				id: goals.id,
				title: goals.title,
				completedAt: goalCompletions.createdAt,
				completedAtDate: sql /*sql*/`
        DATE(${goalCompletions.createdAt})
        `.as("completedAtDate"),
			})
			.from(goalCompletions)
			.innerJoin(goals, eq(goals.id, goalCompletions.goalId)) //dados das duas tabelas
			.where(
				and(
					gte(goalCompletions.createdAt, firstDayOfWeek),
					lte(goalCompletions.createdAt, lastDayOfWeek),
				),
			),
	);

	return {
		summary: "test",
	};
}
