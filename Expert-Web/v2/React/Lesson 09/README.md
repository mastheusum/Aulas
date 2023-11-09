# SuperVitrine - Fornecendo o Servidor

## Lesson 01 -  Novo desafio!

Vamos deixar o React um pouco de lado!

Partiremos agora para um novo projeto onde será desenvolvido o servidor para fornecer dados sobre os produtos, catálogo, receber novos cadastros e funcionamentos do tipo. Usaremos a tecnologia do Express para montar o servidor e gerenciar os acesso às rotas.

Assim que elaborado o servidor faremos a conexão com o React usando uma outra tecnologia, assim teremos a parte frontal feita em React, conhecido como front-end e o servidor para o fornecimento, recebimento e armazenamento de dados o que chamamos de back-end.

Então vamos colocar em prática tudo o que aprendemos até o momento e aprender coisas novas!

## Lesson 02 - Criando o servidor

Aqui vai os primeiros passos para a criação de um servidor:

Comece abrindo o Terminal do seu sistema operacional, em seguida use o comando “cd” para acessar a área de trabalho, assim conseguimos criar uma pasta nova para o projeto.

Abra a pasta do projeto:

```bash
# Terminal

cd Desktop

mkdir proj06b

cd proj06b
```

Para o “node” funcionar corretamente com o projeto que estamos criando, faça a inicialização do pacote para salvar as dependências e informações importantes de funcionamento.

E faça a instalação do pacote externo do Express, CORS, mongoose e dotenv:

```bash
# Terminal

npm init -y

npm install express cors mongoose dotenv --save
```

Relembrando a função de cada pacote que instalamos no projeto:

- O **Express** é a biblioteca responsável pela criação das rotas do servidor, ligação e configurações para o envio e recebimento de conexões no geral. 

- O **CORS** é um pacote simples que faz a permissão de acesso às rotas do servidor a qualquer cliente ou aplicação terceiras, muito útil para habilitar o uso do servidor através da aplicação da superVitrine feita no React.

- **Mongoose** é o intermediador do banco de dados MongoDB, responsável por fazer a conexão e ações com as informações do banco de dados.

- E o último, **dotenv** é um pacote para fazer o uso de variáveis de ambiente, permitindo uma maior segurança ao compartilharmos os código com demais pessoas e para centralizar os dados.

E assim iniciamos a configuração do servidor!

## Lesson 03 - Configurando o Projeto

Agora vai os passos cruciais para a configuração do projeto!

O primeiro ponto é indicar onde está salvo o arquivo principal para o funcionamento do servidor, e utilizaremos o diretório src para ser a raiz de todo o código fonte.

Outro ponto é definir qual será o tipo de importação dos pacotes e o funcionamento de exportação de módulos no Javascript, isso é feito através da propriedade type colocado no arquivo package.json.

E para que funcione o acionamento do servidor um comando de ignição deve ser inserido, ao invés de sempre que precisar ligar o servidor ter que chamar o node, podemos colocar um comando start no script e inserir o comando de ignição. Assim simplificando o acionamento:

```js
// package.json
{
  "name": "proj06b",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.js",
  "type": "module",
  "scripts": {
    "start": "node ./src/index.js" 
  },
  "keywords": [],
  "author": "SuperGeeks",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "mongoose": "^6.6.2"
  }
}
```

São estes três pontos notificados acima que farão o projeto funcionar corretamente, a princípio o servidor não pode ser ligado pois não temos nenhuma programação e arquivos!

Veja abaixo como ficará disposto os arquivos e diretórios do projeto:

Árvore de Diretórios

<pre>
/proj06b 
 │
 ├─ /node_modules 
 │  └── ...
 ├─ /src 
 │  ├── /database
 │  │    ├── Conexao.js
 │  │    └── Produto.js
 │  ├── index.js
 │  └── Rotas.js
 ├─ .env
 ├─ package.json
 └─ package-lock.json
</pre>

Dentro da raiz do projeto ficará apenas os arquivos de configurações e as duas pastas de funcionamento. A Node_modules guarda os pacotes que instalamos no momento de criação do projeto e a pasta SRC armazena o código fonte do servidor!

Crie os arquivos e se prepare para a programação!

## Lesson 04 - Conectando com o Mongo

Vamos começar pela conexão com o banco de dados!

Comece importando os pacotes do Mongoose e Dotenv para o arquivo “Conexao.js” dentro do diretório database. Com o mongoose faremos a conexão decente com o banco de dados MongoDB e com o dotenv o uso do endereço para realizar a conexão.

