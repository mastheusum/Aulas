# SuperFlix

Imagina que legal você montar uma plataforma de compartilhamento de conteúdo com o seu próprio catálogo contendo as séries, filmes e curtas metragem que você gosta de assistir. Mas para isso precisamos desenvolver uma aplicação em react com um novo servidor para fornecer informações e armazenar os dados necessários para o sistema funcionar.

## **Lesson 01 - Novo desafio!**

Iniciaremos um novo projeto!

Por finalizarmos a SuperVitrine agora podemos passar para o desenvolvimento de uma plataforma nova, e que tal a gente fazer um site de entretenimento parecido com o da Netflix?

Imagina que legal você montar uma plataforma de compartilhamento de conteúdo com o seu próprio catálogo contendo as séries, filmes e curtas metragem que você gosta de assistir. Mas para isso precisamos desenvolver uma aplicação em react com um novo servidor para fornecer informações e armazenar os dados necessários para o sistema funcionar.

Nesse projeto você vai ver de uma nova perspectiva do que podemos colocar de novo no servidor (Backend) para ter um funcionamento mais fluido, com mais segurança nas entradas, registrar os resultados de acesso e requisição, notificações em sistema entre outros passos.

Fique antenado e vamos nessa!

## **Lesson 02 - Construindo**

Comece abrindo o Terminal do seu sistema operacional e digite em seguida os comandos para criar um novo diretório na área de trabalho e acesse a pasta criada para criarmos o Servidor:

```bash
mkdir proj07b

cd proj07b
```

Para iniciarmos o projeto use o comando do npm e faça em seguida as instalações de todos os pacotes necessários para o projeto:

```bash
npm init -y

npm install --save cors dotenv express joi mongoose morgan node-notifier
```

Você já conhece alguns desses pacotes do node pois usamos anteriormente para fazer o servidor. Porém outros pacotes são novos que iremos usar mais para frente aqui no conteúdo.

Os pacotes que já usamos são:

- Express, para fazer o funcionamento do servidor;
- CORS para permitir o acesso vindo de qualquer aplicação;
- Mongoose para conectar com o banco de dados do MongoDB;
- DOTENV para usarmos as variáveis de ambiente;

Agora que você se lembrou dos pacotes que usamos anteriormente e o porquê de instalarmos no projeto, devemos fazer as configurações no arquivo package.json. (Lembrando… esse arquivo é gerado naturalmente quando o comando npm init é usado no diretório):

```js
/* package.json */
//...
"main": "./src/index.js",
"type": "module",
"scripts": {
  "start": "node ./src/index.js"
},
//...
```

Você deve mudar o endereço de onde ficará o arquivo index.js, adicionar qual o tipo de importação usaremos na programação javascript e por fim alterar o comando para o funcionamento do servidor.

E assim finalizamos a etapa de criação do diretório!

## **Lesson 03 - Programando**

Começa agora a parte boa!

Criando a pasta src para comportar os códigos do servidor, abra um novo arquivo chamado index.js para ser o arquivo principal do funcionamento do servidor. No index.js faça a importação do express e do pacote CORS:

```js
/* src/index.js */

import express from "express"
import cors from "cors"
//...
```

Com ambos pacotes importados, siga a programação declarando uma constante com o nome de servidor e ajuste o servidor para utilizar o CORS e a formatação JSON nas respostas:

```js
/* src/index.js */
//...
const servidor = express()

servidor.use(cors())
servidor.use(express.json())
//...
```

E para o servidor ligar e ficar em funcionamento em uma porta do localhost, precisamos incluir a função Listen para dentro do servidor;

Usaremos a porta 4000, escolhida sabiamente pois sabemos que o React funciona por padrão na porta 3000 e se usássemos a mesma porta daria conflito no funcionamento de uma das aplicações:

```js
/* src/index.js */
//...
servidor.listen(4000, function() {
  // notificao
})
//...
```

Na função de Callback, ou seja, a função que é executada quando o comando listen entra em processamento colocaremos uma notificação no próximo conteúdo ao invés de usar apenas o console.log para registrar no Terminal.

## **Lesson 04 - Mostrando notificações**

Antes na função listen e quando tinha um mau funcionamento em algumas execução do servidor você usava o comando console.log para fazer a impressão dos erros. Agora podemos usar uma notificação do sistema operacional para termos mais controle.

