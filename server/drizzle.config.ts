import { defineConfig } from 'drizzle-kit'
import { env } from './src/env' // Verifique se o caminho está correto

export default defineConfig({
  schema: './src/db/schema.ts', // Verifique se o caminho está correto
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
