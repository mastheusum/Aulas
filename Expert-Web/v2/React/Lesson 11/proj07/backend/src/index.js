import express from "express"
import cors from "cors"
import notifier from "node-notifier"
import morgan from "morgan"
import rotas from "./Rotas"

const servidor = express()

servidor.use(cors())
servidor.use(express.json())
servidor.use(rotas)
servidor.use(morgan("dev"))

servidor.listen(4000, function() {
  notifier.notify({
    title: "proj07",
    message: "SERVIDOR EM FUNCIONAMENTO",
    icon: "./src/icone.png"
  })
})