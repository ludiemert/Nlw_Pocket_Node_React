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
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//register route create
app.register(createGoalRoute);
app.register(createCompletionRoute);

//route GET test sql - /pending-goals
//app.get("/pending-goals", async () => {
//const sql = await getWeekPendingGoals();
//return sql;
//});

//route GET /pending-goals
app.get("/pending-goals", async () => {
	const { pendingGoals } = await getWeekPendingGoals();
	return { pendingGoals };
	//	return pendingGoals.sql;
});

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!!! 🥰😘😍");
	});
