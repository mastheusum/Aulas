# Preparando o Ambiente

Nesta aula teremos a preparação do ambiente para que os alunos possam preparar o mesmo ambiente em casa e a criação de alguns projetos para entender o react.

## Instalar o Node JS versão LTS

Após a instalação:
- verificar versão do Node 
- verificar versão do NPM
- instalar o react
- instalar o create-react-app

## Instalar o VS Code

Garantir que é possível abrir o VS Code ao clicar com o botão direito em uma pasta. Isto é feito durante a instalação.

## Criando primeiro projeto React

Através do prompt/terminal acesse a pasta em que deseja criar o projeto e então utilize o comando abaixo para criar um projeto de nome **proj01** em branco que será utilizado para entender o básico sobre o React

```js
npx create-react-app proj01 --template empty
```

## Estrutura de pastas

- **/node_modules**
  - Nesta pasta temos os pacotes que foram baixados para fazer a aplicação react funcionar. Portanto não altere nada nesta pasta
- **/public**
  - Nesta pasta teremos os arquivos que iremos disponibilizar para o usuário da aplicação, como arquivos HTML e CSS, imagens, vídeos e etc.
- **/src**
  - Aqui teremos a lógica da aplicação React.
- *.gitignore*
  - Neste arquivo teremos os arquivos que devem ser ignorados quando a aplicação for colocada no ar
- *package.json* e *package-lock.json*
  - estes são os arquivos de documentos que registram todas as informações tecnicas da aplicação

## Entendendo o JSX

Passando pelos arquivos existentes na aplicação notamos que temos arquivos com HTML e JS misturados, e não da mesma forma como era quando vimos anteriormente.

Para programarmos os componentes no React, usamos uma sintaxe chamada de JSX, que é basicamente a mistura entre a linguagem de programação JavaScript que já conhecemos com a linguagem de marcação XML.

É muito possível que você não conheça, mas o XML já foi uma linguagem bastante usada (isso em um passado não tão distante) para a transferência de dados pela internet e atualmente foi substituído pelo performático JSON.

Abaixo um exemplo entre as diferenças do JSON e o XML para contextualizar:

![001](Screenshoots/001.png)

Deu pra ter uma noção da diferença entre as duas maneiras de enviar a informação. O JSON é mais simples e menos encorpado comparado ao XML que é robusto e altamente estruturado.

Mas não há motivos para se assustar, porque o JSX nesse caso se parece bastante com HTML. Abaixo está um outro exemplo de um elemento botão pode ser armazenado dentro de uma constante:

```js
const botao = <button> Clica em mim! </button>
```

Com o JSX é possível armazenar um ou vários elementos dentro de variáveis e assim podemos usar quando precisarmos.

E isso abre um leque de imenso de possibilidades. Imagina só você construir um menu e salvá-lo dentro de uma variável, aí quando precisarmos usar o menu é só chamar a variável. Isso facilita demais!

Aqui abaixo tem um outro exemplo, se liga. Tem uma constante salvando o nome e outra para salvar o elemento **< h1 >**. Veja que o elemento **< h1 >** usa a constante nome em seu conteúdo.

```js
const nome = "Pedro"
const titulo = <h1> Meu nome é { nome }! </h1>
```

Dessa maneira podemos interpolar os dados com os elementos JSX deixando tudo mais dinâmico e interessante de ser utilizado.

Esse exemplo funciona muito bem para quando temos que mostrar para o usuário um texto fixo e em seguida uma variável que vai sofrer atualização.

## Primeiro componente

Vamos partir para a aprendizagem de um conceito muito importante na programação do React, que são os componentes.

Os componentes são estruturas com funcionamento independente que contém um conjunto de elementos visuais. Na prática os componentes são funções javascript que retornam elementos JSX.

E para ficar mais claro, podemos pensar que os componentes são os órgãos do corpo humano, cada um tem o seu funcionamento e em conjunto formam o funcionamento do corpo humano.

Agora chega de explicações, vamos partir para a programação!

Comece criando um novo arquivo para a pasta src chamado Componente.jsx:

```jsx
import React from "react" 

export default function Componente() {
  return (
    <div>
      <h1> Pousando em React! </h1>
      <p> SuperGeeks </p>
      <img src="http://picsum.photos/128/128" alt="foto aleatória"/>
    </div> 
  );
}
```

Dentro do componente, criamos o elemento *< div>* no return para sustentar os outros elementos, e em seguida programar os elementos *< h1>*, *< p>* e *< img/>*.

No elemento *< h1>* preencha com o texto "Pousando em React!" e no conteúdo do *< p>* preencha com o texto "SuperGeeks".

No elemento *< img/>* vamos colocar um link especial de um serviço de imagens aleatórias da internet, então no source (src) da imagem digite o link abaixo e no alternative text (alt) coloque a descrição da imagem.

Depois de finalizado a programação, temos que conectar de alguma forma o componente com o arquivo index.js para que possamos fazer a renderizar na origem e ver o resultado no localhost.

Em index.js

```jsx
import Component from "./Componente"
```

