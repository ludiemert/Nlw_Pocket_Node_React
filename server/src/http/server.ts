import fastify from "fastify";
//import 'dotenv/config' // Carrega variáveis de ambiente do arquivo .env
import z from "zod";
import { createGoal } from "../functions/create-goal";

const app = fastify();

app.post("/goals", async (request) => {
	const createGoalSchema = z.object({
		title: z.string(),
		desiredWeeklyFrenquency: z.number().int().min(1).max(7),
	});

	const body = createGoalSchema.parse(request.body);

	await createGoal({
		title: body.title,
		desiredWeeklyFrenquency: body.desiredWeeklyFrenquency,
	});
});

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!!! 🥰😘😍");
	});
