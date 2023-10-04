import express from 'express'
import cors from 'cors'
import './conexao.js'

const myUser = "admin"
const myPass = "o7AdBkRFlpTQm5sd"

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', function(request, response) {
  response.json( { mensagem:"ROTA/GET" } )
})

server.post('/', function(request, response){
  response.json( { mensagem:"ROTA/POST" } )
})

server.listen(4000, function(){
  console.log('SERVIDOR EM FUNCIONAMENTO')
  console.log('http://localhost:4000/')
})