# Catalogando Produtos


## **Lesson 01**

Chegamos na última etapa da construção do SuperVitrine!

Estamos agora para finalizar, esta se trata da última unit onde finalizamos a aplicação conectando a Interface do Front-end feita no React com o Servidor do back-end. Será uma tarefa longa de bastante ajustes e alterações.

Você aprenderá a utilizar o pacote do Axios para fazer requisições e no final nos despedimos criando a página de catálogo para cadastrar novos produtos no banco de dados.

Então bora programar!

## **Lesson 02 - Catalogar o produto**

💡 Criaremos a seguir uma sequência de novas funções!

Crie um arquivo chamado "RequisicaoServidor.js" dentro da pasta functions, o próprio nome do arquivo representa bem o que devemos programar a seguir, faremos uma sequência de funções para fazer pedidos ao servidor.

Portanto é importante deixar o servidor em funcionamento enquanto programamos as linhas de códigos no React, assim simultaneamente será feito as requisições e obtido os resultados.

Para realizar as requisições ao servidor vai ser usado o pacote Axios:

```bash
npm install axios --save
```

Poderia ser usado outro pacote para fazer a requisição ou até o comando Fetch próprio e nativo do Javascript porém nenhum oferece a credibilidade em segurança e as funcionalidades de uso como o Axios. É um pacote que a comunidade JavaScript em geral usa em consenso.

E para fazer o uso do Axios é importante importá-lo:

```js
/* src/functions/RequisicaoServidor.js */

import axios from "axios"
```

Depois de importado o pacote do axios, vamos para a primeira função:

Faça a criação da função "CatalogarProduto" com o parâmetro produto, veja que no trecho de código abaixo não é necessário importar a função nesse primeiro momento, até porque teremos várias a seguir.

Na função de catalogar o produto faça o retorno do método axios de defina em um objeto como parâmetro qual vai ser o método, endereço e os dados que vão ser enviado no corpo da requisição:

```js
/* src/functions/RequisicaoServidor.js */

function CatalogarProduto(produto) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/catalogar",
    data: {
      codigo: produto.codigo,
      marca: produto.marca,
      modelo: produto.modelo,
      preco: produto.preco,
      descricao: produto.descricao,
      imagens: produto.imagens,
      promocao: produto.promocao 
    }
  })
}
```

Para o campo "data" passe as informações que são exigidas no esquema, aqui vai a sequência para ser lembrado: Código, Marca, Modelo, Preço, Descrição, Imagens e Promoção. Todas essas informações devem ser passadas através do parâmetro da função nomeado como "produto"!

O método que será empregado nessa requisição é o POST seguido do endereço da rota do servidor, que você pode conferir abrindo a programação. Caso tenha dúvida o endereço está abaixo:

**http://localhost:3000/catalogar**

## **Lesson 03 - Obter produtos**

A parte mais longa já passou!

📜 Agora vem a sequência das funções mais simples, se por uma lado a programação do servidor é longa e maçante, precisamos nos atentar em cada mínimo detalhes dos dados e se importar como vão ser tratados ao longo do caminho, na programação da interface no React tudo é rápido e simples.

A próxima função que deverá ser feita é a de obter produtos, nesse caso não terá nenhuma restrição, serão obtidos TODOS os produtos da base de dados. Só tome cuidado para não armazenar informações muito longas como link e títulos exorbitantes em quantidade de carácter.

Declare a função intitulada de “ObterProdutos”:

```js
/* src/functions/RequisicaoServidor.js */

function ObterProdutos() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/produtos"
  })
}
```

Veja que está sendo retornado o método do axios e em seguida passado o objeto como parâmetros do método e endereço:

Método para recebimento de dados sempre será GET e o endereço para obter todos os produtos:

**http://localhost:4000/produtos**

Cuidado para não se confundir no plural da palavra produto, isso pode trazer um mau funcionamento para a aplicação!

## **Lesson 04 - Obter produto pelo código**

Mais uma função magnífica!

