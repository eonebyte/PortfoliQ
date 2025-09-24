import server from '../server.js';

// Vercel pakai handler ini
export default async function handler(req, res) {
    // Fastify inject ke request Vercel
    await server.ready()
    server.server.emit('request', req, res)
}