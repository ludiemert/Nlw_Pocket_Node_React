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

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//route
app.get("/pending-goals", async () => {
	const sql = await getWeekPendingGoals();

	return sql;
});

app.post(
	"/goals",
	{
		schema: {
			body: z.object({
				title: z.string(),
				desiredWeeklyFrenquency: z.number().int().min(1).max(7),
			}),
		},
	},
	async (request) => {
		const { title, desiredWeeklyFrenquency } = request.body;

		await createGoal({
			title,
			desiredWeeklyFrenquency,
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
