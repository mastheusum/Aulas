import express from 'express'
import cors from 'cors'
import './conn.js'
import { usuario } from './models/bancodedados.js'


const server = express()

server.use(cors())
server.use(express.json())

server.get('/', async function(request, response){
  const result = await usuario.find()
  response.status(200).json( result );
  // response.status(200).json( {'result':'Hello World!'} );

})
server.post('/', async function(request, response){
  try {
    const newUser = new usuario(request.body)
    const result = await newUser.save()
    response.status(201).json( result );
  } catch (error) {
    response.sendStatus(500)
  }
  // response.status(200).json( {'result':'Hello World!'} );
})

server.listen(4000, function(){
  console.log('SERVER ONLINE')
  console.log('http://localhost:4000/')
})