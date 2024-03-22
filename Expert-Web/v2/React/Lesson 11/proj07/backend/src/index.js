import express from "express"
import cors from "cors"
import notifier from "node-notifier"
import rotas from "./Rotas.js"
import morgan from "morgan"

const servidor = express()

servidor.use(cors())
servidor.use(express.json())
servidor.use(morgan("dev"))
servidor.use(rotas)

servidor.listen(4000, function() {
  notifier.notify({
    title: "Projeto 07",
    message: "SERVIDOR EM FUNCIONAMENTO",
    icon: "./src/icone.png"
  })
})