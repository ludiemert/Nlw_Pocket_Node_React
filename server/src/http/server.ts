import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
//import 'dotenv/config' // Carrega variáveis de ambiente do arquivo .env
import z from "zod";
import { createGoal } from "../functions/create-goal";
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";
import { sql } from "drizzle-orm";
import { CreateGoalCompletion } from "../functions/create-goal-completion";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//route GET test sql
//app.get("/pending-goals", async () => {
//const sql = await getWeekPendingGoals();
//return sql;
//});

//route GET
app.get("/pending-goals", async () => {
	const { pendingGoals } = await getWeekPendingGoals();
	return { pendingGoals };
});

//rout POST
app.post(
	"/completion",
	{
		schema: {
			body: z.object({
				goalId: z.string(),
			}),
		},
	},
	async (request) => {
		const { goalId } = request.body;

		await CreateGoalCompletion({
			goalId,
		});
	},
);

//route POST
app.post(
	"/goals",
	{
		schema: {
			body: z.object({
				title: z.string(),
				desiredWeeklyFrequency: z.number().int().min(1).max(7),
			}),
		},
	},
	async (request) => {
		const { title, desiredWeeklyFrequency } = request.body;

		await createGoal({
			title,
			desiredWeeklyFrequency,
		});
	},
);

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!!! 🥰😘😍");
	});
