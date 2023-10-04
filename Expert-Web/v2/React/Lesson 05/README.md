# Armazenando com o MongoDB

- Criando servidor
  - Criando rotas
  - Cadastrando MongoDB
    - Conectando com o MongoDB
    - Mongoose ações
  - Rota para obter dados
    - Ferramenta Nova!
  - Rota para adicionar dados
- A aplicação
  - Configurando a aplicação
  - Formulário
    - Estados e entradas
  - Publicando entradas
  - Deixando Seguro
- Resultado FInal

# Criando servidor

```bash
cd Desktop

mkdir proj05b

cd proj05b

npm init -y

npm install express cors mongoose --save
```

Após os programas terminarem altere o package.json para adicionar/modificar os seguintes parâmetros

```json
{
  ...
  "main": "./src/index.js",
  "type": "module",
  "scripts": {
    "start": "node ./src/index.js"
  },
  ...
}
```

## Criando rotas
A criação de rotas será semelhante ao da aula passada, mas agora teremos uma rota para o método POST

```js
import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', function(request, response) {
  response.json( { mensagem:"ROTA/GET" } )
})

server.post('/', function(response, request){
  response.json( { mensagem:"ROTA/POST" } )
})

server.listen(4000, function(){
  console.log('SERVIDOR EM FUNCIONAMENTO')
  console.log('http://localhost:4000/')
})
```

## Cadastrando MongoDB

Usaremos o banco de dados não relacional chamado MongoDB!

- Bancos de Dados Relacionais: abreviado diversas vezes pela sigla **RDBMS** e tem serviços como o Postgres, SQL Server e MySQL.
- Banco de dados Não relacionais: chamados pela comunidade carinhosamente de **NoSQL** para simplificar, tem serviços como o MongoDB e DynamoDB.

E a principal diferença está na estruturação e no comportamento na manipulação dos dados. Por questão de praticidade e tendência os banco de dados não relacionais estão sendo mais utilizados em tecnologias recentes.

Comece criando uma conta no MongoDB através do link [https://account.mongodb.com/account/register](https://account.mongodb.com/account/register)

Coloque a opção *Company Name* como SuperGeeks

Após a realização do cadastro lembre-se de verificar seu e-mail.

Feita a verificação você irá retornar para o site do MongoDB onde ele irá perguntar sobre o projeto. Marque a lingagem utilizada, o tipo de projeto (other) e que é para fins de estudo (no momento em que minha conta foi feita isso não afetou em nada o progresso do cadastra e escolha de planos), após isto você irá para a escolha dos planos.

Escolha a opção FREE, escolha a região do cluster mais próxima de você e para esta aula foi utilizado o **AWS**, no nome do Cluster é recomendado utilizar o nome do projeto.

E em seguida devemos criar um usuário com permissão de administrador para conseguir fazer todas as manipulações de dados e alterar as configurações do banco de dados, para criar o usuário vá em Database e clique em Database Access:

![001](Screenshots/001.png)

Ao criar o usuário você deve colocar um nome, como é o usuário que tem todas as permissões de acesso coloque como **"Admin"** e gere uma nova **senha segura** e copie. Essa senha é importante salvar em algum documento ou bloco de notas porque usaremos mais tarde!

Agora com o Cluster e o usuário configurado, vamos passar para as variáveis de conexões para conseguirmos fazer a aplicação do servidor se comunicar com o banco de dados do MongoDB usando o serviço Atlas, clique em Connect:

![002](Screenshots/002.png)

Ao criar uma conexão com o Cluster escola a opção **Node.js** e ela dará as instruções para a realização da conexão.

### Conectando com o MongoDB

Agora devemos fazer a conexão entre o Servidor e o banco de dados do MongoDB. Olhando de uma visão geral, o Servidor vai ser o intermediador entre o banco de dados e os clientes e aplicações.

Para conectar ao MongoDB vamos precisar de um novo Script o **conexao.js**

```js
/* scr/conexao.js */
import mongoose from "mongoose" 

// os dados abaixo são dados quando clicamos em connect no Cluster
const endereco = "mongodb+srv://<USUÁRIO>:<SENHA>@<CLUSTER>.mongodb.net/" 
//------------------
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereco, configuracao, function() {
    console.log("CONECTADO COM O BANCO DE DADOS!")
})

mongoose.Promise = global.Promise
```

Seguindo o código **conexao.js** que criamos, quando o mongoose conectar com o banco de dados vai ser impresso no Terminal a mensagem de sucesso passado pela função.

E com o Mongoose Promise conseguimos fazer o uso do **mongoose** em qualquer parte do código, assim deixando Global. Foi bastante utilizado nas versões antigas como o Mongoose 4.

E agora criaremos o esquema do banco de dados para **armazenar** os dados de **forma estruturada**. Com o Mongoose **Schema** podemos criar campos com tipos de dados específico:

```js
/* src/bancodedados.js */
import mongoose from "mongoose"

const EsquemaUsuario = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  nascimento: Date
})

const usuario = mongoose.model("usuario", EsquemaUsuario)

export { usuario }
```

O Esquema Usuário criado no código é estruturado com o campo de nome, email e senha no formato de Texto e o campo de nascimento no formato de Data.

E o esquema é transformado em um modelo para executar as funções como armazenar, consultar, alterar e deletar os dados do MongoDB.

E em seguida iremos estudar as funções que podem ser executadas pelo Modelo do Mongoose conseguimos fazer as primeiras ações com o Banco de Dados através de comandos no Servidor Express que estamos programando.

Conexão com banco de dados configurada!

### Mongoose ações
Agora estudaremos as ações dos Modelos do pacote Mongoose.

Todos os Bancos de Dados possuem maneiras de manipular os dados que chamamos no MongoDB de ações. As principais são:

- Armazenar dados: onde podemos pegar dados e salvar de forma consistente no banco de dados;
- Consultar os dados: a ação que permite obtermos os dados armazenados anteriormente no banco de dados pelos clientes;
- Alterar os dados: essa ação permite alterarmos uma propriedade de algum dado que foi armazenado através da sua identificação;
- Excluir dados: é a função mais perigosa, que exclui as informações que foram armazenadas de forma permanente.
  
Essas ações também são conhecidas em inglês pela sigla **CRUD** ou Create, Read, Update and Delete. E agora aprenderemos a aplicar essas ações na programação do Servidor.

Vamos começar pelo comando Find que é equivalente a ação Consultar, mas é usado para consultar todas as informações armazenadas no banco de dados de uma única vez:

## Rota para obter dados

### Ferramenta Nova!

## Rota para adicionar dados

# A aplicação

## Configurando a aplicação

## Formulário

### Estados e entradas

## Publicando entradas

## Deixando Seguro

# Resultado FInal