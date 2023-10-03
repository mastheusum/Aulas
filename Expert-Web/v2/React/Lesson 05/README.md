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

Ao criar uma conexão com o Cluster é preciso adicionar o IP

### Conectando com o MongoDB

### Mongoose ações

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