Abaixo como ficaria em código:

```js
/* src/database/Conexao.js */

import mongoose from "mongoose"
import "dotenv/config"

/...
```

O dotenv tem essa forma curiosa de ser importado, é preciso colocar entre aspas com o “/config” assim o javascript entende que deve ser importado nativamente e executado a sua configuração.

Com os pacotes importados: faça a declaração de uma constante pegando campo MONGO_URI de dentro das variáveis de ambiente do dotenv:

```js
/* src/database/Conexao.js */

.../
const endereco = process.env.MONGO_URI 

const configuracao = {
     useNewUrlParser: true,
     useUnifiedTopology: true
}
/...
```

Digite uma outra constante contendo as configurações de conexão do banco de dados. Coloque o “useNewUrlParser” e “useUnifiedTopology” com os valores de true.

Depois de declarado a configuração e o endereço, faça a conexão usando o comando Connect:

```js
/* src/database/Conexao.js */

.../
mongoose.connect(endereco, configuracao)
/...
```

O primeiro parâmetro da função Connect deve ser o endereço, segundo parâmetro o objeto de configuração e o terceiro uma função de callback que nesse caso usaremos para mostrar no console se foi conectado com sucesso ao banco de dados!.

## Lesson 05 - Elaborando a base da dados

Aproveitando o ritmo de programação da database, vamos definir o esquema do produto!

Os esquemas são uma maneira de deixar os dados que serão salvo no banco de dados estáticos e seguros, caso não tivéssemos um esquema, os documentos poderiam ser salvos de qualquer forma no banco de dados.

Salvar os documentos sem uma regra ou definição é um tiro no pé, pois qualquer pessoa poderia catalogar um produto e deixar de preencher um dos campos ou dados importantes. Portanto, essa etapa é uma das mais relevantes para o funcionamento correto do servidor!

Comece importando o pacote do mongoose:

```js
/* src/database/Produto.js */

import mongoose from "mongoose" 

/...
```

Depois de importado o mongoose:

O esquema do produto deve ser estruturado com os seus devidos tipos de dados. Sendo o código, marca, modelo e descrição como o formato de texto, para o preço o formato numérico, as imagens uma lista contendo dados no formato de texto e por fim a promoção no formato booleano para aceitar apenas o valores verdadeiros ou falsos:

```js
/* src/database/Produto.js */

.../
const EsquemaProduto = new mongoose.Schema(
  {
    codigo: String, 
    marca: String, 
    modelo: String, 
    preco: Number,
    descricao: String, 
    imagens: [String], 
    promocao: Boolean
  },
  {
    versionKey: false
  }
)
/...
```

Outro detalhe que não acrescenta na descrição do produto é o “versionKey” que pode ser removido colocando o valor como falso, como mostrado no trecho de código acima!

Com apenas o esquema não é possível tomar as ações de consultar os dados do banco de dados ou outros como armazenar, modificar e excluir. Para que utilizamos as ações é preciso transformar o esquema em um modelo:

```js
/* src/database/Produto.js */

.../

const produto = mongoose.model("produto", EsquemaProduto)

/...
```

Declare uma constante chamada de produto e use o comando Model para transformar o esquema que foi estruturado acima em um modelo funcional de ações.

Como parâmetro deve ser passado o nome do modelo com o formato de texto e em seguida o esquema.

Não se esqueça de exportar entre chaves o modelo que foi declarado, usaremos futuramente nas rotas que criaremos usando o Express:

```js
/* src/database/Produto.js */

.../

export { produto }
```

Assim está finalizado a estrutura para o uso do Produto no banco de dados!

## Lesson 06 - Variáveis de ambiente

O último passo para que a database funcione corretamente é configurar as variáveis de ambiente!

Inicialmente abra o site de servidor Atlas do MongoDB e acesse a sua conta. Indo no cluster criado para servir como banco de dados, obtenha os dados de conexão como o endereço e a senha do usuário de Admin para fazer o uso do serviço!

No arquivo “.env” como mostrado abaixo:

<pre>
Árvore de Diretórios

/proj06b 
 │
 ├─ /node_modules 
 │  └── ...
 ├─ /src 
 │  └── ...
 ├─ .env
 ├─ package.json
 └─ package-lock.json
</pre>

Faça a criação de uma nova variável de ambiente passando o nome em maiúsculo de “MONGO_URI” e em seguida atribua o valor no formato de texto entre aspas.

Lembrando que no arquivo “.env” que criamos precisará contar com a variável e no valor deve ser colocado a senha. Não passe a senha de conexão ao usuário para nenhuma pessoa!

