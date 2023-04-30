import { server } from './server'


server.get('/', async () => {
  return {bebra: 'sdf'}
})

server.listen({port: 3000}, (err, adress) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})