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