```js
/* .env */

MONGO_URI="mongodb+srv://<USUARIO>:<SENHA>@<CLUSTER>.mongodb.net/"
```

E depois de configurado como mostra o trecho da variável de ambiente programada no arquivo “.env” passe para a programação do servidor!

## Lesson 07 - Digitando

Abra o arquivo index.js!

Já que foi finalizado a programação dos arquivos da database sendo o “Conexao.js” e “Produto.js”, agora voltamos o foco ao desenvolvimento do funcionamento do servidor. Comece fazendo a importação do pacote do Express e CORS:

```js
/* src/index.js */

import express from "express"
import cors from "cors" 

/...
```

Com a importação do Express feita, crie a instância do servidor em uma constante chamada de servidor:

```js
/* src/index.js */

.../

const servidor = express()

/...
```

Depois de instanciado o servidor, devemos fazer as configurações de funcionamento:

No servidor faça o uso do complemento CORS e do formato JSON as rotas como respostas e requisições do servidor:

```js
/* src/index.js */

.../

servidor.use(cors())
servidor.use(express.json())

/...
```

E assim que configurado, temos a certeza de que deverá funcionar corretamente os acessos por outras aplicações e as conexões no formato JSON da forma correta!

Para acionar e ligar o servidor teremos de ter a estrutura do listen. O Listen é responsável por manter o servidor operando e em funcionamento, a configuração deve ser feita por uma porta específica, para não comprometer o funcionamento do React usaremos a porta 4000:

```js
/* src/index.js */

.../
servidor.listen(4000, function() {
  console.log("SERVIDOR EM FUNCIONAMENTO!")
  console.log("http://localhost:4000/")
})
```

Como boa prática, na função de callback você pode colocar mensagens para serem mostradas no terminal assim indicando que o servidor está em funcionamento e o link para acessá-lo.

## Lesson 08 - As rotas

Depois de configurado o início da programação do servidor vamos fazer as rotas!

Se você está lembrado, o servidor precisa de rotas para que os usuários ou aplicações interajam recebendo ou enviando os dados, essa é a forma que funciona uma API, comumente utilizada em grandes empresas e serviços de internet.

O que deve ser feito é a importação do Express para o arquivo “Rotas.js”:

```js
/* src/Rotas.js */

import express from "express"

/...
```

Diferente de criar uma instância de servidor, o que faremos agora é instanciar as rotas deste servidor em uma constante de nome “rotas” como mostrado abaixo:

```js
/* src/Rotas.js */

.../

const rotas = express.Router()

/...
```

A constante rotas vai ser útil para dizer qual o método de acesso será permitido a tal endereço, qual o endereço de acesso a rota e qual função será executada.

As rotas que o servidor terá são:

- Rota para obter todos os produtos do banco de dados.
- Rota para obter apenas um produto do servidor através do seu código.
- Rota para obter os produtos que estão na promoção;
- Rota para enviar o produto e salvar no banco de dados.
- 
Essas lista de rotas ficariam assim quando transformadas em código do Express:

```js
/* src/Rotas.js */

.../

rotas.get("/produtos", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

rotas.get("/produto/:codigo", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

rotas.get("/promocao", async function(requisicao, resposta) {
  resposta.sendStatus(200)
})

rotas.post("/catalogar", async function(requisicao, resposta) {
  resposta.sendStatus(201)
})

/...
```

Nas rotas são usados as funções para executar determinada ação quando o usuário acessá-las, por exemplo a rota “/produto” retorna uma resposta com o status 200, o que será visto pelo navegador como uma mensagem de “ok” ou seja, funcionou!

E no final do código devemos exportar a constante de instância rotas:

```js
/* src/Rotas.js */

.../
export default rotas
```

E assim finalizamos a programação das principais rotas, ainda falta uma ocasião que acontece quando o usuário digita o endereço errado!

## Lesson 09 - Rota de não encontrado

O que acontece se tentarmos acessar uma rota que não foi cadastrada na programação?

No melhor caso o express vai retornar uma mensagem de erro alertando que não existe nenhum resultado de rota esperado para o que foi requisitado, porém no pior caso pode comprometer o funcionamento do servidor e causar algum erro interno.

Portanto devemos programar o caso de rota não encontrado e criar algo esperado como mostrado abaixo:

```js
/* src/Rotas.js */

.../
rotas.get("*", function(requisicao, resposta) {
  resposta.sendStatus(404)
})
/...
```

