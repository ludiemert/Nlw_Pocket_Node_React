import z from 'zod'
import 'dotenv/config' // Certifique-se de que isso está no início do seu projeto

// Definição do esquema para as variáveis de ambiente
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

// Analisando as variáveis de ambiente usando o esquema
const env = envSchema.parse(process.env)

// Adicione o console.log após a inicialização da variável
console.log('DATABASE_URL:', env.DATABASE_URL)

export { env }