Através do pacote node-notifier podemos criar alertas que ficam por alguns segundos no canto da tela para informar os usuários através de uma mensagem. Faça a importação do pacote:

```js
/* src/index.js */
//...
import notifier from "node-notifier"
//...
```

Com a propriedade notifier importado faça o uso do método notify onde é possível passar um objeto contendo todas as informações da notificação como por exemplo o título, mensagem e o endereço de um ícone:

```js
/* src/index.js */
//...
notifier.notify({
  title: "proj07",
  message: "SERVIDOR EM FUNCIONAMENTO",
  icon: "./src/icone.png"
})
//...
```

Para o título você pode colocar o nome do projeto ou do servidor em formato de texto, em seguida na mensagem e complete com o que deve ser informado ao usuário, nesse caso especificar que o servidor foi acionado e está operando.

E para finalizar, no ícone passe o endereço relativo de onde está localizado a imagem, de preferência a imagens com extensão png, svg ou ico dependendo do sistema operacional que estiver utilizado!

## **Lesson 05 - Rotas e mais rotas**

Saindo do arquivo index.js…

Vá para o arquivo “Rotas.js” localizado na pasta SRC onde faremos as primeiras programações para o funcionamento das rotas que será utilizada no servidor.

Faça a importação do Express, e através do método Router crie um roteador com a constante chamada rotas, como mostra o trecho de código abaixo:

```js
/* src/Rotas.js */
import express from "express"

const rotas = express.Router()
//...
```

Com o Route podemos criar rotas de qualquer método de requisição no servidor, e depois de criar diversas rotas podemos exportar para ser configurado no arquivo “index.js”!

Para que os conteúdos sejam consultados no banco de dados do MongoDB e em seguida os resultados da consulta seja enviado como resposta a requisição, é necessário uma nova rota no método GET:

```js
/* src/Rotas.js */
rotas.get("/conteudos", function(request, response) {
  // consultar conteúdos do banco de dados
})
//...
```

A rota “/conteudos” ficará responsável mais tarde por conter a consulta e envio dos conteúdos.

A maioria dos serviços de streaming, divide por categorias ou temas as séries ou filmes do seu catálogo, e assim faremos o mesmo. Uma rota onde mostrará todos os gêneros que foram catalogados ou endereçados aos conteúdos:

```js
/* src/Rotas.js */
rotas.get("/generos", function(request, response) {
  // consultar os gêneros do banco de dados
})
//...
```

A próxima rota deve ser específica e precisa!

Caso queiramos obter todas as informações sobre um único conteúdo, devemos fazer uma consulta filtrada ao banco de dados através do código, portanto programe a seguir uma rota que receba o código em seu endereço como parâmetro:

```js
/* src/Rotas.js */
rotas.get("/conteudo/:codigo", function(request, response) {
  // consultar os gêneros do banco de dados
})
//...
```

Obtendo o código do parâmetro é possível fazer a consulta no banco de dados e assim receber algum resultado para ser enviado como resposta.

A última rota é do método POST, o que significa que os dados vão ser enviados na requisição para serem salvos no banco de dados:

```js
/* src/Rotas.js */
rotas.post("/conteudo", function(request, response) {
  // consultar os gêneros do banco de dados
})
//...
```

Depois de criar a rota POST com o endereço de acesso “/conteudo”, devemos passar a rota para o processo de exportação para ser utilizada no arquivo “index.js”.

Faça a exportação padrão da constante rotas usando o comando “export default” do javascript:

```js
/* src/Rotas.js */
export default rotas
//...
```

Lembrando que a exportação deve ficar no final do código!

Assim, assumimos que todas as rotas foram criadas anteriormente ao processo de exportação, evitando futuros problemas de mau funcionamento ou declaração das rotas!

No arquivo “index.js” importe o Rotas e configure-o:

```js
/* src/index.js */

//...
import rotas from "./Rotas.js"
//.../
servidor.use(rotas)
//...
```

O Rotas tem que ser importado assim como outro pacote que usamos ou que foi instalado via Terminal, o único ponto que diferencia é que deve ser atribuído o seu endereço após o comando “from”!

E para usar as rotas do arquivo que produzimos adicione o comando “servidor.use” e dentro de parênteses passe a constante da importação.

