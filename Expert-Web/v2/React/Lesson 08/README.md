# **SuperVitrine: Enchendo o Carrinho**

## Lesson 01 -  Novo desafio!

E novos desafios acabaram de chegar!

Temos ainda uma jornada pela frente na produção da aplicação SuperVitrine, é preciso fazer o sistema de carrinho, apesar de parecer fácil e simples o funcionamento o desenvolvimento em questão de programação é longo e árduo.

Tenho certeza que você vai conseguir, temos novos conceitos para aprender e utilizar junto com o React, que é o caso do LocalStorage, uma API dos navegadores de internet que vai ajudar a armazenar todos os produtos que foram colocados no carrinho!

E também faremos um sistema de pagamento embrionário usando a chave PIX da aplicação para realizar as compras de produtos. Fique alerta aos próximos desafios e vamos nessa!

## Lesson 02 - Página Carrinho

O desafio agora é construir uma nova página para ser a àrea de carrinho de compras!

Assim como qualquer outra plataforma online que venda produtos, é necessário ter uma página para registrar os itens selecionados. Em alguns casos pode ser chamado de carrinho, sacola, compras, lista de produtos, enfim, diversos nomes para a mesma função.

Comece abrindo o diretório pages e criando o arquivo “Carrinho.jsx”. Depois de criado, faça a importação dos pacotes React, Componente Navegação e os dados Produtos de exemplo:

```jsx
/* src/pages/Carrinho.jsx */

import React from "react"

import Navegacao from "../components/Navegacao"

import ProdutosExemplo from "../datas/ProdutosExemplo"

/...
```

Depois de importar todos os pacotes necessários para começar a programação do componente:

Faça exportação de uma nova função chamada de Carrinho, não será necessário a utilização de props nesse primeiro momento. Em seguida retorne um elemento vazio para servir de base aos próximos componentes que será inserido:

```jsx
/* src/pages/Carrinho.jsx */

export default function Carrinho() {
  return <>
    /.../
  </>
}
```

O primeiro elemento renderizado pela página Carrinho será o navegação:

Assim como nas outras páginas, use os mesmos links como exemplo da aplicação, é usado o Início, Promoção e Carrinho. A para os atributos do componente coloque o título que é usado para mostrar o texto em destaque:

```jsx
/* src/pages/Carrinho.jsx */

.../

<Navegacao titulo="VITRINE">
  <a href="/"> Início </a>
  <a href="/promocao"> Promoção </a>
  <a href="/carrinho"> Carrinho </a>
</Navegacao>

/...
```

Para já ter o resultado visível nesse primeiro desafio, faça a importação da página de Carrinho no arquivo de “Rotas.jsx” para ser atribuído no elemento Route.

Lembrando que o arquivo Rotas está localizado na raiz, portanto o endereço de importação é diferente dos demais recursos que usamos anteriormente:

```jsx
/* src/Rotas.jsx */
import Carrinho from "./pages/Carrinho"
```

E dentro das rotas coloque o elemento para ser renderizado pelo React Router DOM:

```jsx
/* src/Rotas.jsx */
<Route path="/carrinho" element={ <Carrinho/> }/>
```

No elemento **< Route>** ajuste o path, ou seja o caminho de endereçamento para o “/carrinho” e passe a página importada para o atributo elemento dentro de tags.

Quando finalizado faça o teste para ver se a rota inserida já pode ser acessada!

## **Lesson 03 - Componente Janela**

Aqui vai o desafio mais fácil e babinha de todos!

Temos de criar um novo componente para ser a janela que irá comportar os elementos da página do Carrinho, nada de difícil apenas um retângulo branco que vai receber elementos de tabela e alguns botões básicos.

Na pasta components crie o arquivo de componente “Janela.jsx” e faça a importação do React e também do Styled Components:

```jsx
/* src/components/Janela.jsx */
import React from "react" 
import styled from "styled-components"
```

Com o React fazemos a exportação dos elementos no retorno da função e com o styled-components declaramos o estilo em modelos para serem transformados em elementos!

O componente terá apenas um modelo tendo o estilo de fundo branco, uma margem na vertical de 32 pixels, overflow oculto e espaçamento interno de 32 pixels para aumentar o tamanho do contorno dos elementos:

```jsx
/* src/components/Janela.jsx */
const Modelo = styled.div`
  background: #fff;
  margin: 32px 0;
  overflow: hidden;
  padding: 32px;
