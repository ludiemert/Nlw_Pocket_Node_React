import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { db } from "../db";
import { goals } from "../db/schema";
import { lte, and, sql } from "drizzle-orm";

dayjs.extend(weekOfYear);

export function getWeekPendingGoals() {
	const lastDayOfWeek = dayjs().endOf("week").toDate();

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
}
