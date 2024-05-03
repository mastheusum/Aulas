const { app, BrowserWindow } = require("electron")

const CriarJanela = () =>{
  const Janela = new BrowserWindow({
    height: 600,
    width: 800
  })
  Janela.loadFile("./public/index.html")
}

app.whenReady()
.then(()=>{
  // aplicação iniciada
  CriarJanela()
})
.catch((erro)=>{
  //aplicação falhou
  console.log(erro.message)
})