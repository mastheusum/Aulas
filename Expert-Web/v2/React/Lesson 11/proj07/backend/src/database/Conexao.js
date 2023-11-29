import notifier from "node-notifier"
import mongoose from "mongoose"
import "dotenv/config"

const endereco = process.env.MONGOURI
const opcao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereco, opcao)
  .then(function() {
    notifier.notify({
      title: "proj07",
      message: "BANCO DE DADOS CONECTADO!",
      icon: "/"
    })
  })
  .catch(function(erro) {
    console.log(erro.message)
  })