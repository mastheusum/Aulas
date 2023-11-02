# SuperVitrine: Exibidor de Promoções

## **Lesson 01 -  Novo desafio!**

Partindo agora para a segunda etapa!

Continuaremos agora no projeto da SuperVitrine, temos ainda muita programação pela frente, você verá como fazer a página de exibição do produto e também a construção de promoções individuais para cada produto catalogado.

Iniciaremos construindo novas páginas e vai ser seguido construindo componentes novos para completar a nova necessidade de layout. Foque bastante no funcionamento e estilização, pois usaremos bastante nesse novo desafio.

Espero que esteja empenhado e bora programar!

## **Lesson 02 - Página Produto**

Primeiro desafio estabelecido, fazer a **página do produto**!

Começando pela parte mais simples, vai ser preciso de um novo arquivo dentro do diretório pages com o nome de **“Produto.jsx”**. Este arquivo vai conter todos os componentes para mostrar todos os **detalhes**, **dados** e **imagens** do produto selecionado pelo usuário.

Depois de criado, faça a importação do **React** e reutilize o componente **Navegação** usado anteriormente na página **Vitrine**:

```jsx
/* src/pages/Vitrine.jsx */
import React from "react"

import Navegacao from "../components/Navegacao"
```

Depois de fazer as devidas **importações** dos pacotes necessários, construa a **função** de componente para ser **exportada** e retorne os elementos do componente de navegação.

Não se esqueça de colocar os links dentro do elemento **< Navegacao >** e também de colocar o **atributo** título para indicar qual **texto** vai ser mostrado em **destaque** no topo da página aos usuários:

```jsx
/* src/pages/Produto.jsx */
export default function Produto() {
  return <>
    <Navegacao titulo="VITRINE">
      <a href="/"> Início </a>
      <a href="/promocao"> Promoção </a>
      <a href="/carrinho"> Carrinho </a>
    </Navegacao>
    /.../
  </>
}
```

Faça como mostrado no **exemplo** do código acima, **preencha** o comando de retorno da função do componente com **elementos** para serem mostrados no topo da página.

Algumas lessons a frente será feito a inclusão da página nas rotas para ser **acessada**, mas por enquanto mantenha o **Terminal** aberto e realize os testes!

## **Lesson 03 - Componente Exibidor**

A página de **produtos** até o momento não tem nenhum tipo de **informativo** ou **imagem** sobre o produto que o usuário está **procurando**, portanto devemos fazer um **exibidor**!

O **Exibidor** será o componente principal da página produto, através dele será mostrado as **três imagens** em destaque e grande tamanho na tela, dados básicos que foram colocados no **fornecimento** de produtos como **marca**, **modelo**, **descrição**.

Também vai contar com um botão para adicionar tal produto ao **carrinho** de compras! Comece importando os pacotes do **React** e **Styled Components** no arquivo **“Exibidor.jsx”**:

```jsx
/* src/components/Exibidor.jsx */
import React from 'react';
import styled from 'styled-components';

export default function Exibidor() {
  return (
    <>
      
    </>
  )
}
```

Com os **componentes** importado corretamente:

Devemos construir antes de tudo os modelos de **estilos**, comece construindo o modelo **principal** onde será uma **janela** que comporta os elementos de **imagens** e **texto** de dados sobre o produto.

Declare uma constante chamada **Modelo** com o fundo de cor branca, modo de exibição **flexível**, margem vertical de **32 pixels** e sem transbordar os elementos:

```jsx
/* src/components/Exibidor.jsx */
const Modelo = styled.div`
  background: #fff;
  display: flex;
  margin: 32px 0;
  overflow: hidden;
`
```

Com o modelo principal declarado, faça a declaração dos modelos de **imagens** e de **dados**.

No modelo de imagens terá um espaço máximo de comprimento para mostrar alinhadas na **horizontal**, então coloque as propriedades de estilo display com **flex** e o **overflow** para transbordar o conteúdo no eixo X como mostrado abaixo:

```jsx
/* src/components/Exibidor.jsx */
const ModeloImagens = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 480px;
`

const ModeloDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
```

No **modelo** de **dados** é preciso alinhar as informações em linhas usando o flex **direction**, adicionar um espaçamento de vão para cada texto inserido com a propriedade **gap** em 16 pixels e espaçamento interno de 16 pixels para a janela na direita.

E com os **modelos** criados, passamos para a função do **componente**, onde é necessário declarar os elementos dos Modelos que foram criados anteriormente.

```jsx
/* src/components/Exibidor.jsx */
export default function Exibidor() {
  return (
    <Modelo>
      
    </Modelo>
  )
}
```

Como o **retorno** da função de componente, faça a utilização do **Modelo** principal. Assim a base e início do componente **Exibidor** está feito!

## **Lesson 04 - Ajustando o Exibidor**

O componente **Exibidor** ainda não está finalizado!

Existem ainda mais detalhes a serem desenvolvidos e programados para que sirva idealmente como um componente para a **exibição** de produtos. Começando pelas **imagens** que devem ser colocadas e dispostas umas ao lado das outras.

Coloque três elementos de imagens para dentro do **ModeloImagens** e ajuste os atributos de **recurso**, **texto alternativo** e **altura** em pixels:

```jsx
/* src/components/Exibidor.jsx */
<ModeloImagens>
  <img  
    src="https://picsum.photos/800/800?random=1" 
    alt="Foto do Produto" 
    height={ 450 }/>
  <img
    src="https://picsum.photos/800/800?random=2" 
    alt="Foto do Produto"
    height={ 450 }/>
  <img
    src="https://picsum.photos/800/800?random=3"
    alt="Foto do Produto"
    height={ 450 }/>
</ModeloImagens>
```

Quando os detalhes da **imagem** estiverem colocados, está encerrado a programação de elementos do modelo de **imagens**, segundo agora para o modelo de **dados**:

No modelo de dados coloque elemento de divisões contendo o texto de qual dado deve ser colocado, na sequência de exemplo sendo: **Marca**, **Modelo**, **Preço** e **Descrição**:

```jsx
/* src/components/Exibidor.jsx */
<ModeloDados>
  <div> Marca </div>
  <div> Modelo </div>
  <div> R$ 1,000.00 </div>
  <div>
    Dolorum amet earum deleniti tenetur repellendus
  </div>
  <button> Adicionar ao Carrinho </button>