`
```

Após a declaração da constante Modelo com estilo de elemento divisão. Faça a exportação padrão de uma função chamada Janela usando o parâmetro de props para receber os dados.

Para este caso, não será necessário nenhum outro elemento além do Modelo como retorno e contendo o props children para retornar os elementos contidos dentro do componente quando usado:

```jsx
/* src/components/Janela.jsx */
export default function Janela(props) {
  return (
    <Modelo>
      { props.children }
    </Modelo>
  )
}
```

E assim encerramos a programação do componente Janela, ficando agora a tarefa de importar para dentro da página carrinho para listar todos os produtos comprados e botões para finalizar a etapa de compra e pagamento!

## **Lesson 04 - Importando a janela**

Chegou o momento de colocar a Janela para ser aberta!

Abra o arquivo de página “Carrinho.jsx” e importe o componente que fizemos na lesson anterior. Use o comando para importar no endereço do diretório components:

```jsx
/* src/pages/Carrinho.jsx */
.../
import Janela from "../components/Janela"
/...
```

Quando importado vá até os elementos que estão sendo retornados pela função do componente e adicione abaixo do navegação a janela para ser mostrada.

Por enquanto a janela não vai conter nenhum conteúdo, o mais importante é que apareça na tela o retângulo branco que foi programado no modelo do componente:

```jsx
/* src/pages/Carrinho.jsx */
.../
<Janela>
  /.../
</Janela>
/...
```

Assim que adicionado veja se a janela foi mostrada dentro da página do carrinho!

Caso tenha aparecido digite o título de cabeçalho h1 para dentro da janela e coloque um total monetário fictício para ver se é mostrado na página, como mostrado:

```jsx
/* src/pages/Carrinho.jsx */
.../
<Janela>
  <h1>Total R$ 1,000.00</h1>
</Janela>
/...
```

Caso não tenha mostrado nenhum elemento novo e muito menos o título que foi digitado, faça os testes no componente e verifique se a programação está correta, muitas vezes por descuido os endereços de importação ou estilo podem sair de funcionamento!

## **Lesson 05 - Relembrando tabelas**

Agora saindo um pouco do desenvolvimento da aplicação SuperVitrine, crie um novo arquivo “index.html” e vamos rever como é a programação de tabelas em HTML.

Já tem um tempo que trabalhamos com tabela, apesar de parecer simples, existem diversas tags e cada uma tem uma função diferente. Temos células, linhas, colunas, cabeçalho de tabela e o corpo da tabela. O que faremos a seguir é a construção de uma tabela básica:

```html
<table>
  <thead>
    <tr>
      <th> Música </th>
      <th> Banda </th>
      <th> Gênero </th>
    </tr>
  </thead>
  <tbody>
    /.../
  </tbody>
</table>
```

Os elementos são os seguintes:

- **table** é usado para comportar as demais tags para construir uma tabela;
- **thead** é o cabeçalho com informações da coluna;
- **tbody** é o corpo da tabela onde vão as linhas e células;
- **tr** elemento de linha da tabela;
- **td** elemento de célula de dados da tabela;

Com estes elementos básicos é possível construir uma tabela, no exemplo abaixo é feito o corpo da tabela seguindo uma lista de músicas. No primeiro **td** é colocado o nome da música, no segundo **td** a banda que toca a música escolhida e no terceiro e último **td** qual o gênero se encaixa:

```html
<tr> 
  <td> Ordinary World </td>
  <td> Duran Duran </td>
  <td> Pop, Alternativa/indie </td>
</tr>
<tr> 
  <td> Mad World </td>
  <td> Tears for Fears </td>
  <td> Pop, Alternativa/indie </td>
</tr>
```

E assim você construiu uma tabela completa usando as principais tags do HTML para construir uma tabela sobre músicas. O mesmo deve ser feito porém com os produtos que foram selecionados pelo cliente no site.

## **Lesson 06 - Programando o carrinho**

E agora que você sabe como as tabelas funcionam na programação HTML, podemos incluir para dentro da janela na página do Carrinho!

Vamos começar programando uma tabela para ocupar todo o comprimento da página, não teremos um cabeçalho mas a tabela vai precisar de um corpo para receber todos os dados e informações dos produtos:

```jsx
/* src/pages/Carrinho.jsx */
.../
<table width="100%">
  <tbody>
    /.../
  </tbody>
</table>
/...
```

