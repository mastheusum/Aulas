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
// esse método não aceita mais uma função de callback
mongoose.connect(endereco, configuracao)

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
Agora estudaremos as ações dos Modelos do pacote **Mongoose**.

Todos os Bancos de Dados possuem maneiras de manipular os dados que chamamos no MongoDB de ações. As principais são:

- Armazenar dados: onde podemos pegar dados e salvar de forma consistente no banco de dados;
- Consultar os dados: a ação que permite obtermos os dados armazenados anteriormente no banco de dados pelos clientes;
- Alterar os dados: essa ação permite alterarmos uma propriedade de algum dado que foi armazenado através da sua identificação;
- Excluir dados: é a função mais perigosa, que exclui as informações que foram armazenadas de forma permanente.
  
Essas ações também são conhecidas em inglês pela sigla **CRUD** ou Create, Read, Update and Delete. E agora aprenderemos a aplicar essas ações na programação do Servidor.

Vamos começar pelo comando **Find** que é equivalente a ação Consultar, mas é usado para consultar todas as informações armazenadas no banco de dados de uma única vez:

```js
/* exemplo */
const resultados = await usuario.find()
console.log(resultados)
```

Acima, tem o exemplo de uso do comando Find, veja que o comando junto com o **await** retorna todos os valores em uma constante que nomeamos como "Resultados".

E para recebermos um único dado específico do banco de dados usamos o comando **FindOne**, e como parâmetros passamos um dado que indique o que deve ser procurado:

```js
/* exemplo */
const resultado = await usuario.findOne({ 
  email: "fulano@mail.com"
})
console.log(resultado)
```

O parâmetro do FindOne é exigido um campo e valor que identifique quais os dados devem ser encontrados, e o parâmetro deve ser no formato de Objeto do JavaScript como mostrado no código acima.

Para inserir novos dados no MongoDB devemos criar um novo modelo contendo o objeto dos dados e em seguida usamos a função Save dentro do modelo criado. E assim as informações serão enviadas e armazenadas no MongoDB:

```js
/* exemplo */
const novoUsuario = new usuario({
    nome: "Fulano",
    email: "fulano@mail.com",
    senha: "super123",
    nascimento: new Date("2000-01-01")
})
const resultado = await novoUsuario.save()
console.log(resultado)
```

Quando armazenamos os dados no MongoDB é retornado um resultado que pode ser mostrado em um console.log.

Através do comando DeleteOne podemos fazer a exclusão de um dado dentro do banco de dados MongoDB, mas precisamos indicar qual o dado deve ser excluído com o parâmetro:

```js
/* exemplo */
const resultado = await usuario.deleteOne({
  nome: "Fulano"
})
console.log(resultado)
```

## Rota para obter dados

Agora que sabemos como utilizar as ações do banco de dados MongoDB através do pacote externo que instalamos, o Mongoose, vamos criar a rota para obter todos os dados do Banco de Dados.

Começando pelos códigos HTTP, acessando os sites abaixo podemos encontrar uma sessão completa com diversos códigos e imagens engraçadas de gatinhos e cachorros:

- https://http.cat/
- https://httpstatusdogs.com/

Cada código representa uma mensagem que pode ser enviada pelo Servidor aos clientes como resposta. E cada centena dos códigos representa uma categoria de resposta como mostrado abaixo:

> 100 -> Usados para Respostas de informação
> 
> 200 -> Usados para Respostas de sucesso
> 
> 300 -> Usados para Redirecionamentos
> 
> 400 -> Usados para Erros do cliente
> 
> 500 -> Usados para Erros do servidor

Então sabendo dessas categorias, podemos classificar como tipos de respostas. Se o servidor precisar enviar uma informação básica para o cliente será utilizado o código de centena 100. Caso o servidor tenha conseguido efetuar alguma operação ou ação pedida pelo cliente com sucesso o código de resposta deverá ser da centena 200 e assim por diante.

