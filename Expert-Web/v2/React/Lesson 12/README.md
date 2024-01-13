# SuperFlix - Construindo o painel

## Lesson 01 - Novo desafio!

Continuando o desenvolvimento da plataforma SuperFlix!

Isso mesmo, agora partiremos para o desenvolvimento e programação da interface que iremos usar a tecnologia React. Para esse início devemos fazer uma página inicial para ser o catálogo de séries e filmes, chamando a atenção, destacando os lançamentos e gêneros mais procurados.

Tenho certeza que você tem um filme, série ou anime favorito, algum que marcou bastante enquanto você era pequeno ou quando estava descobrindo um novo universo. Às vezes o entretenimento parece mágico e podemos entrar em vários universos apenas mudando o que assistir!

Faremos agora uma plataforma tão fantástica como assistir aquele filme favorito seu. Bora nessa!

## Lesson 02 - Criando

Vamos começar!

Abra o Terminale crie uma aplicação no React:

```bash
npx create-react-app proj07f --template empty
```

Depois de criado o projeto no React acesse a pasta e abra o Visual Studio Code

```bash
cd proj07f

npm install

code .
```

Faça a instalação dos seguinte pacotes: React Router DOM, Styled Components e o Axios:

```bash
npm install react-router-dom styled-components axios
```

Espero que você já esteja habituado com essa etapa de criar os projetos dentro do React, depois de fazermos uma coleção gigante já deve ter se tornado algo comum de se fazer.

E pronto! Temos a criação do projeto feito!

## Lesson 03 - Imagens da marca

A identificação está na logo!

Deve ser comum você olhar nos Outdoors ou placas pelas ruas e identificar uma marca apenas por uma imagem ou texto escrito, sem dúvida grandes marcas como Netflix, Amazon e HBO sabem como ter uma identidade.

Para esse projeto faça a sua réplica e aprenda reproduzindo os passos como foram feitos os passos do desenvolvimento de uma grande plataforma de Streaming:

https://fontmeme.com/netflix-font/

Acessando o site acima você consegue fazer a sua própria logo baseada no Layout da Netflix usando a fonte Bebas Neue com uma angulação na parte inferior. Clássica da logo moderna utilizada pela plataforma é uma boa escolha!

Em seguida acesse o site abaixo e encontre uma imagem que combine com um filme de destaque na capa ou no cabeçalho do site:

https://unsplash.com/s/photos/movie?orientation=landscape

No Unsplash você pode encontrar diversas imagens bacanas, então filtre pelas que você achou interessante e atraente. Outro detalhe importante é que as imagens podem ser usadas, porém algumas para serem publicadas precisam da permissão!

Abaixo vai a árvore de diretório do projeto:

```bash
/proj07f
 │
 ├─ /node_modules
 ├─ /public
 │  ├── fundo.jpg
 │  ├── icone.png
 │  ├── logo.png
 │  └── style.css
 ├─ /src 
 │  ├── /components
 │  ├── /datas
 │  ├── /pages
 │  ├── main.jsx
 │  └── Rotas.jsx
 ├─ .gitignore
 ├─ index.html
 ├─ package.json
 └─ package-lock.json
```

Crie os arquivos e pastas que estão faltando, pois em breve iremos precisar de cada um deles para montar o esquema da interface da SuperFlix.

## Lesson 04 - Trilhando

No arquivo index.js faça os ajustes necessários para renderizar um arquivo de rotas!

Faça a importação do React e do createRoot para declarar as constantes de contentor e origem. Em seguida importe o arquivo “Rotas.jsx” e programe a renderização do elemento:

```jsx
import React from "react"
import { createRoot } from "react-dom/client"
import Rotas from "./Rotas"

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render( <Rotas/> )
```

Para funcionar corretamente, precisamos de um arquivo index.html bem configurado com tudo que se deve direito. No arquivo de página adicione linha de programação para configurar o UTF-8 e o Viewport:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Proj07 </title>
    <link rel="stylesheet" href="/style.css">
    <link rel="shortcut icon" href="/icone.png" type="image/png">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Se possível, já adicione o arquivo de estilo Style.css e o ícone de aba do navegador!

Em seguida no arquivo de estilo faça as alterações de fontes, como o tamanho e o uso de familia da categoria Sans-Serif:

```css
* {
  font-family: "Segoe UI", sans-serif;
  font-size: 12pt;
}

body {
  background: #222;
  color: #fff;
  margin: 0;
}

::-webkit-scrollbar {
  background: #222;
  height: 8px;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #444;
}
```