Seguindo o código acima, verifique se a tabela já está presente dentro da página Carrinho.

As informações serão mostradas da seguinte forma: faça a declaração de uma linha da tabela usando o elemento **tr** e dentro coloque os dados individuais para ser dividido em colunas com o elemento **td**:

```jsx
/* src/pages/Carrinho.jsx */
.../
<tr>
  <td> Código </td>
  <td> Modelo do Produto </td>
  <td> R$ 1.000,00 </td>
</tr>
/...
```

Na primeira célula use o texto “Código” para indicar onde deve ser colocado o código do produto, como segunda célula o “Modelo do Produto” que indica o nome do produto e por fim o seu valor que deve ser montado contendo a unidade monetária no início e o valor contendo as duas casas decimais do centavos.

## **Lesson 07 - LocalStorage**

Antes de partir para a programação de salvar os produtos no carrinho ou consultar quais produtos foram incluídos e salvos, vamos ver como funciona a técnica do LocalStorage com o React!

O LocalStorage é uma API integrada a todos os navegadores de internet que serve para armazenar as informações de forma segura sem a necessidade de um banco de dados, apenas com o armazenamento local do computador.

Para definir um item no Local Storage deve ser usado o comando “setItem”, e como parâmetros deve ser passado o nome da chave seguido do valor. Um detalhe importante é que tanto a chave quanto o valor deve ser String como mostra o exemplo abaixo:

```js
localStorage.setItem("nome", "Pedro")
```

No exemplo do trecho de código acima, está sendo salvo o valor “Pedro” na para a chave nome!

Se em um outro momento da aplicação ou janela precisar resgatar o valor armazenado em alguma chave é preciso usar o comando “getItem” passando apenas um único parâmetro que é o nome da chave.

O valor será retornado e pode ser salvo em uma variável ou constante como mostrado:

```js
const nome = localStorage.getItem("nome")
console.log(nome)
```

Terminal

```bash
Pedro
```

Veja que mesmo o comando “getItem” do Local Storage funciona para resgatar o valor que foi salvo anteriormente dentro da chave “nome”. Caso não tivesse nenhum resultado ou valor seria retornando “null”, ou seja, um valor vazio.

Pode chegar um ponto em que você queira limpar o valor da chave e/ou remover determinado dado. E para isso existe o comando “removeItem” que faz a tarefa árdua de exterminar o dado específico do Local Storage:

```js
localStorage.removeItem("nome")
```

O comando “removeItem” necessariamente precisa receber o parâmetro contendo um texto para a especificação de qual chave deve ser deletada da memória!

Mas se você quiser exterminar todos os dados sem se preocupar com os dados armazenado e dar um grande resete no Local Storage o mais adequado é o comando “clear” que limpa todos os dados sem piedade:

```js
localStorage.clear()
```

E assim você conheceu as principais ações contidas nos métodos do Local Storage, que já é o suficiente para programarmos uma lista para ser o carrinho da loja.

Fique antenado nas próximas tarefas e lembre-se: O Local Storage só armazena textos!

## **Lesson 08 - Salvando no carrinho**

Precisamos de uma função para armazenar um novo produto no carrinho!

A função de Salvar no Carrinho deve ser construída, antes vamos pegar um exemplo de como os dados devem ser armazenados. Não precisamos salvar a informação completa e histórica do produto, porém deve ser salvo o seu código de identificação dentro de uma lista de desejos.

A lista deve ser um array do javascript como mostrado abaixo, uma sequência de dados armazenados em uma única estrutura:

```js
[ "hmcl", "mhmt", "mhmt", "mhcs" ]
```

Com a lista, ou também conhecida como array no javascript, será possível salvar todos os códigos dos produtos no carrinho.

Comece criando a pasta “functions” dentro da raiz do projeto e faça a exportação da função principal contendo o código como parâmetro:

```js
/* src/functions/SalvarCarrinho.js */

export default function SalvarCarrinho(codigo) {
  /.../
}
```

Com a função chamada “SalvarCarrinho” criada vamos entender como funciona a conversão de uma lista para texto!

Lembra que o Local Storage só suporta salvar texto, então devemos pegar a estrutura de lista que temos e transformá-la em um texto literal. Com o comando JSON podemos “stringifar” a lista, ou seja, torná-la string para ser salva:

```js
/* Exemplo de Conversão de Array para Texto */

JSON.stringify( [ "Ola", "Mundo" ] )

/* Exemplo de Conversão de Texto para Array */

JSON.parse( "['Ola','Mundo']" )
```

