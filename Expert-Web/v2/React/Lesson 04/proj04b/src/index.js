import express from "express"
import cors from "cors" 
import conteudo from "./conteudo.js"

// cria instância do servidor
const servidor = express()

servidor.use(cors()) // faz o servidor usar o cors
servidor.use(express.json()) // faz o servidor "se comunicar" em JSON

// cria uma rota
servidor.get("/", function(requisicao, resposta) {
  resposta.json({ mensagem: "Olá Mundo!" }) 
}) 

servidor.get("/api", function(requisicao, resposta) {
  resposta.status(200).json(conteudo)
}) 

servidor.get("*", function(requisicao, resposta) {
  resposta.sendStatus(404)
}) 

// indica a porta de funcionamento do servidor
servidor.listen(4000, function() {
  console.log("SERVIDOR EM FUNCIONAMENTO!")
  console.log("http://localhost:4000/")
})