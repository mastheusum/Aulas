import mongoose from "mongoose"
import "dotenv/config"

const endereco = process.env.MONGO_URI

const config = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}

mongoose.connect(endereco, config)
// .then( () => {
//   console.log("Conectado")
// })
// .catch( (erro) => {
//   console.log(erro.message)
// })