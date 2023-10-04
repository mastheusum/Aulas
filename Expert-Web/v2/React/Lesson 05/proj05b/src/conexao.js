import mongoose from "mongoose" 

const endereco = "mongodb+srv://admin:o7AdBkRFlpTQm5sd@proj05b.fdjoyn4.mongodb.net/" 
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereco, configuracao, function() {
    console.log("CONECTADO COM O BANCO DE DADOS!")
})

mongoose.Promise = global.Promise