O símbolo asterisco ou “*” representa para o express o acesso a qualquer rota. E então devemos colocar essa estrutura sendo sempre a última da programação para mostrar a mensagem “Not Found” ou em português “Não encontrado”!

## Lesson 10 - Incluindo novas rotas

As rotas estão finalizadas por enquanto, voltaremos a programar somente para incluir as ações do banco de dados!

Faça a importação da Rotas no arquivo “index.js” e também inclua a Conexão com o banco de dados para acontecer antes de instanciar o servidor:

```js
/* src/index.js */

.../
import Rotas from "./Rotas.js"
import "./database/Conexao.js"
/...
```

A conexão com o banco de dados naturalmente atrasa alguns milissegundos, por isso devemos pedir para a conexão ser estabelecida na inicialização do servidor. Assim, quando as rotas forem acessadas a conexão já foi realizada e estabilizada.

Abaixo a utilização da rota no servidor:

```js
/* src/index.js */

.../
servidor.use(Rotas)
/...
```

Com a programação das rotas finalizada, faça a inclusão através do comando “use” na instância do servidor como mostrado acima!

Para fazer o funcionamento do servidor abra o Terminal e digite:

```bash
# Terminal

npm start

```
Acessando o link:

http://localhost:4000/produtos

Você deve receber uma mensagem básica no Navegador apresentando um ok como rota acessada!

## Lesson 11 - Incluindo o Mongo

Chegou o momento de turbinar as rotas do servidor!

Antes teremos que revisar algumas ações que são usadas com o Mongoose, por exemplo as ações de consulta, consulta filtrada e inserir dados nos documentos do MongoDB. Com estas três ações já conseguimos ter as funções feitas para as rotas!

Vamos começar relembrando o comando find:

```js
// Exemplo Find

const resultados = await produto.find()

console.log(resultados)
```

Com o comando find conseguimos pegar todos os produtos da base de dados. Isso ocorre pois nenhum filtro foi colocado e portanto todos os documentos salvos no MongoDB são convenientes.

O próximo é o comando find com o filtro:

```js
// Exemplo Find com parâmetro

const resultado = await produto.find({ 
  marca: "Vitrine"
})

console.log(resultado)
```

Com o comando find podemos colocar um objeto como parâmetro e escolher quais filtros vão ser levados em consideração para encontrar os documentos do MongoDB.

No exemplo do trecho de código é procurado produtos que tenham a marca “Vitrine”, então se houvesse outras marcas de roupa não seria armazenada na constante resultado!

A ação para salvar um novo produto:

```js
// Exemplo Save

const novoProduto = new produto({
    codigo: "1234",
    marca: "Vitrine",
    modelo: "Camiseta Masculina Básica",
    /.../
})

const resultado = await novoProduto.save()

console.log(resultado)
```

Para criar um novo produto é preciso declarar uma classe com todas as propriedades e alocar em uma constante que foi nomeada nesse caso de “novoProduto”. Após a criação da constante é preciso usar o comando “save” e vai ser retornado um resultado.

O resultado é especificado se tais informações foram salvas corretamente no banco de dados ou não!

Bom e agora que você revisou rapidamente o funcionamento dos comandos e ações do Mongoose, podemos voltar a programação normal e continuar a programação para turbinar as rotas do Servidor e obter um resultado fera!

## Lesson 12 - Rota para enviar produtos

Para as rotas “/produtos” e “/produto/:codigo” vamos de comando find!

Faça a importação do modelo produto do banco de dados, e com o produto faremos as ações que foram mostradas anteriormente na inclusão do mongo.

No momento da importação devemos lembrar que foi importado uma constante, por isso devemos colocar a chaves para alinhar e obter corretamente as ações que são passadas pelo modelo. Segue a exemplificação em código:

```js
// src/Rotas.js

import { produto } from "./database/Produto.js"
```

Para a rota GET “/produtos” use a estrutura Try… Catch do JavaScript para fazer a verificação dos comandos, assim conseguimos ter a certeza se os dados foram obtidos da forma correta do banco de dados através da ação de consulta do comando find:

```js
// Rotas GET /produtos

.../
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
/...
```

E com o catch, lidamos com o erro mostrado no Terminal onde houve a falha e um retorno ao usuário que acessou o servidor com o código 500 (Internal Server Error).

E assim está finalizada a programação da rota “/produtos”!

Para a rota GET “/produto/:codigo”, use o comando params na requisição para obter o código digitado pelo acesso, e assim como na rota anterior, nesta também usaremos a estrutura Try… Catch, mesmo sabendo que terá uma verificação é legal analisar se o resultado recebido é preenchido com produtos.

