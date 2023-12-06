import express from "express"
import Joi from "joi"
import { Types, isValidObjectId } from "mongoose"
import { conteudo } from "./database/Conteudo.js"

const rotas = express.Router()

const esquema = Joi.object({
  capa: Joi.string().uri().required(),
  trilha: Joi.string().uri().required(),
  titulo: Joi.string().required(),
  descricao: Joi.string(),
  genero: Joi.string().required(),
  ano: Joi.number().required(),
  duracao: Joi.number().required(),
  faixa: Joi.number().required()
})

rotas.get("/conteudos", function(request, response) {
  conteudo.find()
    .then(function(resultados) {
      if (resultados.length > 0) 
        resposta.status(200).json(resultados)
      else resposta.status(404).json({
        mensagem: "Nenhum resultado encontrado!"
      })
    })
    .catch(function(erro) {
      resposta.status(500).json({
        mensagem: erro.message 
      })
    })
})

rotas.get("/generos", function(request, response) {
  conteudo.find()
    .then(function(resultados) {
      if (resultados.length > 0) {
        var lista = new Array()
        resultados.map(function(conteudo) {
          if (!lista.includes(conteudo.genero))
            return lista.push(conteudo.genero)
        })
        resposta.status(200).json(lista)
      }
      else resposta.status(404).json({
        mensagem: "Nenhum resultado encontrado!"
      })
    })
    .catch(function(erro) {
      resposta.status(500).json({
        mensagem: erro.message 
      })
    })
})

rotas.get("/conteudo/:codigo", function(request, response) {
  const { codigo } = request.params
  if (isValidObjectId(codigo)) {
    conteudo.findById( Types.ObjectId(codigo) )
      .then(function(resultado) {
        if (resultado)
          resposta.status(200).json(resultado)
        else resposta.status(404).json({
          mensagem: "Nenhum resultado encontrado!" 
        })
      })
      .catch(function(erro) {
        resposta.status(500).json({
          mensagem: erro.message 
        })
      })
  }
  else resposta.status(400).json({
    mensagem: "Código invalido!"
  })
})

rotas.post("/conteudo", async function(request, response) {
  try {
    const validado = await esquema.validateAsync(corpo)
    const corpo = request.body
    const novoConteudo = new conteudo(corpo)
      novoConteudo.save()
      .then(function(resultado) {
        resposta.status(201).json(resultado)
      })
      .catch(function(erro) {
        resposta.status(500).json({ mensagem: erro.message })
      })
  }
  catch(erro){
    resposta.status(400).json( { mensagem: "occorreu com o Joi" } )
  }
})

export default rotas 