</ModeloDados>
```

E como último **elemento** coloque um botão com o texto de **“Adicionar ao Carrinho”** não é necessário nesse primeiro momento programar a função de **funcionamento**, isso faremos em uma unit futura no curso!

Agora só falta **colocar** o **componente** na página!

## **Lesson 05 - Configurando página**

Chegou o momento de inserir o componente **Exibidor** na página Produto!

O componente **Exibidor** deve ser colocado de forma que os próximos passos serão para **adaptar** a qualquer produto escolhido e selecionado pelo usuário, portanto faremos as **configurações** de um produto fixo para início.

Comece encontrando o componente no diretório e importe para a **página Produto**.

Depois de importado:

Assim como o **exibidor** deve ser importado como componente devemos **importar** também o arquivo produtos de exemplos para fornecer os **dados** e **informações** de produtos. Use o comando import do javascript e localize a pasta datas.

Os dados fornecidos pelo arquivo **“ProdutosExemplo.js”** será usado para passar ao **Exibidor**, como nesse primeiro momento usaremos um **dado** fixo, passe o primeiro elemento da lista.

No **atributo** produto coloque o seguinte comando para o **Exibidor**:

```jsx
/* src/pages/Produto.jsx */
/.../
<Exibidor produto={ ProdutosExemplo[0] }/>
/.../
```

Os próximos passos são para **configurar** qual produto deve ser mostrado na página do produto através do **código atribuído** e a adição da página ao arquivo **rotas** do React.

## **Lesson 06 - Propriedades do Exibidor**

O componente **Exibidor** precisa receber os dados via props!

Agora que passamos o **primeiro produto** da lista de produtos de **exemplos**, devemos mostrar as informações e imagens recebidas via **props** no exibidor. Comece colocando como **parâmetro** da função no componente **Exibidor**:

```jsx
/* src/components/Exibidor.jsx */
/.../
export default function Exibidor(props) {
/.../
```

**Lembrando** que é extremamente importante colocar o **parâmetro props**, caso contrário todas as alterações a seguir não terão efeito e é possível de aparecer alertas em página **indicando** o mau funcionamento!

Para as imagens do exibidor troque o atributo **source** pela propriedades de **imagens**, não se esqueça de colocar o **índice** de identificação da lista, pois neste caso temos três imagens como mostra o caso abaixo:

```jsx
/* src/components/Exibidor.jsx */
/.../
<ModeloImagens>
  <img  
    src={ props.produto.imagens[0] } 
    alt="Foto do Produto" 
    height={ 450 }/>
  <img
    src={ props.produto.imagens[1] }
    alt="Foto do Produto"
    height={ 450 }/>
  <img
    src={ props.produto.imagens[2] }
    alt="Foto do Produto"
    height={ 450 }/>
</ModeloImagens>
/.../
```

Os demais **atributos** da **imagem** não devem ser alterados!

Para os elementos dentro do elemento **“ModeloDados”** devem ser substituídos os **textos fixos** pelas propriedades indicadas. Não se esqueça de colocar **props.produto** para indicar qual valor será mostrado ao usuário.

Como mostrado abaixo, você pode **concatenar** símbolos como no **preço** do produto que é preciso ter a **unidade monetária**:

```jsx
/* src/components/Exibidor.jsx */
<ModeloDados>
  <div> { props.produto.marca } </div>
  <div> { props.produto.modelo } </div>
  <div> R$ { props.produto.preco },00 </div>
  <div>
    { props.produto.descricao }
  </div>
  <button> Adicionar ao Carrinho </button>
</ModeloDados>
```

E assim você tem finalizado as **alterações** para receber as propriedades no componente **Exibidor**, o próximo passo fica para receber o código através do **endereço URL** da página e com o código filtrar qual o **produto** deve ser mostrado!


## **Lesson 07 -  Obtendo o código**

Agora iremos identificar os produtos pelos códigos!

Cada produto possui a sua identificação pelo código digitado no arquivo “ProdutosExemplo.js”, se trata da primeira propriedade que foi inserida na estrutura do objeto. Um ponto importante a ser alertado é que o código deve ser único para o produto.

Caso tenha produtos que compartilham o mesmo código, problemas irão acontecer na aplicação o seu funcionamento será comprometido, portanto verifique o arquivo e certifique-se que nenhum produto contém código duplicado!

Sabendo destes pontos, faça a importação do hook “useParams” do pacote React Router DOM:

```jsx
/* src/pages/Produto.jsx */
import { useParams } from "react-router-dom"
```

O comando “useParams” serve para receber os parâmetros digitados na barra de endereço, e só conseguimos obter de fato quando executado é extraído a sua propriedade como identificada na rota.

Abaixo vai um exemplo de como o comando deve ser usado corretamente, aqui usamos a técnica de desconstrutor do Javascript para fazer a execução e extração da propriedade indicada:

```jsx
/* src/pages/Produto.jsx */
const { codigo } = useParams()
```

A constante chamada de “codigo” recebe o valor da função hook “useParams”. Caso não tenha nenhum parâmetro a página não vai ser carregada e será mostrado uma página em branco como padrão do React.

A URL deve ser muito bem declarada para não haver erros na digitação e/ou na navegação do cliente, para ter melhor eficiência use a URL como mostrada no próximo código, veja que o “/produto/” se trata de algo fixo e o que está em vermelho a seguir é o código digitado:

```
URL: http://localhost:3000/produto/1234

URL Código: 1234
```

E assim estão encerradas as alterações de parametrização da página Produto e mais especificamente do arquivo “Produto.js” até o momento!

A seguir, faremos a adição de uma nova rota para o arquivo “Rotas.jsx” precisamos inicialmente fazer a importação da página e adicionar um novo elemento **< Route/>.**

Para a importação o endereço que está localizado é diferente da raiz SRC portanto leve isso em consideração no momento de digitar o endereço, guie usando o seguinte trecho:


```jsx
/* src/Rotas.jsx */
import Produto from "./pages/Produto" 
```

Depois de importado faça a digitação do Route!

No elemento retornados no componente Rotas faça a inclusão do elemento Route passando o atributo path com o termo de parâmetro e também o elemento de página que será renderizado.

Para indicar siga os passos de como declarar o elemento Route corretamente:

```jsx
/* src/Rotas.jsx */
<Route path="/produto/:codigo" element={ <Produto/> }/>
```

E assim está feita a etapa de obtenção do código. Porém ainda tem a programação para encontrar o produto através do código digitado no parâmetro de URL!

## **Lesson 08 - Encontrando o Produto**

Como podemos encontrar o produto através do código?

É importante lembrar que o catálogo de produtos que foi salvo no arquivo “ProdutosExemplo.js” é baseado na estrutura de lista de objetos. Portanto, teríamos que encontrar uma forma de acessar item por item na lista analisando a propriedade código.

Para a nossa sorte o Javascript possui um comando específico para este caso, o que vai simplificar demais a programação e economizar tempo e esforço de programação!

Aqui vai um exemplo de como pode ser feito a procura de carros através da propriedade de marca:

```jsx
/* Exemplo */
const carros = [

    { marca: "BWM", modelo: "320i" },

    { marca: "Audi", modelo: "a4" },

    { marca: "Mercedes", modelo: "c180" }

]

const resultado = carros.find((carro) => carro.marca == "Audi")

console.log(resultado)
```
```
/* resultado */
{ marca: "Audi", modelo: "a4" }
```

Veja que com o comando “find” podemos fazer uma verificação item por item na lista chamada de carros e é passado a condição para a função. No exemplo é procurado na lista de carros os que contenham a marca Audi.

O mesmo pode ser feito para os produtos!

Porém usando a mesma lógica é preciso alterar a propriedade procurada, nesse caso do produto precisamos fazer a condição voltada ao código recebido pelo parâmetro. O código ficaria da seguinte forma:

```jsx
/* src/pages/Produto.jsx */

<Exibidor produto={
  ProdutosExemplo.find((produto) => produto.codigo == codigo)
}/>
```

Na lista “ProdutosExemplo” seria atribuído o método “find” e em seguida a cada produto seria verificado se o código bate com o digitado pelo usuário no parâmetro de URL.

## **Lesson 09 - Produto não encontrado!**

O código pode ser digitado na barra de endereço por qualquer pessoa, porém isso não significa que terá o produto correspondente.

O que deve ser feito é verificar se a propriedade que foi passado como parâmetro props para o componente é um objeto válido com resultados dentro. Isso pode ser feito com uma verificação simples usando alguns comandos JavaScript.

Com o comando Object.keys é possível obter as propriedades do objeto, usando o método length é retornada a quantidade de propriedades e assim pode ser feito a verificação. Caso a quantidade de propriedades contidas dentro de um objeto seja maior do que zero isso demonstra que temos o produto:

```jsx
/* src/components/Exibidor.jsx */

export default function Exibidor(props) {
  return Object.keys(props.produto).length > 0 ?
    // Produto encontrado
    :
    // Produto não encontrado
}
```

A programação para quando o produto for válido ou encontrado já foi feita anteriormente e vai no primeiro campo da verificação como mostrado acima.

E para quando o produto não for válido precisamos programar usando Modelo e apresentar um texto alertando o usuário de que o código digitado não corresponde com nenhum produto do catálogo, você pode usar a base do código abaixo:

```jsx
/* src/components/Exibidor.jsx */
<Modelo>
  <ModeloDados> Produto não encontrado! </ModeloDados> 
</Modelo>
```

Lembrando que apenas será mostrado o modelo com a mensagem “Produto não encontrado!” se o código digitado pelo usuário não constar na base dados do arquivo “ProdutosExemplo.js”!

## **Lesson 10 - Acessando o Produto**

Até o momento não tem uma maneira na aplicação de acessar a página de produto através da vitrine, o que deve ser feito em diante é conectar os produtos catalogados para o exibidor.

A conexão entre a página Vitrine e Produto será feito no componente Principal usando o elemento <a> do HTML. Vai ser passado para acessar o endereço fixo “/produto/” concatenado com o código do produto, como está mostrado abaixo: 

```jsx
/*  src/components/Principal.jsx */

return <Produto key={ indice }>
  <a href={ "/produto/" + produto.codigo }>
    /.../
  </a>
</Produto>
```

Não se esqueça que o link da página deve ser inserido no atributo href, para que seja usado a concatenação digite entre chaves passando as informações corretas como mostrado no trecho de código acima.

E agora passe para os testes e verifique se os acessos a página produto podem ser feitos!

## **Lesson 11 - Página Promoção**

O próximo desafio passado ainda para este conteúdo é de desenvolver uma nova página de produtos que estão em promoção, assim facilitando a vida do usuário em filtrar quais produtos podem ser comprados abaixo do preço convencional!

Comece criando um novo arquivo dentro do diretório pages com o nome de “Promocao.jsx”. Esse arquivo terá todos os componentes responsáveis por mostrar os produtos em promoção, e podemos aproveitar o componente Navegação e Exibidor, como também o ProdutosExemplo para fornecer os dados:

```jsx
/*  src/pages/Promocao.jsx */
import React from "react"

import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"

import ProdutosExemplo from "../datas/ProdutosExemplo"
```

Depois de feito a importação dos pacotes necessários:

Faça a exportação padrão da função do componente e retorne o componente Navegação como elemento, colocando os links de acesso que levam a outras páginas e o título no atributo do elemento, como mostrado no código:

```jsx
/*  src/pages/Promocao.jsx */
export default function Promocao() {
  return <>
    <Navegacao titulo="VITRINE">
      <a href="/"> Início </a>
      <a href="/promocao"> Promoção </a>
      <a href="/carrinho"> Carrinho </a>
    </Navegacao>
  </>
}
```

Você deve ter reparado que o componente não é feito somente de Navegação, ainda precisamos colocar os componente Exibidores para mostrar os produtos, porém ainda não temos definido quais produtos estão em promoção.

Faremos a seguir a configuração!

## **Lesson 12 - Configurando as promoções**

Perfeito, agora como serão definidos os produtos em promoção?

O produto estar em promoção deve ser uma propriedade salva na lista de objeto do arquivo “ProdutosExemplo.js”, é preciso ter um campo específico para indicar se determinado produto está com desconto no preço ou não.

A maneira mais simples de atribuir tal propriedade é criar um campo booleano, assim salvando True para o produto em promoção e False para o preço cheio, como mostrado de exemplo:

```js
/* Exemplo */
promocao: false
```

Essa propriedade deve estar presente em todos os objetos:

Portanto, abra o diretório datas e em seguida ajuste os produtos salvos no arquivo “ProdutosExemplo.js” para comportar o campo promoção no final dos dados:

```js
/* src/datas/ProdutosExemplo.js */
{
  codigo: "hmcl",
  marca: "Vitrine",
  modelo: "Calça Masculina",
  preco: 250.00,
  descricao: "Ornare tristique felis..",
  imagens: [
      "https://i.ibb.co/7bvP7Gh/homem-calca-1.jpg",
      "https://i.ibb.co/3pCC4DM/homem-calca-2.jpg",
      "https://i.ibb.co/K2tTYSg/homem-calca-3.jpg",
  ],
  promocao: false,
},

/...
```

Para o exemplo acima da calça masculina, está sem promoção, é possível visualizar através da propriedade declarada. Agora faça o mesmo para cada produto escolhido a mão na sua lista, tente ter no mínimo 4 produtos em promoção!

## **Lesson 13 - Mostrando promoções**

Retornando ao arquivo “Promocao.jsx”.

Para mostrar todos os produtos que estão em promoção no esquema de Exibidor, ou seja, contendo as imagens e dados, vai ser preciso criar uma repetição usando o mapeamento do Javascript para retornar os elementos.

Comece usando a lista “ProdutosExemplo” e faça o uso do método map. A função vai conter os parâmetros do produto e o índice de repetição:

```jsx
/* ./src/pages/Promocao.jsx */
.../
ProdutosExemplo.map(function(produto, indice) {
  /.../
})
/...
```

O parâmetro produto vai ser útil para obtenção de todos os dados dos produtos, inclusive com a propriedade promoção que faremos a decisão se será mostrado ao usuário e por fim, o índice que indica a unicidade da repetição.

Abaixo está o exemplo de como deve ser feito a filtragem dos produtos que estão em promoção, com o uso da estrutura de decisão IF é possível verificar se a promoção está ativa no produto da repetição:

```jsx
/* ./src/pages/Promocao.jsx */
.../
ProdutosExemplo.map(function(produto, indice) {
  if (produto.promocao == true)
    return <Exibidor 
      key={ indice }
      produto={ produto }/>
})
/...
```

Quando a estrutura de decisão for verdadeira será retornado o elemento do componente Exibidor contendo a chave de índice e o produto de promoção!

Assim está encerrada a programação da página de promoção que graças aos componentes criados anteriormente conseguimos encurtar o tempo de desenvolvimento e programação. Agora partiremos para a inclusão da página nas rotas.

Abra o arquivo “Rotas.jsx” e faça a importação da página Promoção:

```jsx
/* ./src/Rotas.jsx */
import Promocao from "./pages/Promocao" 
```

Depois de importado a página de promoção:

Use o elemento Route para cadastrar a nova página desenvolvida, coloque o endereço de acesso para a página no atributo path. Que para esse caso será usado o endereço “/promocao” e em seguida o elemento de página que será mostrado:

```jsx
/* src/Rotas.jsx */

<Route path="/promocao" element={ <Promocao/> }/>

```

E assim está encerrada a programação da página de promoção, acesso o endereço e verifique se os produtos que foram colocados em promoção estão aparecendo corretamente!

## **Lesson 14 - Finalização**

Está encerrada mais uma etapa da programação da SuperVitrine, espero que você tenha aprendido bastante na construção da página de produto onde podemos colocar em prática a programação do componente Exibidor.

Também foi possível através dos componentes criar uma página de produtos na promoção para ajudar a navegação e simplificar a plataforma para os usuários e clientes. Agora fica como tarefa cadastrar novos produtos e personalizar as informações de compra.