📜 A próxima função que começaremos a programar será a função para obter um único produto com base no seu código. Como deve imaginar o código é um parâmetro que vai ser passado no momento da execução, assim fica mais fácil identificar qual produto vai ser procurado na base de dados do MongoDB.

Declare a função com o nome de “ObterProdutoCodigo” e passe código como parâmetro:

```js
/* src/functions/RequisicaoServidor.js */

function ObterProdutoCodigo(codigo) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/produt/${codigo}`
  })
}
```

Como retorno da função passe o método do axios e configure o método para GET!

No endereço precisaremos ter uma parte fixa onde não terá mudanças e no final será seguido do código passado por parametrização da função. Use o símbolo de crase para escrever o texto e no final com a estrutura de cifrão e chaves podemos concatenar uma variável.

E o resultado para o endereço:

**http://localhost:4000/produto/${codigo}**

## **Lesson 05 - Obter promoções**

Bora encerrar a programação do arquivo “RequisicaoServidor”!

Para finalizar precisamos fazer a digitação da última função, no caso para obter apenas produtos que estão em promoção, construa a função com o nome de “ObterPromocao” e faça ela retornar o método do Axios, veremos agora o que deve ser passado como parâmetro:

```js
/* src/functions/RequisicaoServidor.js */

function ObterProdutoCodigo(codigo) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/produt/${codigo}`
  })
}
```

No método de retorno do axios, configure para ser enviado no método GET no endereço do servidor da “/promocao” assim será recebido em uma estrutura JSON todos os produtos que estão com a propriedade promoção true no banco de dados do MongoDB!

Finalizado as funções!

Agora vem a hora de exportar uma por uma função no final do código, fique atento a como deve ser feito:

```js
/* src/functions/RequisicaoServidor.js */
export {
  CatalogarProduto,
  ObterProdutos,
  ObterProdutoCodigo,
  ObterPromocao
}
```

Use o comando export do Javascript e em uma estrutura de objeto passe a lista das funções que você quer importar, comece pela “CatalogarProduto” e em seguida vai passando para “ObterProdutos”, “ObterProdutoCodigo” e para terminar “ObterPromocao”!

## **Lesson 06 - Ajustando a página Vitrine**

Agora que temos as funções de requisição ao servidor feita, vamos ajustar as páginas para conectar com as rotas!

Ao invés de usar os produtos de exemplo na página de vitrine, vamos pegar as informações de todos os produtos usando a função “ObterProdutos” programada no arquivo “RequisicaoServidor”. O funcionamento  será o mesmo perante a aplicação, porém ajustes deverão ser feitos!

Comece importando os hooks do React como o UseState e o UseEffect:

```jsx
/* src/pages/Vitrine.jsx */

import React, { useState, useEffect } from "react"
```

Você pode comentar a importação do “ProdutosExemplo” pois não iremos mais usar, e para que recebamos as informações de maneira correta, faça a importação da função “ObterProdutos” como mostrado:

```jsx
/* src/pages/Vitrine.jsx */

//import ProdutosExemplo from "../datas/ProdutosExemplo" 
import { ObterProdutos } from "../functions/RequisicaoServidor"
```

Depois, crie o estado para salvar os produtos recebido pela função:

```jsx
/* src/pages/Vitrine.jsx */

const [ produtos, definirProdutos ] = useState([])
```

O estado criado deve ter o nome de “produtos” e a função “definirProdutos”. Para o valor inicial do estado use uma lista vazia!

Agora faça a montagem do UseEffect usando a inicialização como mostrado abaixo:

```jsx
/* src/pages/Vitrine.jsx */

useEffect(function() { 
  //...
}, [])
```

Dentro da estrutura do UseEffect deve conter:

A função do “ObterProdutos” sendo executada e a estrutura Then e Catch em seguida para verificar o estágio de execução. Caso seja bem sucedida o comando then é chamado e uma resposta é retornada do servidor contendo os produtos:

```jsx
/* src/pages/Vitrine.jsx */

useEffect(function() { 
  ObterProdutos()
    .then(function(resposta) {
      if (resposta.status === 200)
        definirProdutos(resposta.data)
    })
    .catch(function(erro) {
      console.log(erro)
    })
}, [])
```