Abaixo está listado os códigos mais utilizados e conhecidos quando falamos de códigos de status HTTP:

> 200 -> OK
> 201 -> Created
> 
> 400 -> Bad Request 
> 404 -> Not Found
> 
> 500 -> Internal Server Error

O famoso 404 é um código de status que indica um erro de acesso do Cliente, ou seja sempre que for realizado uma requisição em uma rota que o servidor não tenha registrado será retornado a mensagem de "404 Not Found".

Voltado agora para o código...

No index.js vamos importar os dois arquivos criados anteriormente, o conexao.js para fazer a ligação entre o servidor e o MongoDB e as ações do Mongoose no arquivo bancodados.js:

```js
/* src/index.js */
import "./conexao.js" 
import { usuario } from "./bancodados.js"
```

Assim podemos fazer a conexão com o serviço Atlas do MongoDB assim que o servidor for acionado e usar as ações para manipular os dados do usuário.

Na rota GET de endereço "/" vamos adicionar a ação para obter todos os dados armazenados com o Mongoose usando o comando Find e o resultado retornado da ação é enviado como resposta para o cliente no formato JSON com o código HTTP 200:

```js
/* src/index.js */
servidor.get("/", async function(requisicao, resposta) {
  const resultados = await usuario.find()
  resposta.status(200).json(resultados)
})
```

Com a Rota GET configurada podemos passar para a programação da Rota POST e elaborar para armazenar os dados de usuários a partir do corpo recebido na requisição.

Rota para obter dados está finalizada!

### Ferramenta Nova!
Antes de partirmos para a programação da Rota para adicionar dados ao banco de dados. Vamos aprender uma nova ferramenta!

A requisição e resposta HTTP seguem um protocolo de envio e tem um padrão em sua estrutura. É construída com um cabeçalho onde possui todas as informações necessárias para o tráfego e abaixo o corpo contendo informações primordiais de funcionamento das aplicações.

Abaixo tem o exemplo de uma resposta HTTP:

```http
GET / HTTP/1.1
HOST: http://localhost:4000
Content-Type: application/json; charset=UTF-8
Content-Length: 100
Transfer-Encoding: chunked
Date: Wed, 05 May 2010 21:10:14 GMT

[
  {
    "_id": ObjectId("909c523ccacd440b"),
    "nome": "Fulano",
    "email": "fulano@email.com",
    "senha": "super123",
    "nascimento": "2000-01-01",
    "__v": 0
  }
  ...
]
```

Veja a quantidade de informações que são passadas e enviadas pela internet enquanto o servidor está funcionando.

Nesse caso tem um conjunto de informações estruturadas e para ajudar a compreensão foi colocado de forma colorida e organizada, mas o que temos na verdade é um texto sendo enviado e às vezes sem os espaçamentos corretos.

- Para conseguirmos visualizar os dados de uma forma mais organizada iremos instalar uma nova ferramenta para facilitar as requisições do servidor. Usaremos o Postman, bastante conhecido no ambiente web e utilizado pelos programadores de backend.

Acesse o site oficial e faça o download da ferramenta:

- https://www.postman.com/downloads/

A instalação é bem trivial e semelhante às demais ferramentas, leia os termos de uso da ferramenta e concorde, então prossiga avançando até concluir a instalação da ferramenta em sua máquina.

No site terá disponíveis todas as versões e também para todos os sistemas operacionais. 

Caso não queira fazer a instalação é possível fazer o uso da versão online sem a necessidade de fazer o download do software e de instalar alguma dependência na máquina. Basta acessar o site:

- https://web.postman.co/

Agora com a ferramenta aberta em sua máquina, selecione o Workspace e preencha com o endereço do Localhost do servidor com a porta correta. Em seguida faça a requisição da Rota GET.

Essa ferramenta vai auxiliar a visualizar o corpo, tempo de resposta entre servidor-cliente, tamanho da resposta HTTP em bytes e entre outras informações que podem ser exploradas, como mostrado na imagem abaixo:

![003](Screenshots/003.png)

Temos agora uma grande arma em nossas mãos, estamos preparados até os dentes para enfrentar o próximo desafio de programar a rota para adicionar dados e podemos realizar testes minuciosos para ver o comportamento da rota.

Ferramenta instalada com sucesso!

## Rota para adicionar dados

Faremos a programação da Rota POST para adicionar novos usuários ao banco de dados do MongoDB!

Para usar a ação do Mongoose para armazenar os dados, precisamos antes entender uma estrutura utilizada no JavaScript para verificar se um conjunto de comandos obteve êxito ou não na execução.

Com a estrutura de comandos Try e Catch podemos realizar uma tentativa de execução em um conjunto de comandos. Funciona da seguinte forma:

```js
/* exemplo */
try {
  // Código para ser tentado executar
}
catch(erro) {
  // Código para ser executado se a tentativa der errado
}
```

O comando Try serve para receber dentro de si os comandos para a execução, para o caso prático que teremos usaremos os comandos de criação de usuário e o método Save para armazenar o usuário criado.

Agora, caso os comandos contidos dentro do comando Try venham a falhar ou gerar algum erro o Catch é imediatamente acionado e o erro é retornado na estrutura.

A rota ficaria assim com a aplicação da estrutura Try-Catch:

```js
/* src/index.js */
servidor.post("/", async function(requisicao, resposta) {
  try {
    const novoUsuario = new usuario(requisicao.body) 
    const resultado = await novoUsuario.save()
    resposta.status(201).json(resultado)
  }
  catch(erro) {
    console.log(erro.message) 
    resposta.sendStatus(500) 
  }
})
```

Se tudo acontecer exatamente como esperado, o cliente vai receber como resposta o resultado e o código enviado pelo servidor será Created ou conhecido pelo código de status HTTP 201.

Se não houver êxito na execução o cliente recebe o Internal Server Error, o temido código 500. E no console é printado a mensagem do erro para auxiliar nós programadores e encontrar o possível erro da aplicação do servidor.

Dentro da ferramenta Postman podemos adicionar o corpo da requisição e montar uma estrutura JSON para ser enviada para o servidor. Ao configurar e realizar o envio da requisição vai ser retornada a resposta na lateral direita com a mensagem de êxito.

E assim a aplicação mostrará que está funcionando corretamente. Caso apareça um erro ou alerta é necessário voltar para a programação do Servidor e encontrar o erro a partir da mensagem printada no Terminal.

Servidor finalizado!

# A aplicação
Agora partiremos para a aplicação em React!

Comece criando uma nova aplicação em React para conectar com o servidor que finalizamos. A aplicação vai funcionar para conseguirmos cadastrar novos usuários ao banco de dados MongoDB através do envio de informações do Servidor.

Agora faça o download da imagem de fundo que iremos usar no projeto e salve dentro da pasta Public:

- https://i.ibb.co/wrM4Y88/fundo.jpg

Em seguida, edite o arquivo index.html para ter todas as configurações inicial, como o conjunto de caracteres para o UTF-8 e o ajuste na proporção da tela em dispositivos móveis usando o Viewport. Aproveite e faça a importação do arquivo de estilo CSS.

O arquivo style.css vai ter o seguinte conteúdo:

```css
* {
  font-family: "Arial", sans-serif;
  font-size: 14pt;
}
body {
  align-items: center;
  background: url("fundo.jpg");
  backdrop-filter: blur(3px);
  color: #222;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0;
  width: 100vw;
}
```

## Configurando a aplicação
No arquivo index.js faremos a configuração do componente início para ser renderizado através da origem. Portanto, importe o pacote do React e do React DOM, declare as constantes de contentor e a origem e faça a renderização do componente:

```js
import React from "react" 
import { createRoot } from "react-dom/client" 

import Inicio from "./Inicio" 

const contentor = document.getElementById("root")
const origem = createRoot(contentor) 

origem.render(<Inicio/>)
```

Pronto, o arquivo index.js não mexeremos daqui em diante, e ficará como mostrado acima.

Partindo para o arquivo início.jsx vamos criar o componente com a função sendo exportada. E retorne uma tag <form> para colocarmos futuramente as entradas de dados com os <input>:

```js
import React from "react" 

export default function Inicio() {
  return <form> 
    // Código aqui
  </form> 
}
```

A ideia é ter uma aplicação simples e ao mesmo tempo elegante, então veremos o mínimo de estilização de componentes nesse conteúdo, apenas o necessário para deixar visualmente agradável.

Configuração da aplicação concluída!

## Formulário
Faça a importação do pacote styled components no inicio.jsx!

O formulário vai receber um estilo para ficar centralizado na página, então você vai precisar fazer a importação do pacote no arquivo inicio.jsx e em seguida criar um modelo:

```jsx
import styled from 'styled-components'
```

O modelo vai se chamar "ModeloFormulario" e a tag que usaremos como referência será a <form> para mantermos as mesmas propriedades de envio.

O modelo vai contar com um fundo de cor branca, uma sombra ao redor de 8px, bordas arredondadas suavemente, comportamento flexível com os itens alinhados como colunas em um espaço de distância de 16 pixels. O espaçamento interno é de 32 pixels e um comprimento total de 420 pixels.

Resultado do modelo:

```jsx
const ModeloFormulario = styled.form`
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    width: 420px;
`
```

E agora com o modelo criado podemos substituir o elemento <form> que usamos anteriormente no retorno do componente pelo elemento do "ModeloFormulario".

Aproveitando podemos colocar os elementos <inputs> necessários para o funcionamento da aplicação. São os inputs do Nome, Email, Senha e Data de Nascimento do usuário.

No código corrido ficaria assim:

```jsx
return (
  <ModeloFormulario>
    <input
      type="text" name="usuario"
      placeholder="Nome" required />
    <input
      type="email" name="email"
      placeholder="Email@mail.com" required />
    <input
      type="password" name="senha"
      placeholder="******" required />
    <input
      type="date" name="nascimento"
      required />
    <input type="submit" value="Cadastrar" />
  </ModeloFormulario>
)
```

Para ver o resultado você pode iniciar a aplicação do React e visualizar através do link do Localhost. Até o momento, o resultado é um quadrado branco personalizado com os elementos de <inputs> alinhados cada uma abaixo do outro.

Formulário feito!

### Estados e entradas
Os dados digitados pelos clientes devem ser armazenados localmente pela aplicação antes de serem enviados para o servidor ao clicar no botão "Cadastrar".

Para salvarmos os estados usaremos o Hook do React, UseState, que trabalhamos anteriormente em projetos para salvar os dados dos componentes. Nesse caso usaremos na página inicio.jsx.

Comece importando o comando UseState de dentro do pacote do React:

```jsx
/* src/Inicio.jsx */
import React, { useState } from "react"
```

Para funcionar corretamente o UseState e da maneira que esperamos: salvando os dados dos elementos de < inputs> digitado pelos usuários, devemos criar uma constante para ser a estrutura inicial de dados do estado.

Em seguida, declaramos o estado e o definidor do UseState, como mostrado abaixo:

```jsx
/* src/Inicio.jsx */
const dadosInicio = { usuario: "", email: "", senha: "", nascimento: "" }
const [ dados, definirDados ] = useState(dadosInicio)
```

A constante "DadosInicio" deve conter em sua estrutura o campo Usuário para armazenar o nome, email, senha e data de nascimento do usuário. Todos os campos com os valores vazios.

Para mudarmos os valores dos campos precisamos criar uma função chamada Mudar. A função vai ter o objetivo de alterar o valor em tempo real para cada < input> disponível na aplicação:

```jsx
/* src/Inicio.jsx */
function Mudar(evento) {
  const valor = evento.target.value 
  const campo = evento.target.name 
  definirDados({ ...dados, [campo]: valor })
}
```

A função Mudar recebe o evento, que por sua vez pode ser dividido em valor e campo. Usando o definidor podemos alterar e salvar o novo estado do componente.

Como temos a função programada nesse momento, faremos a inclusão do Value e o evento OnChange para cada elemento de < input> adicionado na aplicação. E o resultado seria este:

```jsx
/* src/Inicio.jsx */
<ModeloFormulario>
  <input
    onChange={Mudar}
    value={dados.nome}
    type="text" name="usuario"
    placeholder="Nome" required />
  <input
    onChange={Mudar}
    value={dados.email}
    type="email" name="email"
    placeholder="Email@mail.com" required />
  <input
    onChange={Mudar}
    value={dados.senha}
    type="password" name="senha"
    placeholder="******" required />
  <input
    onChange={Mudar}
    value={dados.nascimento}
    type="date" name="nascimento"
    required />
  <input type="submit" value="Cadastrar" />
</ModeloFormulario>
```

No value é passado o estado e o campo correspondente ao elemento <input> e na ação do OnChange é passado a função que criamos para alterar os valores do estado em tempo real.

Estado da página configurado!

## Publicando entradas
Os dados que estão salvos no estados ainda não estão sendo enviados para a rota POST do servidor, para fazer a conexão você deve instalar um pacote externo.

Usaremos o pacote Axios para fazer a requisição ao servidor que programamos anteriormente. Por questão de segurança não usaremos o comando Fetch do JavaScript, já que o Axios consegue ser mais seguro, performático e padronizado!

Comece fazendo a importação do Axios:
```jsx
/* src/Inicio.jsx */
import axios from "axios"
```

Um conceito muito importante para a programação JavaScript é o assincronismo. Nem todos os comandos seguem uma sequência síncrona de execução, principalmente quando estamos lidando com respostas de servidores que podem demorar tempos entre milisegundos e segundos.

Por isso usamos o comando Async e Await:

```jsx
async / await
```

O comando Async é atribuído a estruturas do JavaScript como Function, For, While e entre outros. Assim representando que a estrutura opera de forma assíncrona, ou seja, sem seguir os padrões de tempo.

Já o comando Await é atribuído a execução de uma função ou até mesmo de comando. Mostrando que o resultado retornado pode levar um tempo assíncrono.

Para ficar fixo na cabeça, se liga nesse exemplo abaixo:

```jsx
async function Sorveteria() {
  const julia = await pedirSorvete()
  const joao = await pedirSorvete()
  const jessica = await pedirSorvete()
}
```

Quando você vai à sorveteria pode existir um tempo para a preparação de cada pedido de sorvete e para cada pessoa o tempo é diferente. Nesse caso não segue uma sequência!

Júlia pode ser atendida depois da Jéssica e do João, por exemplo. Assim demonstra que cada comando tem seu tempo de execução de forma paralela.

Voltando para a programação do servidor, usaremos o comando async em uma nova função que iremos nomear de Adicionar. A função vai servir para realizar o envio das informações para o banco de dados através da requisição POST do Axios:

```jsx
/* src/Inicio.jsx */
async function Adicionar(evento) {
    evento.preventDefault()
    await axios.post("http://localhost:4000/", dados)
    definirDados(dadosInicio) 
}
```

Veja no código acima que: A requisição do Axios precisa conter o comando await para a sua execução, pois caso contrário o comando não funcionaria da forma correta como esperamos.

Para limpar os dados preenchidos pelo usuário é definido a estrutura de dados iniciais ao estado!

Agora com a função Adicionar finalizada podemos voltar para o formulário e programos para a função ser executada no momento do envio do formulário. Usamos o evento OnSubmit no modelo formulário:

```jsx
/* src/Inicio.jsx */
<ModeloFormulario onSubmit={ Adicionar }>
```

Assim que os campos do elemento < input> for preenchido pelos usuários e em seguida o botão Cadastrar for pressionado, teremos os dados sendo enviados para o Servidor.

E por sua vez o servidor recebe os dados e armazena através da ação do Mongoose no Banco de Dados do MongoDB.

Aplicação em React finalizada!

## Deixando Seguro (ainda não testado)
É possível deixar o projeto mais seguro!

Quando o código fonte da aplicação é publicado na internet para o público ou fazemos o deploy (colocamos no ar para funcionar) é preciso escondermos as credenciais de acesso em variáveis de ambientes.

Com as variáveis de ambientes as informações ficam mais seguras como a senha e o usuário para conectar no serviço Atlas do Banco de dados do MongoDB.

Um pacote externo muito utilizado para lidar com as variáveis de ambientes é o DotEnv. Faça a instalação do pacote pelo Terminal na aplicação do Servidor:

```bash
npm install dotenv --save
```

Depois de instalado siga os procedimentos:

Agora com o DotEnv instalado no projeto do Servidor, iremos criar um arquivo de nome ".env" na raiz da pasta onde está salvo o servidor. Nele você deverá preencher colocando o campo MONGO_URL seguido de um símbolo de igual e o valor, sendo o endereço do seu Cluster:

```env
/* .env */
MONGO_URI="mongodb+srv://<USUARIO>:<SENHA>@<CLUSTER>.mongodb.net/"
```

Com o endereço do MongoDB salvo dentro do arquivo .env. Devemos fazer a importação da variável de ambiente.

A importação pode ser feita em qualquer parte do código, em algumas documentações recomenda-se fazer a importação do pacote no arquivo inicial da aplicação.

Em outros casos, como o nosso, que usaremos o DotEnv apenas na conexão, faremos a importação apenas no arquivo de conexao.js da aplicação do servidor:

```js
/* src/conn.js*/
import "dotenv/config" 
```

E agora ao invés de mantermos o endereço salvo na constante, usamos o comando process.env.MONGO_URL para obter o valor que colocamos no arquivo da variável de ambiente:

```js
/* src/conn.js*/
const endereco = process.env.MONGO_URI
```

Lembrando que o arquivo ".env" não deve ser enviado em nenhuma situação em repositórios ou projetos de backup na internet. É um arquivo sigiloso que deve ser guardado com cautela!

Camada de segurança aos dados aplicados!

# Resultado Final

inalizamos um projeto contendo três aplicações com conexão entre si. Começamos produzindo o servidor onde logo em seguida criamos uma conta no serviço Atlas do Banco de Dados não relacional MongoDB e conectamos com o servidor através do pacote Mongoose.

Criamos rotas para trabalhar com as ações do pacote Mongoose. Em seguida passamos para o desenvolvimento da aplicação em React onde foi feito o formulário para enviar informações para o servidor registrar no Banco de Dados.

Foi uma baita aventura esse último projeto. Mas tenho certeza que você aprendeu muito, Olha só o que aprendemos:

- Criamos uma conta no serviço Atlas do banco de dados MongoDB;
- Aprendemos diferença entre banco de dados relacionais e não relacionais;
- Abrimos um Cluster para servir de Database para os dados;
- Geramos o endereço de conexão do MongoDB;
- Conectamos o banco de dados com o Servidor;
- Aprendemos as ações do pacote externo Mongoose;
- Criamos uma rota para o recebimentos de dados;

E assim podemos partir para o próximo grande desafio de desenvolver uma vitrine virtual chamada SuperVitrine. Parabéns por ter chegado até aqui!

Continue treinando rotas para receber dados, você pode agora ampliar as quantidades de dados que são exigidos dos usuários e ter uma base de dados maior no projeto!