No index.js devemos fazer importação do componente que criamos usando com comando import passando o nome e localização do arquivo.

No endereço devemos usar o "./" para indicarmos o ponto de partida para encontrar a pasta do arquivo desejado. Nesse caso o componente:

```jsx
ReactDOM.render(
  <React.StrictMode>
    <Componente /> // mudou aqui
  </React.StrictMode>,
  document.getElementById('root')
);
```

E por fim, para conseguirmos fazer a origem renderizar o componente que foi programado, precisamos passar o componente.

E pronto, agora você pode ir lá conferir como está ficando a aplicação!

## Diretório **public**

Quando criamos o projeto, você viu que a pasta public serve como um diretório que deixa os arquivos com a permissão de acesso público a qualquer usuário.

Vamos criar agora um novo arquivo de estilo chamado style.css e vamos utilizar a pasta public para deixar esse arquivo intencionalmente público

Aproveitando que no componente colocamos uma imagem, você pode fazer download de qualquer imagem na internet ou através do link abaixo e salvar dentro da pasta public.

[foto.png](https://i.ibb.co/bRcvNTB/foto.jpg)

Depois de salvar você pode abrir o componente e fazer a alteração do source. Podemos substituir o link da internet por um endereço local.

E para funcionar precisamos colocar o nome e a extensão da imagem, como mostrado abaixo:

```js
<img src="/foto.jpg" alt="foto pasta public"/>
```

Outros arquivos também podem ser incluídos para dentro da pasta public, como exemplos:

- O robot.txt serve para mostrar quais rotas da aplicação podem ser acessadas pelos usuários e anexadas pelos mecanismos de busca como o Google, Yahoo, Bing e etc.
- Arquivos como o favicon.ico para mostrar o ícone de favorito na guia do navegador. Entre outros diversos arquivos que os usuários podem fazer o uso.

## Digitando CSS

Chegamos no momento de mudar a aparência dos elementos da página que estamos programando. Antes vamos relembrar como a linguagem de estilização CSS funciona.

Devemos começar colocando sempre o **seletor** para indicar qual elemento vai ganhar tal estilo. As declarações ou também chamado de estilo são formadas por **propriedades** e **valores**.

As propriedades são como exemplo: cor do fundo, cor da fonte, comprimento, borda, altura, espaçamento, comportamento e entre outras.

Todas as propriedades devem receber um valor, por exemplo: o tamanho da fonte tem **16pt**. Nesse caso colocamos o valor sendo dezesseis pontos de fonte. Alguns valores são categóricos como o exemplo do estilo de fonte que pode ser **normal** ou em **itálico**.

```css
seletor {
  propriedade: "valor";
  propriedade: valor;
}
```

Depois de relembrar rapidamente como o CSS funciona, podemos voltar a programar. Indo no arquivo **style.css** que criamos anteriormente. Vamos mudar as propriedades de aparência do elemento body.

Vamos colocar a cor de fundo de cinza-claro, cor da fonte de cinza-escuro, a fonte arial no tamanho 14pt e uma margem de 32 pixels.

O código ficaria assim:

```css
body {
  background: #eee;
  color: #222;
  font-family: "Arial", sans-serif;
  font-size: 14pt;
  margin: 32px;
}
```

Depois de finalizarmos a programação do arquivo style.css devemos incluir os estilos feitos para a página index.html usando o elemento **< link/>**.

No elemento **< link/>** configuramos o tipo de documento no atributo relationship (rel) e o endereço de onde está salvo o documento no atributo hypertext reference (href).

```jsx
<link rel="stylesheet" href="/style.css"/>
```

Prontinho, só abrir e correr para o "localhost" para ver as mudanças de estilos que foram feitas.

## Componentes com Estilo
Para mudarmos os estilos dos componentes, vamos fazer a instalação de um pacote chamado **"Styled Components"**. É bastante utilizado na programação de aplicação no React e serve para simplificar o uso estilo sem usar o CSS.

Abra o Terminal no diretório do projeto, e em seguida digite o comando abaixo:

```js
npm install styled-components --save
```

Novamente estamos usando o comando **npm** para fazer a instalação de um pacote externo, o parâmetro passado é do **install** que indica a instalação de um pacote, logo na frente o parâmetro com o nome do pacote nesse caso **"styled-components"** e a sinalização para salvar o pacote.

Bom, sempre que precisarmos instalar um pacote usaremos essa estrutura de comando no Terminal.

Agora que temos o pacote instalado podemos voltar para o componente e fazer a importação do **Styled Components**. Como mostrado abaixo:

```jsx
import styled from "styled-components"
```

Temos um novo objetivo:

- Alterar o estilo do elemento **< h1>** para ficar mais estiloso na página.

Vamos começar trocando o estilo da fonte para a cor vermelha com o tamanho de 42 pixels e um espaço entre cada letra de 2 pixels.

O modelo do Título ficaria assim no código:

```jsx
const Titulo = styled.h1`
    color: #eb211e;
    font-size: 42px;
    letter-spacing: 2px;
`
```
Temos um novo objetivo:

## Resultado final