Agora, caso um erro ocorra no momento de fazer a requisição através do Axios, o comando Catch é acionado e o erro é mostrado no Terminal para que saibamos como proceder e solucionar a falha encontrada no momento da execução!

Nos elementos precisamos fazer uma pequena alteração, o componente principal só pode ser mostrado se houver produtos cadastrado no estado:

```jsx
/* src/pages/Vitrine.jsx */

{ produtos.length > 0 &&
  <Principal produtos={ produtos }/> 
}
```

## **Lesson 07 - Ajustando a página Produto**

Vamos fazer os ajustes da página de produto!

O que faremos é os mesmos passos que foi feito na página Vitrine, só que agora para a página “Produto.jsx”, os passos são os mesmos, só com uma pequena diferença no momento da requisição que deve ser passado o código do produto na função.

Faça a importação dos hooks UseState e UseEffect:

```jsx
/* src/pages/Produto.jsx */

import React, { useState, useEffect } from "react"
```

Depois de importado os hooks, comente a importação do ProdutosExemplo e faça o import da função “ObterProdutoCodigo” do arquivo “RequisicaoServidor”:

```jsx
/* src/pages/Produto.jsx */

//import ProdutosExemplo from "../datas/ProdutosExemplo" 
import { ObterProdutoCodigo } from "../functions/RequisicaoServidor"
```

A função vai retornar um único resultado de produto portanto devemos criar um estado com o nome de “produto” com sua função “definirProduto” e para o valor inicial do useState passe um objeto vazio:

```jsx
/* src/pages/Produto.jsx */

const [ produto, definirProduto ] = useState({})
```

Para o useEffect faça a obtenção do produto através do código na função “ObterProdutoCodigo”.

Com a estrutura Then faça o recebimento da resposta do servidor, em seguida verifique se o código retornado foi o 200, que significa que nenhum erro ocorreu e a requisição foi bem sucedida e então salve os dados da resposta no estado:

```jsx
/* src/pages/Produto.jsx */

useEffect(function() {
  ObterProdutoCodigo(codigo)
      .then(function(resposta) {
        if (resposta.status === 200)
          definirProduto(resposta.data)
      })
    .catch(function(erro) {
      console.log(erro)
    })
}, [])
```

Com a estrutura Catch, lide com um possível erro informando no Terminal através do comando console.log como mostrado no trecho de código acima.

Para que os produtos sejam mostrado, ajuste o Exibidor:

```jsx
/* src/pages/Produto.jsx */

<Exibidor produto={ produto }/>
```

Para esse caso o exibidor fará a verificação interna de se o produto é válido ou apenas uma informação vazia. Agora faça os testes e veja se a página Produto está funcionando corretamente sem os produtos de exemplo!

## **Lesson 08 - Ajustando a página Promoção**

Bora ajustar a página da promoção!

O passo a passo você já conhece, nessa altura já deve ter pego a prática em adaptar as páginas para o novo padrão ligando as funções de requisição do servidor. Faça a importação do UseState e do UseEffect:

```jsx
/* src/pages/Promocao.jsx */

import React, { useState, useEffect } from "react"
```

Em seguida comente a linha do produtos de exemplo e importe abaixo a função “ObterPromocao”:

```jsx
/* src/pages/Promocao.jsx */

//import ProdutosExemplo from "../datas/ProdutosExemplo" 
import { ObterPromocao } from "../functions/RequisicaoServidor"
```

Crie um estado chamado de “promocao” com a função “definirPromocao” e coloque o valor inicial sendo uma lista vazia do javascript:

```jsx
/* src/pages/Promocao.jsx */

const [ promocao, definirPromocao ] = useState([])
```

E agora monte a estrutura do UseEffect!

Dentro do useEffect execute a função para obter promoção e coloque a estrutura Then e Catch para assegurar a requisição feita:

```jsx
/* src/pages/Promocao.jsx */

useEffect(function() {
  ObterPromocao()
    .then(function(resposta) {
      if (resposta.status === 200)
        definirPromocao(resposta.data)
    })
    .catch(function(erro) {
      console.log(erro)
    })
}, [])
```

Quando bem sucedido a requisição a resposta será entregue na estrutura Then e uma verificação acontecerá no código de status, se o código for 200 é salvo os dados no estado. E se houver um erro a estrutura Catch será executada!

Para as promoções precisamos fazer uma verificação antes de serem renderizadas. Use a renderização condicional verificando se a quantidade de produtos em promoção é maior do que zero:

```jsx
/* src/pages/Promocao.jsx */

{ 
  promocao.length > 0 && promocao.map(function(produto, indice) { 
    if (produto.promocao == true)
      return <Exibidor key={ indice } produto={ produto }/> 
  })
}
```

Para que o mapeamento volte a funcionar substitua a lista do antigo “ProdutosExemplo” para a lista “Promocao”. Assim voltará a ser encontrado os produtos e os índices de repetições.

Agora veja se está tudo funcionando!

## **Lesson 09 - Ajustando a página Carrinho**

E o último ajuste em página!

Abra a página “Carrinho.jsx” e faça a importação dos hooks UseState e do UseEffect:

```jsx
/* src/pages/Carrinho.jsx */

import React, { useState, useEffect } from "react"
```

Comente ou exclua a importação dos produtos de exemplo e substitua pela função “ObterProdutos”:

```jsx
/* src/pages/Carrinho.jsx */

//import ProdutosExemplo from "../datas/ProdutosExemplo" 
import { ObterProdutos } from "../functions/RequisicaoServidor"
```

Declare dentro do página o estado dos produtos e uma função para definir o estado. Como valor inicial use uma lista vazia:

```jsx
/* src/pages/Carrinho.jsx */

const [ produtos, definirProdutos ] = useState([])
```

Com o estado criado, faça a construção do UseEffect!

Dentro faça a obtenção dos produtos assim como foi feito anteriormente na programação da página da vitrine, onde os produtos são carregados através da requisição no servidor e salvo no estado:

```jsx
/* src/pages/Carrinho.jsx */

useEffect(function() {
  ObterProdutos()
    .then(function(resposta) {
      if (resposta.status === 200)
        definirProdutos(resposta.data)
    })
    .catch(function(erro) {
      console.log(erro)
    })
}, [])
```

Faça alteração no carregamento do UseEffect para receber os produtos do carrinho. Na lista coloque o estado produto para que seja atualizado sempre que a requisição do servidor for feita:

```jsx
/* src/pages/Carrinho.jsx */

useEffect(function() {
  const resultado = ObterCarrinho()
  definirCarrinho(resultado)
}, [ produtos ])
```

No UseEffect para fazer o cálculo do valor total do carrinho, faça alterações pontuais para suportar os produtos que serão carregados pela requisição do servidor.

Altere a lista da estrutura de repetição “FOR” para o estado produtos, e em seguida adicione mais um estado de verificação e carregamento para o UseEffect, como mostra o código abaixo:

```jsx
/* src/pages/Carrinho.jsx */

useEffect(function() {
  var total = 0 
  carrinho.map(function(codigo) {
    for (const produto of produtos)
      if (produto.codigo == codigo)
        total += parseInt(produto.preco)
  })
  definirPreco(total)
}, [ produtos, carrinho ])
```

Para que os dados sejam mostrados dentro da tabela corretamente, use a renderização condicional e verifique a quantidade de produtos é maior do que zero, ou seja, testar se existem produtos na lista:

```jsx
/* src/pages/Carrinho.jsx */

{ produtos.length > 0 &&
  //...
}
```

Faça a alteração na estrutura de repetição “FOR” ao invés de usar o “ProdutosExemplo” troque para o estado “produtos” na lista:

```jsx
/* src/pages/Carrinho.jsx */

for (const produto of produtos)
```

E assim encerramos os ajustes. Partiremos agora para criação da página catalogar. Não se esqueça de verificar se a página do carrinho ainda está funcionando!

