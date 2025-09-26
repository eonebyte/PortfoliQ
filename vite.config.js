import path from 'node:path';

import viteReact from '@vitejs/plugin-react'
import viteFastifyReact from '@fastify/react/plugin'

export default {
  root: path.resolve(import.meta.dirname, 'client'),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
  },
  plugins: [
    viteReact(),
    viteFastifyReact(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './client'), // ⬅️ alias ke folder src
    },
  },
  ssr: {
    external: [
      'use-sync-external-store'
    ]
  },
}
