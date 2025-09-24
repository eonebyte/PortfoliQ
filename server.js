import Fastify from 'fastify'
import FastifyVite from '@fastify/vite'

const isProd = process.env.VERCEL;

const server = Fastify({
  logger: isProd
    ? true // default logger di production
    : {
      transport: {
        target: '@fastify/one-line-logger'
      }
    }
})

await server.register(FastifyVite, {
  root: import.meta.dirname,
  renderer: '@fastify/react',
})

server.setErrorHandler((error, req, reply) => {
  console.error(error)
  reply.send({ error })
})

await server.vite.ready()

server.decorate('db', {
  todoList: [
    'Do laundry',
    'Respond to emails',
    'Write report',
  ]
})

server.put('/api/todo/items', (req, reply) => {
  server.db.todoList.push(req.body)
  reply.send({ ok: true })
})

server.delete('/api/todo/items', (req, reply) => {
  server.db.todoList.splice(req.body, 1)
  reply.send({ ok: true })
})


if (process.env.VERCEL !== '1') {
  await server.listen({ port: process.env.PORT || 3000 })
}

export default server