Para a cor de fundo da página coloque um cinza escuro, a cor da letra em branco, sem margem. Na barra de rolagem deixe escuro assim como o fundo e para o pegador da barra de rolagem coloque uma cor mais clara para destacar, como mostra o código.

E assim está configurado o início do projeto!

## Lesson 05 - Minhas rotas

Vamos construir novas rotas!

Faça a importação do React de dentro do pacote do react e BrowserRouter, Routes, Route do pacote React Router DOM:

```jsx
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
```

Seguindo a construção de projetos que você já conhece, dentro da pasta pages crie os arquivos: Explorar, Início, Painel e Vídeo:

```bash
/pages
 ├─ Explorar.jsx
 ├─ Inicio.jsx
 ├─ Painel.jsx
 └─ Video.jsx
```

Nesta segunda unit vamos desenvolver a página de Painel onde vai conter um formulário com todos os campos e entradas de dados para fazer o cadastro do conteúdo no servidor e em seguida cadastrar no banco de dados;

A página Início vai contar um com campo para fazer login no site, vai ter campo como email e senha para o usuário conseguir acessar a sua sessão e conseguir explorar os conteúdos disponíveis no catálogo;

Na página de Vídeo vai ter o trailer ou o conteúdo em vídeo apresentado no topo em destaque tendo abaixo as informações principais como duração, descrição, título, faixa indicativa, ano de produção e etc. É a página onde ficará a diversão com o reprodutor para assistir o conteúdo escolhido;

E a página de Explorar que é a sessão principal e o layout que já estamos habituados a ver na netflix e em outros sistema de streaming, é parecido com as gôndolas de vídeos das antigas locadoras de DVD ou fita Cassete onde tem os conteúdos separados por generos, categorias ou gostos!

Faça a importação das páginas criadas dentro do arquivo Rotas.jsx:

```jsx
import Inicio from "./pages/Inicio"
import Explorar from "./pages/Explorar"
import Video from "./pages/Video"
import Painel from "./pages/Painel"
```

Em seguida construa uma função para adicionar as rotas que iremos programar. Use a tag **< BrowserRouter>** para indicar que o React tem um roteador para o navegador, **< Routes>** para adicionar as rotas de acordo com o caminho e renderizar os elementos:

```jsx
export default function Rotas() {
  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={ <Inicio/> }/> 
      <Route path="/explorar" element={ <Explorar/> }/>
      <Route path="/video/:codigo" element={ <Video/> }/> 
      <Route path="/painel" element={ <Painel/> }/> 
    </Routes>
  </BrowserRouter> 
}
```

Não se esqueça de colocar a rota com o path “/” como a rota principal usando o atributo index. Assim o **< BrowserRouter>** sabe qual página renderizar no localhost por padrão.

E na rota de vídeo precisamos do código indicado como parâmetro de endereço, assim poderemos acessar diversos vídeos em uma única só rota!

## Lesson 06 - Painel

Chega de Rotas, vamos programar páginas!

Comece abrindo a página Painel criada no diretório pages, e comece importando o React como pacote principal da aplicação:

```jsx
// ./src/pages/Painel.jsx
import React from "react"
```

Como já é padrão de todos os arquivos do React e você já está habituado:

Construa uma função de componente para ser exportada por padrão e retorne um elemento vazio do HTML com um título escrito o texto “Painel de Controle”:

```jsx
// ./src/pages/Painel.jsx
export default function Painel() {
  return <>
    <h1> Painel de controle </h1>
  </>
}
```

Passando para você o que está esquematizado para fazer nas próximas lessons:

Faremos a construção de um componente principal com o seu estilo usando o pacote Styled Components e em seguida programar o componente de formulário contendo todas as entradas e inclusive os arquivos para fazer conexão com o servidor através do Axios.

Como estamos no início da produção do Painel, vamos acelerar o processo que tem muito a ser digitado pela frente. Inicie a interface do React:


```bash
npm start
```

Se quiser ver como está ficando o resultado, acesse:

- http://localhost:3000/painel

E assim você terá uma noção de como está ficando a página de painel que estamos programando!

## Lesson 07 - Estilo do componente Principal

E agora partimos para o componente Principal!

O nome já esclarece tudo, o componente principal é o principal haha. Na verdade tem esse nome pois será usado na maioria das páginas, assim como todo componente bonito e bem elaborado, precisamos de muito estilo.

Comece importando o **React** e o **Styled Components**:

```jsx
// ./src/components/Principal.jsx

import React from "react" 
import styled from "styled-components"
```

Serão quatro componentes que teremos que fazer, sendo o Modelo que é o modelo principal para suportar os demais, como a Barra, Barra Imagem e Mensagem!

