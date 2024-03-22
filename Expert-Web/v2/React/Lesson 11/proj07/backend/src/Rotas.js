import express from "express"
import { conteudo } from "./database/Conteudo.js"

const rotas = express.Router()

rotas.get("/conteudos", async function(request, response) {
  conteudo.find()
  .then(function(resultados) {
    if (resultados.length > 0) 
      response.status(200).json(resultados)
    else response.status(404).json({
      mensagem: "Nenhum resultado encontrado!"
    })
  })
  .catch(function(erro) {
    response.status(500).json({
      mensagem: erro.message 
    })
  })
})

rotas.get("/generos", function(request, response) {
  response.sendStatus(200)
})

rotas.get("/conteudo/:codigo", function(request, response) {
  response.sendStatus(200)
})

rotas.post("/conteudo", function(request, response) {
  const corpo = request.body
  const novoConteudo = new conteudo(corpo)
  console.log(novoConteudo)
  novoConteudo.save()
  .then(function(resultado) {
    response.status(201).json(resultado)
  })
  .catch(function(erro) {
    response.status(500).json({ mensagem: erro.message })
  })
})

export default rotas