O caminho reverso também pode ser feito, com o JSON usando o comando “parse” podemos converter um texto literal em uma lista ordenada para ser operada com o javascript. Com o exemplo trabalhado acima de conversão fica mais fácil de entender o funcionamento.

Aqui abaixo vai o passos que deve ser programado:

- Receber o resultado em formato de texto da chave “carrinho” do Local Storage;
- Converter o resultado que está em formato de texto para lista;
- Adicionar um novo código na lista;

E esses passos indicados acima ficariam da seguinte forma em Javascript:

```js
/* src/functions/SalvarCarrinho.js */

.../
const resultado = localStorage.getItem("carrinho")
const lista = JSON.parse(resultado || "[]")
lista.push(codigo)
/...
```

Na segunda linha do trecho acima, entre parênteses têm uma verificação simples, caso o resultado seja nulo o valor convertido para lista será o texto que contém o par de chaves.

Com o método push em uma lista é possível adicionar um novo item, que para este caso será o código.

A para finalizar o funcionamento da função “SalvarCarrinho” faça a conversão da lista para texto, salvando o resultado em uma constante chamada carrinho e armazene no Local Storage:

```js
/* src/functions/SalvarCarrinho.js */

.../
const carrinho = JSON.stringify(lista)
localStorage.setItem("carrinho", carrinho)
/...
```

O comando JSON com o método “stringify” fica responsável por converter o formato de lista para texto, e assim finalizando com o comando “setItem” para salvar dentro da chave “carrinho”.

Abaixo está um exemplo de como a função é executada:

```js
/* Exemplo Salvar Carrinho */

SalvarCarrinho("mhcs")
```

A função está completa! Falta adicionar a funcionalidade dessa função nos botões de Adicionar ao Carrinho, assim já teremos parte da programação em andamento para ser mostrada na página!

## **Lesson 09 - Configurando o botão**

A tarefa mais rápida e simples é colocar os botões para funcionar!

Voltando para o componente Exibidor, abra a programação e no início faça a importação da função “SalvarCarrinho” lembrando que a função está salva dentro da pasta functions na raiz do projeto:

```js
/* src/components/Exibidor.jsx */

.../
import SalvarCarrinho from "../functions/SalvarCarrinho"
/...
```

Depois de importado:

A função “onClick” é responsável por ser ativada quando o usuário da plataforma ou um cliente que deseja comprar o produto clica sobre o botão. Portanto devemos usar o atributo de evento para o botão:

```js
/* OnClick */

onClick={ ... }
```

Com o onClick estabelecido como forma de interação ao botão, faça a adição de uma função anônima e use o “SalvarCarrinho” passando como parâmetro o código do produto que está localizado no props do componente:

```js
/* src/components/Exibidor.jsx */

.../
<button onClick={ () => SalvarCarrinho(props.produto.codigo) }>
    Adicionar ao Carrinho
</button>
/...
```

Para certificar que o botão esteja funcionando abra o inspecionar elemento do seu navegador e localize a aba “Aplicações” como opção de menu aparecerá Local Storage, ou caso esteja em portugues será traduzido para Armazenamento Local.

Se tudo ocorrer bem estará o resultado dentro da chave “carrinho”!

## **Lesson 10 - Obtendo os produtos do carrinho**

Se existe uma função para salvar os produtos no carrinho também é preciso de uma função para obter os produtos salvos!

Teremos que construir uma nova função para obter os produtos que foram salvos pelo Local Storage na  

Comece criando o arquivo “ObterCarrinho.js” dentro do diretório functions:

```jsx
/* src/functions/ObterCarrinho.js */

export default function ObterCarrinho() {
    /.../
}
```

Faça a exportação da função e não é preciso definir parâmetros!

Para explicar o que faremos a seguir é usar o comando “getItem” para obter o resultado de todos os produtos armazenados de dentro da chave “carrinho”, transformar o resultado que está no formato de texto em lista e retornar a lista.

Eu disse que ia ser simples com três passos conseguimos, faça a declaração do resultado:

```jsx
/* src/functions/ObterCarrinho.js */

.../
const resultado = localStorage.getItem("carrinho")
/...
```

O resultado está no formato de texto então:

Declare uma constante chamada de lista e use o comando JSON.parse para convertê-lo de volta para o formato de array, com o comando de verificação do javascript valide uma lista vazia em formato de texto:

```jsx
/* src/functions/ObterCarrinho.js */

.../
const lista = JSON.parse(resultado || "[]")
return lista
/...
```

E por fim use o comando return do javascript para emitir a lista no momento em que a função será executada. Sem o comando return não seria possível receber os produtos através da execução da função.

Aqui vai os exemplos de como deve ser utilizada a função e qual deve ser o seu resultado esperado:

```jsx
/* Exemplo Obter Carrinho */

const resultado = ObterCarrinho()

/* Exemplo de Resultado */

[ "hmcl", "mhmt", "mhmt", "mhcs" ]
```

E veja que no resultado esperado é retornada uma lista contendo os códigos dos produtos!

## **Lesson 11 - Alterando o carrinho**

Foi feito na lesson anterior a função para obter os produtos armazenados no Local Storage, mais especificamente na chave “carrinho”. Porém, ainda não é mostrado os produtos na lista. Isso porque não foi programado nada dentro da página Carrinho para receber os produtos.

E é isso que faremos agora: Vai ser preciso obter os produtos através da função criada e armazenar dentro de um estado do React, assim que carregado vai ser renderizado no sistema de mapeamento na estrutura de tabelas!

Comece importando a função “ObterCarrinho” dentro da página Carrinho.jsx:

```jsx
/* src/pages/Carrinho.jsx */

.../
import ObterCarrinho from "../functions/ObterCarrinho"
/...
```

Como explicado no funcionamento da aplicação, vai ser necessário usar o estado e efeito do React, portanto importe os pacotes do UseState e o UseEffect de dentro do pacote “react”:

```jsx
/* src/pages/Carrinho.jsx */

import React, { useState, useEffect } from "react"
/...
```

Com os hooks importados, podemos dentro da função do componente da página “Carrinho.jsx” criar o estado contendo a variável “carrinho” e a função “definirCarrinho”.

E para esse caso receberemos vários códigos do produto, então devemos definir como uma lista vazia o estado inicial:

```jsx
/* src/pages/Carrinho.jsx */

.../
const [ carrinho, definirCarrinho ] = useState([])
/...
```

Com o estado declarado passamos para o efeito:

No useEffect programe uma constante com o nome de resultado para receber os produtos retornados pela função “ObterCarrinho”. Em seguida atribua a constante resultado para a função “definirCarrinho”. Assim os códigos do produtos serão armazenado no estado:

```jsx
/* src/pages/Carrinho.jsx */

.../
useEffect(function() {
  const resultado = ObterCarrinho() 
  definirCarrinho(resultado)
}, [])
/...
```

Agora com o resultado dos códigos dos produtos salvo no estado, vai ser preciso criar uma programação que faça o encontro dos dados do produto através do código e mostre-os na tabela.

Isso deve ser feito através de uma estrutura map onde será obtido o código do produto a cada repetição e o índice:

```jsx
/* src/pages/Carrinho.jsx */

.../
carrinho.map(function(codigo, indice) {
  for (const produto of ProdutosExemplo) {
    /.../
  }
})
/...
```

Dentro da estrutura de mapeamento coloque uma repetição para listar os produtos que tem catalogado dentro do arquivo “ProdutosExemplo.js”.

Na repetição verifique se o código do produto bate com o código do mapeamento, caso seja válido isso significa que o produto salvo no Local Storage foi encontrado, e então deve ser precedido mostrando uma nova linha da tabela como mostra abaixo:

```jsx
/* src/pages/Carrinho.jsx */

.../
carrinho.map(function(codigo, indice) {
  for (const produto of ProdutosExemplo) {
    if (produto.codigo == codigo)
      return (
        <tr key={ indice }>
          <td> { produto.codigo } </td>
          <td> { produto.modelo } </td>
          <td> R$ { produto.preco }.00 </td>
        </tr>
      )
  }
})
/...
```

No momento que for gerado a tabela, não se esqueça de que a linha é usada a tag **tr** e para as células de informações e dados o elemento **td** e como o produto foi encontrado é preciso colocar os dados para serem mostrados!

## **Lesson 12 - Calculando preço total**

Os produtos estão aparecendo na tela, mas ainda falta fazer o total ser calculado!

Cálculos sempre são um caso à parte, deve ser feito uma única função para registrar corretamente a quantidade de produtos e qual é o preço totalizado sempre que um item for colocado à lista.

O que vai ser feito é um novo estado chamado preço e a função “definirPreço” iniciando no valor zero:

```jsx
/* src/pages/Carrinho.jsx */

.../
const [ preco, definirPreco ] = useState(0)
/...
```

O estado deve ser calculado no momento que o estado carrinho sofrer alteração, ou seja, sempre que um novo item ou a página for carregada, automaticamente será recalculado o preço total sobre os produtos colocados no carrinho.

A programação será feita através do UseEffect usando como referência a atualização sobre o estado carrinho:

```jsx
/* src/pages/Carrinho.jsx */

.../
useEffect(function() {
  /.../
}, [carrinho])
/...
```

Com a estrutura do UseEffect preparada, devemos criar uma variável para pré-calcular o total e uma estrutura de repetição para fazer a somatória do preço e adicionar a variável total.

No final a variável total que fica responsável pelo pré cálculo é endereçada ao estado preço:

```jsx
/* src/pages/Carrinho.jsx */

.../
var total = 0

carrinho.map(function(codigo) {
  /.../
})
definirPreco(total)
/...
```

Dentro da estrutura de mapeamento faça a repetição para os produtos catalogados nos produtos de exemplo. Deixe uma verificação com a estrutura de decisão comparando o código do produto com o do carrinho.

E caso o produto seja encontrado faça a adição na variável total:

```jsx
/* src/pages/Carrinho.jsx */

.../
for (const produto of ProdutosExemplo)
  if (produto.codigo == codigo)
    total += parseInt(produto.preco)
/...
```

Para que o valor seja calculado da forma correta é preciso convertê-lo para um número inteiro, haverá casos em que o valor do preço venha como texto, por isso usamos a função ParseInt ou o ParseFloat para números decimais.

E para mostrar o preço total basta usar o estado “preco” no título:

```jsx
/* src/pages/Carrinho.jsx */

.../
<h1> Total R$ { preco },00 </h1>
/...
```

Realize os testes de compra para adicionar ao carrinho e veja se o valor estimado pelos produtos bate com o valor total.

Caso o cálculo esteja dando variações recorra ao UseEffect feito nessa lesson e conserte a devida falha no esquema de cálculo, em outros casos é necessário verificar se o ciclo de estado está funcionando corretamente, fique atento ao funcionamento do React!

## **Lesson 13 - Pagamento PIX**

Essa Lesson é somente para quem possui algum tipo de conta no banco ou conta digital na internet com acesso ao método de transferência pix. Lembrando que o sistema de pagamento por PIX deve ser usado de forma segura na sua plataforma.

É aconselhável usar uma chave aleatória como chave, assim nenhuma informação pessoal é passada de maneira desnecessária. Na plataforma do seu banco procure pelas chaves cadastradas como mostra a imagem acima.

Na programação insira um botão com o seguinte texto:

```jsx
/* src/pages/Carrinho.jsx */

.../
<button> Pagamento por Pix </button>
/...
```

Para que a chave apareça na aplicação crie uma função chamada “Pagamento.js” e exporte uma função que passe imprima em uma janela de alerta a chave pix.

Se a mensagem for muito grande use o “\n” para fazer a quebra de linha:

```jsx
/* src/functions/Pagamento.js */

.../
export default function Pagamento() {
  window.alert("Faça o pagamento através\nda chave PIX: pdrusr@gmail.com")
}
/...
```

O comando “alert” vai funcionar apenas se estiver acompanhado da API window que é usada nos navegadores para mostrar mensagens e gerenciar a janela.

Em seguida importe a função de pagamento no arquivo do “Carrinho.jsx” e adicione a função importada no evento onClick do botão:

```jsx
/* src/pages/Carrinho.jsx */

import Pagamento from "../functions/Pagamento"
/.../

<button onClick={ Pagamento }> 
  Pagamento por Pix
</button>
/...
```

E assim está incluso dentro do site um sistema básico de pagamento da aplicação. A regra é definida pelo dono do Site, se o comprovante vai ser enviado por email ou pelo número de celular para a averiguação do pagamento.

## **Lesson 14 - Finalização**

Maravilha, terminamos mais uma etapa do desenvolvimento da SuperVitrine, e espero que você esteja feliz pelos avanços feitos até o momento, são diversas linhas de programação que enriquecem o funcionamento do site.

Daqui para frente entraremos em novos assuntos, será desenvolvido um servidor para fornecer e armazenar os dados através de um banco de dados. Se prepare para esses novos desafios!