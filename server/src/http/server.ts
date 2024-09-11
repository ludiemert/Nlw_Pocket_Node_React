import fastify from 'fastify'
import 'dotenv/config' // Carrega variáveis de ambiente do arquivo .env

const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!!! 🥰😘😍')
  })