## **Lesson 06 - Registrando**

Como sabemos se alguma pessoa acessou a rota?

Com os seus conhecimentos até o momento, você pode imaginar que com o comando “console.log” podemos indicar qual rota foi acessada, qual foi o momento exato e o método. Porém não é a maneira mais inteligente.

Conseguimos fazer de maneira mais eficiente e prática usando uma biblioteca que foi desenvolvida por outra pessoa em algum momento para registrar os acessos de rotas, é o exemplo do “Morgan” um pacote que vai nos ajudar nesse processo maçante.

Imagina que você tivesse 500 rotas e tivesse que colocar um console.log para cada, seria um processo muito chato, não?

Comece importando o pacote:

```js
/* src/index.js */

//...
import morgan from "morgan"
//...
```

E para fazer o uso você deve usar o comando “servidor.use”, e sim o mesmo que usamos para adicionar as rotas e fazer diversas outras configurações ou uso de pacotes acoplados ao servidor. Essa é a magia de usar o Express.

Tudo pode ser acoplado com facilidade!

Com o Morgan você pode usar predefinições para registrar no Terminal os acessos das rotas. O que usaremos é a categoria DEV que mostra boa parte das estatísticas que queremos:

```js
/* src/index.js */

//...
servidor.use(morgan("dev"))
//...
```

Existem várias definições de registro:

- Common, onde tem as informações básicas e mais comuns ao acesso de rotas;
- Dev com informações aprofundadas sobre o acesso da rota;
- Short com poucos dados e com o acesso simplificado;
- Tiny vem com informações curtas e abreviadas;

Aqui abaixo vai a documentação do Morgan caso esteja interessado em entender mais como funciona ou ler sobre as definições:

**https://github.com/expressjs/morgan**

E depois de escolhido a melhor definição para o seu caso, coloque dentro do método Morgan entre aspas para ser habilitado. E assim podemos iniciar o servidor para testar as rotas que produzimos:

```bash
npm start
```

Use o comando “npm” junto com o comando de ignição “start” para acionar o servidor e colocar em funcionamento. Ainda as rotas estão sem programação, mas você terá um resultado no Terminal assim que ligado!

## **Lesson 07 - Conectando**

Conectando o servidor com o MongoDB!

No arquivo “Conexao.js” dentro do diretório “database” vamos partir para aquela programação de conexão com o banco de dados, nessa altura do desenvolvimento do projeto você deve imaginar como a conexão deve ser feita.

Já fizemos isso algumas vezes em projetos anteriores, porém agora faremos de uma forma bem mais segura usando a estrutura Then…Catch e também o pacote de notificações que instalamos no início do projeto:

```js
/* src/database/Conexao.js */

import notifier from "node-notifier"
import mongoose from "mongoose"
//...
```

Importe o notifier e o mongoose!

Lembrando: Para que a conexão seja estabelecida entre o servidor e o banco de dados MongoDB através do serviço Atlas, devemos declarar em constante o endereço e as opções de conexão como mostra abaixo:

```js
/* src/database/Conexao.js */

//...
const endereco = "mongodb+srv://"
const opcao = { useNewUrlParser: true, useUnifiedTopology: true }
//...
```

No endereço é passado aquela URL que não devemos compartilhar com ninguém pois está atribuída a senha e também todas as permissões de Administrador para as ações do banco de dados!

Em seguida faça a conexão passando como parâmetros o endereço e opção:

```js
/* src/database/Conexao.js */

//...
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
```

Nesse caso não usaremos a função de callback, pois nem sempre é precisa e exata com a conexão. Por isso iremos substituir pela estrutura Then..Catch como mostrado, assim ou a conexão é bem sucedida e a notificação aparece, ou o erro é mostrado no Terminal com a mensagem!

## **Lesson 08 - Variáveis de ambiente**

Segurança sempre é bom!

O que faremos é incluir variáveis de ambiente na aplicação para que os dados que digitamos como o endereço de conexão do banco de dados não sejam vazados no momento de um deploy ou de compartilharmos o código com outra pessoa!

Com a variável de ambiente também conseguimos ter mais liberdade de trocar a qualquer momento em um único arquivo e todo o funcionamento é incluído dentro do código como se fosse uma variável válida a vários arquivos.