## **Lesson 10 - Criando página Catalogar**

Voltamos para a criação de páginas no React!

Crie um arquivo chamado "Catalogar.jsx" na pasta pages. A página catalogar vai ser basicamente um formulário em que os donos da plataforma da SuperVitrine podem acessar para fazer a adição de novos produtos.

Comece o arquivo importando o pacote do React e o hook UseState:

```jsx
/* src/pages/Catalogar.jsx */

import React, { useState } from "react"
```

Com os pacotes necessário importado, exporte a função principal e use um elemento vazio do React como base da página:

```jsx
/* src/pages/Catalogar.jsx */

export default function Catalogar() {
  return (
    <>
    </>
  )
}
```

A programação de estilo do formulário será o nosso próximo passo, será feito um componente para suportar todos os itens como caixa de entrada para digitar os dados do produto.

Fique antenado no próximo componente!

## **Lesson 11 - Componente formulário**

Para matar a saudade, crie um componente chamado “Formulario.jsx”!

O componente formulário vai ser básico, apenas para estilizar onde ficarão as entradas e para que tudo fique alinhado corretamente dentro de um retângulo. Caso não tivesse estilo ou alinhamento a página ficaria desorganizada e dificultaria a inserção dos dados.

Comece importando o pacote styled components:

```jsx
/* src/components/Formulario.jsx */

import styled from "styled-components"
```

Agora que temos o styled importado no componente podemos criar o modelo de estilo do formulário.

Declare um modelo intitulado de "Formulario" e no styled selecione o elemento "form". Nas propriedades de estilo coloque a cor de fundo para branco, adeque a exibição para ser flexível e alinhe a direção de colunas usando 16 pixels de vão entre os elementos:

```jsx
/* src/components/Formulario.jsx */

const Formulario = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0;
  overflow: hidden;
  padding: 32px;
`
```

Agora que foi criado o modelo de estilo do formulário podemos exportar para usar na página, então no final do código digite:

```jsx
/* src/components/Formulario.jsx */

export default Formulario
```

Lembre de que quanto queremos importar apenas uma única estrutura, existe a possibilidade de usar o comando “export default”.

Com o export default a importação ficaria da seguinte forma na página catalogar:

```jsx
/* src/pages/Catalogar.jsx */

import Formulario from "../components/Formulario"
```

Agora aqueles elementos de tag de abertura e fechamento que estavam vazias podem ser preenchidas com o modelo de estilo do componente formulário que foi criado:

```jsx
/* src/pages/Catalogar.jsx */

export default function Catalogar() {
  return <Formulario>
      
  </Formulario>
}
```

E assim já temos um pouco mais de estilo para a página que até o presente momento se encontrava vazia e sem nenhuma informação.

## **Lesson 12 - Estado do novo produto**

Para armazenar momentaneamente as informações e dados digitados pelos usuários ou pelo dono da aplicação, precisaremos de um estado para o produto inicial.

Dentro da pasta “datas” crie um arquivo chamado de “ProdutoInicial.js”, dentro será declarado um objeto para representar todos os dados iniciais que deverão ser incluído pelo usuário para cadastrar um novo produto no banco de dados do servidor:

```jsx
/* src/datas/ProdutoInicial.js */

const ProdutoInicial = {
  codigo: "",
  marca: "",
  modelo: "",
  preco: "",
  descricao: "",
  imagens: [
    "",
    "",
    "",
  ],
  promocao: false
}
```

Em seguida faça a exportação padrão da constante declarada:

```jsx
/* src/datas/ProdutoInicial.js */

export default ProdutoInicial
```

Na página catalogar use o comando import para resgatar os dados do produto inicial:

```jsx
/* src/pages/Catalogar.jsx */

import ProdutoInicial from "../datas/ProdutoInicial"
```

Agora que temos todos os dados definidos certinho podemos criar o estado chamado de produto. Só tome atenção em um detalhe, os dados de código, marca, modelo, preço, descrição, imagens e promoção precisam ter um tipo de dado inicial:

```jsx
/* src/pages/Catalogar.jsx */

