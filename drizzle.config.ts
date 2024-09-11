import { defineConfig } from 'drizzle-kit'
import { env } from './server/src/env'

export default defineConfig({
  schema: './src/db/schema.ts', // Corrigi para 'schema' em vez de 'dialect'
  out: './.migrations',
  dialect: 'postgresql', // Dialeto correto para PostgreSQL
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