O conceito ajuda demais o desenvolvimento da aplicação e enriquece o funcionamento. Comece importando o pacote do dotenv:

```js
/* src/database/Conexao.js */

import "dotenv/config"
//...
```

Em seguida no arquivo “Conexao.js” na declaração da constante chamada de “endereco” na programação substitua o valor pelo comando “process.env” que é responsável por encontrar a chave “MONGOURI” e trazer o seu resultado:

```js
/* src/database/Conexao.js */

//...
const endereco = process.env.MONGOURI
//...
```

Depois de alterado o valor da constante vá até o arquivo “.env” na raiz do projeto e adicione a chave intitulada de “MONGOURI” e no valor passe entre aspas o valor.

```js
/* .env */

MONGOURI="mongodb+srv://<USER>:<PASSWORD>@<CLUSTER>.mongodb.net/"
```

Não se esqueça que o arquivo de extensão .env nunca deve ser compartilhado com plataformas como o Git!

No endereço passe o protocolo mongodb+src contendo o nome de usuário no início seguida da senha mestre-chave, o nome do cluster que está sendo utilizado e a finalização do endereço de identificação como mostrado no trecho acima.

## **Lesson 09 - Conteúdo**

Conexão feita e segurança aperfeiçoada!

Crie o arquivo “Conteudo.js” no diretório “database”. No arquivo de conteúdo faremos a construção do esquema para definir o formato dos documentos no banco de dados e em seguida transformar em modelo para executar as ações.

Comece importando o pacote mongoose:

```js
/* src/database/Conteudo.js */

import mongoose from "mongoose"
//...
```

E depois de importado:

Declare uma constante com o nome de “esquema” e faça a construção de um esquema contendo as seguintes informações: capa, trilha, título, descrição, gênero, ano, duração, faixa:

```js
/* src/database/Conteudo.js */

//...
const esquema = new mongoose.Schema({
  capa: String,
  trilha: String,
  titulo: String,
  descricao: String,
  genero: String,
  ano: Number,
  duracao: Number,
  faixa: Number
},
{ collection: "proj07" })
//...
```

Para a capa, trilha, título, descrição e gênero, escolha o formato de texto já que pode ser categorizado em uma única informação usando letras.

E para as propriedades de ano, duração e faixa use o formato numérico, onde conseguimos quantificar usando números. Todas as propriedades serão verificadas futuramente em uma lesson específica!

E depois de definido como os dados serão esquematizados, podemos passar para a conversão para modelo. Crie uma constante com o nome de “conteudo” e use o comando “mongoose.model” para criar o modelo:

```js
/* src/database/Conteudo.js */

//...
const conteudo = mongoose.model("conteudo", esquema)
//...
```

No comando mongoose.model passe como parâmetro o nome que o modelo deve ser identificado e em seguida o esquema que foi criado.

E abaixo da constante, no final do código faça a exportação do modelo:

```js
/* src/database/Conteudo.js */

//...
export { conteudo }
```

No momento da exportação do modelo não se esqueça de passar entre parênteses para que no momento da importação da constante desenvolvida seja íntegra.

## **Lesson 10 - Consultar conteúdos**

Chegou o momento de conectar o banco de dados com as rotas!

Agora faremos a consulta no banco de dados do MongoDB através do modelo que foi programado e em seguida receber os resultados esperados e fazer o envio pela resposta da rota. Para que tudo funcione adequadamente faça a importação do modelo conteúdo:

```js
/* src/Rotas.js */

//...
import { conteudo } from "./database/Conteudo.js"
//...
```

Através do comando Conteúdo que foi importado podemos usar as ações do Mongoose para operar com o banco de dados.

No comando “conteudo.find” faça a consulta de todos os conteúdos cadastrados no banco de dados:

```js
/* src/Rotas.js */

//...
conteudo.find()
//...
```

Apenas com a execução não será recebido os resultados, por isso é preciso usar a estrutura Then.. Catch para receber os resultados. A princípio não temos nenhum conteúdo cadastrado no banco de dados, portanto vai ser recebido o valor null.

O que deve ser feito é verificar a quantidade de resultados recebidos para enviar a resposta exata para cada ocasião. Como mostrado abaixo:

```js
/* src/Rotas.js */

//...
.then(function(resultados) {
  if (resultados.length > 0) 
    resposta.status(200).json(resultados)
  else resposta.status(404).json({
    mensagem: "Nenhum resultado encontrado!"
  })
})
//...
```

Caso tenha conteúdos recebidos, será enviado o código 200 junto com os resultados no formato JSON. E se não houver conteúdos a resposta retornada ao usuário é do código 404 com a mensagem “Nenhum resultado encontrado!” na estrutura JSON.

Para a estrutura Catch retorne uma resposta do código 500, ou “Internal Server Error” passando o erro através da propriedade mensagem na estrutura JSON:

```js
/* src/Rotas.js */

//...
.catch(function(erro) {
  resposta.status(500).json({
    mensagem: erro.message 
  })
})
//...
```

Relembrando: O que deve ser mostrado quando ocorrer um erro é a mensagem, qualquer uma outra informação com relação ao código ou detalhes sobre o contexto deve ser evitada de deixar público.

Qualquer vulnerabilidade no sistema pode ser usada contra o funcionamento do servidor e sua integridade quando caído em mãos erradas!

## **Lesson 11 - Consultar gêneros**

Agora o mesmo será feito com o gêneros!

Temos que fazer uma consulta no conteúdo à procura dos gêneros inseridos em cada filme ou série catalogada no banco de dados. Para que os gêneros sejam selecionados corretamente em uma lista é preciso fazer uma varredura a cada conteúdo catalogado!

Comece colocando a estrutura Then..Catch no comando “conteudo.find”:

```js
/* src/Rotas.js */

//...
conteudo.find()
  .then(function(resultados) {
    /.../
  })
  .catch(function(erro) {
    resposta.status(500).json({
      mensagem: erro.message 
    })
  })
//...
```

Siga os mesmos passos da consulta anterior, faça o comando catch retornar o código 500 com a mensagem de erro!

E na estrutura Then, inclua a verificação com o mapeamento e em seguida inclua a lista o gênero que ainda não é pertencente:

```js
/* src/Rotas.js */

//...
if (resultados.length > 0) {
  var lista = new Array()
  resultados.map(function(conteudo) {
    if (!lista.includes(conteudo.genero))
      return lista.push(conteudo.genero)
  })
  resposta.status(200).json(lista)
}
else resposta.status(404).json({
  mensagem: "Nenhum resultado encontrado!"
})
//...
```

Com o comando “map” no resultado será gerado uma varredura, com a verificação usando a negação “lista.include” vai ser selecionado válido apenas gêneros que ainda não estão catalogados e com o comando push incluso na lista.

No final do mapeamento o resultado é enviado com o código 200!

## **Lesson 12 - Consultar único conteúdo**

E agora precisamos fazer a programação da consulta de um único conteúdo!

Para funcionar corretamente, importe o comando “Types” e “isValidObjectId” de dentro do mongoose. Com o Types faremos a conversão do código em formato de String para o formato de ID do banco de dados MongoDB:

```js
/* src/Rotas.js */

//...
import { Types, isValidObjectId } from "mongoose"
//...
```

E com o “isValidObjectID” conseguimos verificar se o código requisitado tem as propriedades necessárias para ser considerado válido ao MongoDB.

Primeiramente, comece na rota de resultado único obtendo o código no parâmetros da requisição como mostra o código:

```js
/* src/Rotas.js */

//...
const { codigo } = request.params
//...
```

E depois de recebido, faça a seguinte verificação:

Use a estrutura de decisão IF unida com o comando “isValidObjectId” passando o código recebido no parâmetro da requisição para verificação. Supondo que o código seja válido daremos procedimento a programação e será estabelecido a consulta:

```js
/* src/Rotas.js */

//...
if (isValidObjectId(codigo)) {
  /.../
}
else resposta.status(400).json({
  mensagem: "Código invalido!"
})
//...
```

Porém, se acontecer em algum momento do código passado estar totalmente inválido a resposta enviada deve ser com o código 400 (Bad Request) indicando na mensagem o texto “Código Invalido!“.

Para o código válido de seguimento na consulta, use o comando “findById” e passe como argumento da função o código convertido:

```js
/* src/Rotas.js */

//...
conteudo.findById( Types.ObjectId(codigo) )
//...
```

