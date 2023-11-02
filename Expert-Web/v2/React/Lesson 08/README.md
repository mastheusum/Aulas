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