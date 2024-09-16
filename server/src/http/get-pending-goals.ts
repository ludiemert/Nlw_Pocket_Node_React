import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";

//route GET test sql - /pending-goals
//app.get("/pending-goals", async () => {
//const sql = await getWeekPendingGoals();
//return sql;
//});

//route GET /pending-goals
export const getPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/pending-goals", async () => {
		const { pendingGoals } = await getWeekPendingGoals();
		return { pendingGoals };
		//	return pendingGoals.sql;
	});
};