O Modelo terá uma imagem de fundo cobrindo todo o campo de 100 partes de altura como mostra o estilo declarado abaixo:

```jsx
// ./src/components/Principal.jsx

const Modelo = styled.div`
  background-image: url(${ props => props.fundo });
  background-size: cover;
  height: 100vh;
`
```

Para a imagem ser algo versátil e fácil de alterar, use o props como variável para definir qual imagem vai ser utilizada como fundo do Modelo de estilo!

Para o Modelo barra use o elemento **< div>** como base e programe o estilo degradê usando o comando linear-gradient partindo da cor preta para o transparente com o espaçamento interno de 32 pixels da propriedade de estilo padding:

```jsx
// ./src/components/Principal.jsx

const Barra = styled.div`
  background: linear-gradient(black, transparent);
  padding: 32px;
`
```

Dentro da Barra terá uma imagem, então bora fazer o elemento “BarraImagem”!

Declare uma constante para o Modelo nomeada de “BarraImagem” usando o elemento **< img>** como base e passe as propriedades de display com o valor block, assim o ajuste fica rígido e a margem consegue ser alinhado na vertical com o ajuste de 48 pixels de altura:

```jsx
// ./src/components/Principal.jsx

const BarraImagem = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
`
```
```jsx
// ./src/components/Principal.jsx

const BarraImagem = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
`
```

E o Modelo Mensagem que vai conter todos os demais componente precisamos colocar um espaçamento de 64 pixels interno na vertical usando o padding, alinha o texto ao centro e colocar um comprimento variável:

```jsx
// ./src/components/Principal.jsx

const Mensagem = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  width: ${ props => props.tamanho };
`
```

Para usar o comprimento variável use o props passando a propriedade chamada tamanho para o componente!

O que veremos a seguir é como será a disposição dos modelos transformados em elementos!

## Lesson 08 - Funcionamento do componente Principal

Modelos para elementos!

Comece construindo uma função do componente para ser exportada por padrão, e coloque o props como parâmetro da função para que os elementos recebam as suas devidas informações como imagem de fundo e tamanho para o modelo mensagem:

```jsx
// ./src/components/Principal.jsx

export default function Principal(props) {
  return <Modelo fundo={ props.fundo }>
    <Barra>
      <BarraImagem src="/logo.png" alt="logo"/>
    </Barra>
    <Mensagem tamanho={ props.tamanho }> 
      { props.children }
    </Mensagem>
  </Modelo>
}
```

Como retorno da função passe o Modelo como elemento principal e dentro insira a Barra e a Mensagem. Dentro da barra irá contar com o elemento de “BarraImagem” tendo a logo como recurso gráfico e o texto alternativo de “logo”.

Para o elemento mensagem passe a propriedade tamanho e dentro o props.children para receber elementos do componente!

Em seguida importe o elemento principal e coloque para dentro da página painel:

```jsx
// ./src/pages/Painel.jsx
import Principal from "../components/Principal" 
/.../
<Pricipal fundo="/fundo.jpg" tamanho="480px"> 
   /.../
</Pricipal>
```

E assim deve ser o resultado da página, por enquanto o fundo vai ser a imagem inserida dentro do diretório public para dentro da propriedade fundo e o tamanho de 480 pixels para a largura do principal.

Agora veja o resultado na página!

## Lesson 09 - Estilo do componente Formulário

Momento rápido para produzir um formulário!


Agora você verá a forma mais rápida de programar um formulário como componente, vamos começar pelo modelo e depois retornar rapidamente como elementos e usar na página Painel.jsx.

Faça a importação do React e do Styled Components:

```jsx
// ./src/components/Formulario.jsx

import React from "react"
import styled from "styled-components"
```

Em seguida crie com o styled components o Modelo com elemento **< div>** e o ModeloInterno com elemento **< form>** do HTML, como mostrado abaixo:

```jsx
// ./src/components/Formulario.jsx

const Modelo = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`

const ModeloInterno = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
```

Para o Modelo coloque um fundo branco com borda arredondadas de 4 pixels, cor da fonte em cinza escuro e um espaçamento interno com o padding de 32 pixels.

Para o ModeloInterno só ajuste para alinhar os elementos de forma flexível usando a propriedade display com o direcionamento em colunas e o espaço entre elementos de 16 pixels com o GAP!

E no retorno dos elementos no componente, retorne o Modelo contendo dentro o ModeloInterno com o atributo onSubmit com a função Enviar que faremos em breve:

```jsx
// ./src/components/Formulario.jsx

export default function Formulario() {
  return <Modelo>
    <ModeloInterno onSubmit={ Enviar }>
      /.../
    </ModeloInterno>
  </Modelo>
}
```

E ao momento encerramos os Modelos principais do componente!

## Lesson 10 - Configurando o componente Formulário

Vamos fazer a lógica do componente Formulário!

Antes de colocarmos as entradas de texto, campos de preenchimento devemos ter um estado para armazenar todas as informações digitada pelo usuário, e esse estado vai ser útil para enviar ao servidor assim catalogando novos conteúdos.

Para fazermos a lógica de estado importe o hook UseState de dentro do React e o arquivo “ConteudoInicial”:

```js
// ./src/datas/ConteudoInicial.js

const ConteudoInicial = {
  capa: "",
  trilha: "",
  titulo: "",
  descricao: "",
  genero: "",
  ano: 0,
  duracao: 0,
  faixa: 0 
}

export default ConteudoInicial
```

A constante vai ser um objeto contendo todas as informações do conteúdo, como capa, trilha, título, descrição breve, gênero, ano de produção, duração do conteúdo e faixa indicativa.

Em seguida crie o estado:

```jsx
// ./src/components/Formulario.jsx

const [ conteudo, definirConteudo ] = useState(ConteudoInicial)
```

Para que as propriedade contidas dentro do objeto de conteúdo possam serem mudadas, devemos criar uma função específica para alterar os valores como mostrado abaixo:

```jsx
// ./src/components/Formulario.jsx

function Mudar(evento) {
  const campo = evento.target.name 
  const valor = evento.target.value 
  definirConteudo({ ...conteudo, [campo]: valor })
}
```

Na função é passado o parâmetro evento onde contém o campo e valor que podem ser endereçados ao estado de conteúdo através da função “definirConteudo” como mostrado no trecho de código da função Mudar!

## Lesson 11 - Entradas do componente Formulário

Inputs, entradas, ingresso, aporte, вход e etc…

Faremos agora as entradas de dados para o formulário, espero que você esteja preparado para várias entradas de tipos de dados diferentes e valores diferenciados. Já passamos no mesmo processo quando estávamos produzindo a aba de formulário da SuperVitrine!

Comece criando a entrada para capa do conteúdo, trilha de vídeo, título do conteúdo, descrição e gêneros:

```jsx
// ./src/components/Formulario.jsx

<input 
  value={ conteudo.capa } onChange={ Mudar }
  type="url" name="capa" placeholder="Capa" required/>

<input
  value={ conteudo.trilha } onChange={ Mudar }
  type="url" name="trilha" placeholder="Trilha" required/>

<input
  value={ conteudo.titulo } onChange={ Mudar }
  type="text" name="titulo" placeholder="Título" required/>

<input
  value={ conteudo.descricao } onChange={ Mudar }
  type="text" name="descricao" placeholder="Descrição..." required/>

<input
  value={ conteudo.genero } onChange={ Mudar }
  type="text" name="genero" placeholder="Gênero" required/>
```

Veja que com exceção do capa e trilha que são URL, todas as demais entradas são do formato de texto, os valores seguem a propriedade que está em azul diferente entre si, mas o atributo onChange mantém a mesma função e todos são required, ou seja, obrigatórios!

Agora vai a continuação de entradas, porém agora todas no formato numérico:

```jsx
// ./src/components/Formulario.jsx

<input 
  value={ conteudo.ano } onChange={ Mudar }
  type="number" name="ano" placeholder="Ano (ex.: 2020)" required/>

<input
  value={ conteudo.duracao } onChange={ Mudar }
  type="number" name="duracao" placeholder="Duração (ex.: 90min)" required/>

<input
  value={ conteudo.faixa } onChange={ Mudar }
  type="number" name="faixa" placeholder="Faixa etária (ex.: +18)" required/>
```

A primeira entrada numérica que deve ser programada é para o ano de produção ou lançamento do conteúdo, às vezes séries podem começar a produção em um ano e finalizar em um ano diferente da produção.

Programe também o valor da duração, coloque de preferência em minutos para ser um padrão entre o conteúdo escolhido, funciona para todos os casos, exemplo curta e longa metragem!

E a última entrada numérica sendo a categoria de idade, que pode ser dividida de acordo com o país, no caso do brasil temos livre para todos os públicos, 10 anos, 14 anos, 16 anos e acima de 18 anos.

```jsx
// ./src/components/Formulario.jsx

<input type="submit" value="Enviar" />
```

E para que o formulário seja enviado, adicione no final das entradas o botão de envio usando o elemento **< input>** com o atributo type de submit.