const [ produto, definirProduto ] = useState(ProdutoInicial)
```

Somente assim podemos assegurar que as informações serão enviadas da forma correta para o servidor. E agora podemos partir para a programação das entradas!

## **Lesson 13 - Entradas do catálogo**

Se prepare, são nove entradas e um botão de envio que precisaremos programar!

Cada caixa de entrada contará com o seu funcionamento único e exclusivo. Em geral compartilharam os atributos de valor e alteração de dados onde podemos preencher com o estado ou a definição de estado.

Todas terão um tipo que pode se enquadrar com Texto, Número, Caixa de Seleção ou URL, o atributo nome será para identificar o que vai ser preenchido em tal campo, alguns terão o texto de exemplo e todos compartilham o required!

Comece fazendo a caixa de entrada de texto para digitar o código:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.codigo }
    onChange={ MudarTexto }
    type="text" name="codigo"
    placeholder="Código do produto" required />
//...
```

Também precisaremos da caixa de entrada de texto para a marca do produto:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.marca }
    onChange={ MudarTexto }
    type="text" name="marca"
    placeholder="Marca do produto" required />
//...
```

Uma generosa caixa de entrada para texto onde será digitado o modelo, título ou classificação mais específica do que se trata o produto:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.modelo }
    onChange={ MudarTexto }
    type="text" name="modelo"
    placeholder="Modelo do produto" required />
//...
```

Agora chegamos em uma caixa de entrada numérica!

A caixa de entrada numérica será para digitar o preço do produto, que pode ser colocado com centavos ou em um valor cheio para representar o real:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.preco }
    onChange={ MudarTexto }
    type="number" name="preco"
    placeholder="R$ 1.000,00" required />
//...
```

Voltando para os textos agora!

Criar uma caixa de entrada para grandes texto onde será aceito uma descrição geral do produto, contendo todas as informações que uma pessoa queira ler sobre:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.descricao }
    onChange={ MudarTexto }
    type="text" name="descricao"
    placeholder="Descrição do produto" required />
//...
```

Uma sequência de caixa de entradas para links!

Aqui abaixo vai um conjunto de caixas de entradas para inserir os links de imagens para compor o acervo de imagens para a visualização do produto. Aqui é a essência da venda, onde visualmente atrai os clientes para comprar o produto:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input 
    value={ produto.imagens[0] }
    onChange={ MudarImagem }
    type="url" name="imagens" id="0"
    placeholder="Imagem 1 do produto" required />
<input 
    value={ produto.imagens[1] }
    onChange={ MudarImagem }
    type="url" name="imagens" id="1"
    placeholder="Imagem 2 do produto" required />
<input 
    value={ produto.imagens[2] }
    onChange={ MudarImagem }
    type="url" name="imagens" id="2"
    placeholder="Imagem 3 do produto" required />
//...
```

Note que cada input tem o seu ID, isso é importante para diferenciar os inputs, caso contrário teríamos apenas uma imagem, outro ponto é no valor preenchido que deve conter o índice.

Vem aí um novo tipo de caixa de entrada, se trata de uma caixa de entrada de seleção onde há somente duas escolhas: selecionada ou não-selecionada!

Use o tipo de dado chamado de "Checkbox" ao invés de usar o atributo value troque por checked e não é necessário do placeholder, isso trocamos por um elemento de label que indica do que se trata a entrada:

```jsx
/* src/pages/Catalogar.jsx */

//...
<div>
  <label htmlFor="promocao"> Promoção? </label>
  <input
    checked={ produto.promocao }
    onChange={ MudarPromo }
    type="checkbox" name="promocao"
    id="promocao" />
</div>
//...
```

Veja que tanto o elemento input quanto o label devem estar dentro de uma divisão, isso indica que ficarão dispostos em um único elemento, facilitando a visualização e organização do formulário.

E para finalizar as entrada, temos um input do tipo submit para enviar todas essas informações digitadas para o banco de dados:

```jsx
/* src/pages/Catalogar.jsx */

//...
<input type="submit" value="Catalogar" />
//...
```

E encerramos a programação de entrada, o que precisamos é de apenas declarar as funções para armazenar de forma correta no estado e depois programar para enviar o formulário para o endereço catalogar do servidor!

## **Lesson 14 - Enviando o catálogo**

Bora enviar o catálogo!

Só que ainda não, temos algumas tarefas ainda. Para as entradas de texto podemos criar uma função chamada "MudarTexto" onde vai alterar as propriedades do estado, para a promoção que é um dado booleano precisa de uma função chamada "MudarPromo" onde é indicado se o valor deve ser true ou false.

E a última função seria para os endereços de imagens, por ser um conjunto a função deve funcionar de uma forma diferente, por isso teremos a função "MudarImagem". Então bora colocar em prática!

Comece programando a função para alterar os valores de texto do estado produto:

```jsx
/* src/pages/Catalogar.jsx */

function MudarTexto(evento) {
  const valor = evento.target.value 
  const campo = evento.target.name 
  definirProduto({ ...produto, [campo]: valor })
}
```

Para mudar o texto precisamos receber o valor e o campo, em seguida deve ser alterado no estado usando a função “definirProduto” como mostrado no trecho de código acima!

O mesmo deve ser feito para a função “MudarPromo”:

```jsx
/* src/pages/Catalogar.jsx */

function MudarPromo(evento) {
  const valor = evento.target.checked 
  definirProduto( { ...produto, "promocao": valor } )
}
```

A base de funcionamento é a mesma para mudar um campo de texto, porém só precisamos do valor já que o campo que vai ser alterado é fixo.

E para mudar a imagem, precisamos obter qual é o índice, obter o link de imagem e em seguida fazer a alteração do item na lista usando o índice obtido:

```jsx
/* src/pages/Catalogar.jsx */

function MudarImagem(evento) {
  const indice = evento.target.id 
  const imagens = produto.imagens 
  imagens[indice] = evento.target.value 
  definirProduto({ ...produto, "imagens": imagens })
}
```

Não se esqueça de no final colocar para "definirProduto" usando aquele esquema de alterar um único resultado de dentro do objeto.

Agora a próxima etapa é importar a função "CatalogarProduto" de dentro das funções de fazer requisição ao servidor e enviar os dados preenchido no formulário para o servidor a partir do pacote Axios, comece importando:

```jsx
/* src/pages/Catalogar.jsx */

import { CatalogarProduto } from "../functions/RequisicaoServidor"
```

Após importar programe a função Catalogar:

```jsx
/* src/pages/Catalogar.jsx */

function Catalogar(evento) {
  evento.preventDefault()
  CatalogarProduto(produto)
  definirProduto(ProdutoInicial)
}
```

A função catalogar servirá para barra o funcionamento de recarga da página do React, em seguida enviar o estado do formulário para o servidor e resetar os parâmetros digitados.

Para que a função aconteça quando apertado o botão de Submit, faça inclusão através do componente < Formulario> como mostra o trecho de código:

```jsx
/* src/Rotas.jsx */

//...
import Catalogar from "./pages/Catalogar"
//...
<Route path="/catalogar" element={ <Catalogar/> }/>
```

Adicione a rota na aplicação, como mostrado acima!

```jsx
/* src/pages/Catalogar.jsx */

<Formulario onSubmit={ Catalogar }>
```

E agora aproveite a aplicação, publique novos produtos!

## **Lesson 15 - Finalização**

E encerramos a aplicação SuperVitrine, espero que você tenha gostado e aprendido muito com uma aplicação tão diferenciada e fora do comum. Não é todos os dias que você programa do zero uma vitrine virtual usando a interface em React, o servidor com Express com o banco de dados em MongoDB.

Sem dúvidas você saiu uma pessoa mais experiente depois desse projeto, mais próximo do final você vai aprender como hospedar essas aplicações na internet, e terá como montar um grande portfólio com as inovações e ideias desenvolvidas através de códigos.

Parabéns por ter chegado até aqui e bora para o próximo desafio!