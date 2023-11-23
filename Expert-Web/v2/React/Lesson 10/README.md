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