Para converter o formato de String para ID é preciso usar o método importado “Types.ObjectID”.

E vem depois a estrutura Then.. Catch para lidar com o funcionamento da consulta feita pelo ID. dentro da estrutura Then faça a verificação do resultado, caso seja válido retorna como resposta da requisição, caso contrário retorne o alerta 404 com a mensagem "Nenhum resultado encontrado!”:

```js
/* src/Rotas.js */

//...
.then(function(resultado) {
  if (resultado)
    resposta.status(200).json(resultado)
  else resposta.status(404).json({
    mensagem: "Nenhum resultado encontrado!" 
  })
})
//...
```

E como você já está ligado: Faça a estrutura Catch:

```js
/* src/Rotas.js */

//...
.catch(function(erro) {
  resposta.status(500).json({
    mensagem: erro.message 
  })
})
//...
```

E assim está encerrada a programação da rota de endereço “/conteudo/:codigo”, as rotas que são do método GET estão finalizadas faltando apenas a rota POST “/catalogar”.

Vamos para a última rota do Servidor!

## **Lesson 13 - Salvar conteúdo**

A rota POST sem dúvidas é uma das mais desafiadoras e divertidas para quem gosta de programar!

Comece a programação fazendo o recebimento do corpo da requisição, onde estarão todos os dados necessários para fazer o armazenamento do catálogo no banco de dados, ou pelo menos esperamos que os dados sejam passados da forma e ordem correta.

Em seguida uma estrutura deve ser criada através da instância de um novo conteúdo com o modelo que foi importado, e com o comando de ação “save” armazenado finalmente. Comece recebendo o corpo da requisição:

```js
/* src/Rotas.js */

//...
const corpo = requisicao.body
//...
```

Com o corpo da requisição obtido e salvo certinho dentro de uma constante, declare a instância de um novo conteúdo:

```js
/* src/Rotas.js */

//...
const novoConteudo = new conteudo(corpo)
//...
```

E prepare a instância do novo conteúdo criado para ser salva no banco de dados:

```js
/* src/Rotas.js */

//...
novoConteudo.save()
//...
```

Com a estrutura Then e Catch podemos certificar com precisão se o dado foi de fato salvo no banco de dados com todas as informações necessárias. No Then ocorre o retorno de um resultado do ID e informações cruciais do funcionamento que podem ser retornadas com o código 201.

O código 201 representa que um novo dado foi adicionado com sucesso a aplicação do servidor:

```js
/* src/Rotas.js */

//...
.then(function(resultado) {
  resposta.status(201).json(resultado)
})
.catch(function(erro) {
  resposta.status(500).json({ mensagem: erro.message })
})
//...
```

E se o comando Catch foi acionado é que algo muito errado aconteceu, geralmente um dado que é obrigatório foi deixado de colocar ou no momento que o banco de dados foi salvar houve incompatibilidade.

Então, teste a aplicação!

## **Lesson 14 - Validação de dados**

Opa, opa!

Você pode até ter achado que a programação terminaria aqui, porém sempre há algo a ser melhorado, principalmente quando falamos de segurança e servidor, duas coisas que devem andar sempre juntos para termos sempre o melhor a oferecer aos usuários do nosso sistema!

Vamos de JOI, uma pacote javascript que ajuda a validar as entradas digitada pelos usuários, quando o sistema está no ar e disponível para qualquer pessoa acessar, podemos receber um texto de 10mil palavras em um campo onde seria para colocar o nome do filme.

Isso pode comprometer a operação, ocasionando até o mau funcionamento e instabilidade no servidor. Feito em grande escala o servidor pode negar os acessos a outros usuários, o que é chamado em inglês de DDOS (Ataque de negação de serviço).

Para nos prevenir podemos colocar um validador de dados como o Joi, então mão na massa e comece importando:

```js
/* src/Rotas.js */

//...
import Joi from "joi"
//...
```

Com o comando Joi conseguimos montar uma estrutura de objeto para definir qual será o Tipo de Dados, Formatação, Obrigatoriedade, Tamanho e configurações do tipo que podem ser consultadas na documentação oficial com maiores detalhes:

**https://github.com/hapijs/joi**

Declare uma constante chamada de esquema com o comando Joi.object e declare quais serão as estruturas para cada dado recebido no corpo da requisição:
