import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
//import 'dotenv/config' // Carrega variáveis de ambiente do arquivo .env

import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getPendingGoalsRoute } from "./routes/get-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

//config fastifyCors
app.register(fastifyCors, {
	origin: "*", //em producao colocar a URL do frontEnd
});

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//register route create
app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSummaryRoute);

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!!! 🥰😘😍");
	});