Encerrada a adição de elementos inputs no componente de Formulário!

## Lesson 12 - Enviando dados pelo Axios

Com as entradas e os estados programados, podemos fazer o envio do formulário!

Vamos começar criando uma função apenas para fazer a requisição ao servidor com todos os dados no corpo, assim o servidor conseguirá receber no formato ideal e fazer o processo para salvar no banco de dados do MongoDB através do serviço Atlas.

Comece criando o arquivo “SalvarConteudo.js” na pasta functions e importe o axios:

```js
// ./src/functions/SalvarConteudo.js

import axios from "axios"
```

E agora vem o processo de programar a função “SalvarConteudo”, adicione o parâmetro chamado conteúdo, e para este caso precisamos receber um objeto para conter todas as informações necessárias.

Faça a exportação da função:

```js
// ./src/functions/SalvarConteudo.js

export default function SalvarConteudo(conteudo) {
  return /.../
}
```

A função deve retornar uma requisição usando o Axios!

O axios recebe um objeto como parâmetro contendo o método da requisição POST, o endereço de URL de onde será conectado e por fim o corpo da requisição com os seguintes dados:

```js
// ./src/functions/SalvarConteudo.js

export default function SalvarConteudo(conteudo) {
  return axios({
          method: "POST",
          url: "http://localhost:4000/conteudo",
          data: {
            capa: conteudo.capa,
            trilha: conteudo.trilha,
            titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            genero: conteudo.genero,
            ano: parseInt(conteudo.ano),
            duracao: parseInt(conteudo.duracao),
            faixa: parseInt(conteudo.faixa)
          }
        })
}
```

Dentro de data passe o conteúdo para: Capa, Trilha, Título, Descrição, Gênero, Ano, Duração e Faixa. Como mostrado acima para as propriedades numéricas, use a função ParseINT para converter o que for um formato diferente para número inteiro.

## Lesson 13 - Preenchendo formulário

Vamos à função de envio!

No componente Formulário faça a importação da função “SalvarConteúdo” que produzimos dentro do diretório functions:

```jsx
// ./src/components/Formulario.jsx

import SalvarConteudo from "../functions/SalvarConteudo"
```

E dentro do componente formulário crie uma função com o nome de Enviar passando como parâmetro o evento que terá as ações de funcionamento do formulário, onde bloquearemos a atualização padrão usando o comando **"preventDefault"**

Com a função de definição do estado faça os dados voltarem ao estado inicial passando o objeto “ConteudoInicial” como valor do estado.

Antes faça o uso do comando **"SalvarConteudo"** passando o estado conteúdo como valores do corpo da requisição:

```jsx
// ./src/components/Formulario.jsx

function Enviar(evento) {
  SalvarConteudo(conteudo)

  evento.preventDefault()
  definirConteudo(ConteudoInicial)
}
```

Com a estrutura Then…Catch podemos certificar se houve êxito ou falha no momento de fazer a requisição com o servidor. Um ponto importante é que o servidor esteja ligado no momento que for fazer a requisição, caso contrário é passível de cair no Catch por falha na conexão:

```jsx
// ./src/components/Formulario.jsx

function Enviar(evento) {
  SalvarConteudo(conteudo)
    .then(function(resposta) {
      if (resposta.status === 201)
        alert("Conteúdo enviado com sucesso!")
      else
        console.log(resposta)
    })
    .catch(function(erro) {
      console.log(erro)
    })

  evento.preventDefault()
  definirConteudo(ConteudoInicial)
}
```

Se houver uma resposta use a estrutura de decisão IF para certificar se o estado é o código 201, também conhecido pela mensagem “Created” o que indica que o conteúdo foi enviado e salvo com sucesso pela parte do servidor!

E só falta mostrar o formulário na página do Painel!

## Lesson 14 - Finalizando a página Painel

A few moments later…

Depois de um tempo voltamos a página do painel para adicionar os componentes que produzimos nas últimas lessons, e veremos como sairá o resultado então, esperamos que esteja tudo certinho para funcionar de primeira!

Faça a importação dos pacotes:

```jsx
// ./src/pages/Painel.jsx

import Principal from "../components/Principal"
import Formulario from "../components/Formulario"
```

Com a importação do componente Principal e Formulário faça a adição para dentro dos elementos retornados. O elemento Principal deve receber os atributos de imagem e tamanho e dentro deve conter o formulário:

```jsx
// ./src/pages/Painel.jsx

export default function Painel() {
  return (
    <Principal fundo="/fundo.jpg" tamanho="480px"> 
      <Formulario />
    </Principal>
  )
}
```

A programação da página do painel está finalizada!