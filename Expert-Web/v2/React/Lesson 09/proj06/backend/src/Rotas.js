import express from "express"
import { produto } from "./database/Produto.js"

const rotas = express.Router()


rotas.get("/produtos", async function(requisicao, resposta) {
  try {
    const resultados = await produto.find()
    if ( resultados.length > 0 )
      resposta.status(200).json(resultados)
    else
      resposta.sendStatus(404)
  }
  catch(erro) {
    console.log(erro.message) 
    resposta.sendStatus(500)
  }
})

rotas.get("/produto/:codigo", async function(requisicao, resposta) {
  const { codigo } = requisicao.params
  try {
    const resultados = await produto.findOne({ codigo: codigo })
    if ( resultados.length > 0 )
      resposta.status(200).json(resultados)
    else
      resposta.sendStatus(404)
  }
  catch(erro) {
    console.log(erro.message) 
    resposta.sendStatus(500)
  }
})

rotas.get("/promocao", async function(requisicao, resposta) {
  try {
    const resultados = await produto.find({ promocao: true })
    if ( resultados.length > 0 )
      resposta.status(200).json(resultados)
    else
      resposta.sendStatus(404)
  }
  catch(erro) {
    console.log(erro.message) 
    resposta.sendStatus(500)
  }
})

rotas.post("/catalogar", async function(requisicao, resposta) {
  console.log(requisicao.body)
  try {
    const novoProduto = new produto({
      codigo: requisicao.body.codigo,
      marca: requisicao.body.marca,
      modelo: requisicao.body.modelo,
      preco: parseInt(requisicao.body.preco),
      descricao: requisicao.body.descricao,
      imagens: requisicao.body.imagens,
      promocao: requisicao.body.promocao
    })
    const resultado = await novoProduto.save()
    resposta.status(201).json(resultado)
  }
  catch(erro) {
    console.log(erro.message) 
    resposta.sendStatus(500)
  }
})

rotas.get("*", function(requisicao, resposta) {
  resposta.sendStatus(404)
})

export default rotas