import express from "express"
import cors from "cors"
import rotas from "./Rotas.js"
import "./database/Conexao.js"

const server = express()

server.use(cors())
server.use(express.json())
server.use(rotas)

server.listen(4000, function(){
  console.log("SERVIDOR EM FUNCIONAMENTO")
  console.log("http://localhost:4000/")
})