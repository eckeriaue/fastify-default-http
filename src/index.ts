import { server } from './server'
import path = require('path')

server.get('/', async () => {
  return path.extname('./index.ts')
})

server.listen({port: 3000}, (err, adress) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})