Caso contrário é preciso retornar o alerta 404 (Not Found):

```js
// Rotas GET /produto/:codigo

.../
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
/...
```

A estrutura Catch sempre seguindo o mesmo princípio, de mostrar o erro no Terminal de onde houve a falha e enviando a resposta com o código 500 para o usuário!

Depois de programado, teste e veja se nenhum erro ocorreu no momento do teste.

## Lesson 13 - Rota para adicionar novo produto

```js
// JSON para testar com o Postman na rota http://localhost:4000/catalogar

{
  "codigo": "hmcl",
  "marca": "Vitrine",
  "modelo": "Calça Masculina",
  "preco": 260,
  "descricao": "Uma calça jeans clara estilosa para todas as ocasições com u recorte despojado visando o confort e a flexibilidade nos movimentos com uma costura resistente.",
  "imagens": [
    "https;//i.ibb.cs/7bvP7Gh/homem-calca-1.jpg",
    "https;//i.ibb.cs/3pCC4DM/homem-calca-2.jpg",
    "https;//i.ibb.cs/K2tTYSg/homem-calca-3.jpg"
  ],
  "promocao": false
}
```

Usar o comando find é fácil, e agora para usar o save?

Temos a tarefa árdua de programar a rota POST “/catalogar”, e diferente das duas anteriores que eram GET e que a programação era apenas lidar com o recebimento dos dados através do comando Find, na rota POST devemos usar o comando save na instância da classe produto.

Abaixo está um exemplo, já com a verificação Try de como deveria funcionar a criação de um novo produto usando os dados recebidos no corpo da requisição:

```js
// src/Rotas.js

.../
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
/...
```

Todos os dados vão ser recebidos através do “body” da requisição, mas lembrando que apenas o preço é um valor numérico e deve ser armazenado da forma correta.

Após o recebimento e a declaração da constante “novoProduto”, faça a execução do comando save que vai retornar um resultado válido que dirá se foi bem sucedido ou se houve uma falha.

Caso uma falha seja encontrada a estrutura Catch vai entrar em ação:

```js
// src/Rotas.js

.../
catch(erro) {
  console.log(erro.message) 
  resposta.sendStatus(500)
}
/...
```

O comando catch é mais difícil de acontecer para quando o produto for salvo, apenas ocorrerá em alguns pontos específicos como se a conexão do banco de dados cair, se o corpo digitado tiver uma falha grave na estruturação e coisas do gênero.

Uma grande ferramenta vem para nos guiar, você pode fazer a instalação da extensão JSON VIEWER no seu navegador para ser mais fácil de visualizar os dados armazenados pelo navegador ou...

Fazer a instalação do Postman, onde conseguimos fazer requisições usando apenas usando a interface, sem grandes complicações como ter de digitar os endereços a mão pelo navegador!

## Lesson 14 - Rota de produtos em promoção

Para finalizar a última rota que ficou faltando!

A rota de promoção é a mais inusitada e diferente, esta rota depende de uma regra de filtragem que é baseada na propriedade promoção. É preciso que a promoção seja verdadeira para o produto ser registrado como resultado.

Comece colocando uma nova rota no método GET no endereço “/promocao”:

```js
// src/Rotas.js

.../
rotas.get("/promocao", async function(requisicao, resposta) {
    ...
})
/...
```

A função da rota obrigatoriamente precisa ser assíncrona passando os parâmetros de requisição e resposta, como ilustrado no código acima.

Com a estrutura Try use o comando find com o parâmetro de promoção para filtrar os produtos. Com o retorno da função find armazene dentro da constante resultados, para certificar que existem produtos na promoção verifique o comprimento da lista:

```js
// src/Rotas.js

.../
try {
  const resultados = await produto.find({ promocao: true })
  if ( resultados.length > 0 )
    resposta.status(200).json(resultados)
  else
    resposta.sendStatus(404)
}
/...
```

Caso nenhum produto esteja na promoção, envie como resposta o código 404!

Mas se algum erro acontecer, será mostrado no Terminal a mensagem da falha e em seguida é emitido uma resposta com o código 500:

```js
// src/Rotas.js

.../
catch(erro) {
  console.log(erro.message) 
  resposta.sendStatus(500)
}
/...
```

A última rota que precisava ser programada era dos produtos em promoção, faça os testes usando o postman e veja se o resultado recebido é o esperado. Se possível adicione produtos e certifique-se de que todas as ações estejam funcionando adequadamente!

