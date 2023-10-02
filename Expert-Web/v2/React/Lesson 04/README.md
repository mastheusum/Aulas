# Acelerando no Express

- Criando uma API
  - Configurando uma API
  - Programando
  - Criando Dados
  - Servindo Dados
- A Aplicação
  - Configurando Aplicação
    - Construindo Título
    - Construindo Campo
    - Construindo Conteúdo
  - Alinhando o Projeto
  - Estados e Efeitos
  - Consumindo o Servidor
  - Mostrando Dados
- Finalizando

## Criando API

```bash
# Entre na pasta onde ficarão os projetos
# ela não criará uma nova pasta para a API então você mesmo precisa fazer isso
mkdir porj04b # o "b" é de backend
cd proj04b
npm init -y
npm install express cors --save
```

O express será usado para a criação e configuração do servidor, mas por padrão um sistema não pode acessar recursos de outro sistema, logo não teriamos como ter o React usando o nosso server, então instalamos o CORS que é responsável por essa liberação.

### Configurando API

```js
{
  "name": "proj04b",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.js", // nova linha
  "type": "module", // nova linha
  "scripts": {
    "start": "node ./src/index.js" // nova linha
  },
  "keywords": [],
  "author": "SuperGeeks",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1"
  }
}
```

### Programando

```js
import express from "express"
import cors from "cors" 

// cria instância do servidor
const servidor = express()

servidor.use(cors()) // faz o servidor usar o cors
servidor.use(express.json()) // faz o servidor "se comunicar" em JSON

// cria uma rota
servidor.get("/", function(requisicao, resposta) {
  resposta.json({ mensagem: "Olá Mundo!" }) 
}) 

// indica a porta de funcionamento do servidor
servidor.listen(4000, function() {
  console.log("SERVIDOR EM FUNCIONAMENTO!")
  console.log("http://localhost:4000/")
})
```
Inicie o servidor com **npm start**

### Criando dados

Para o servidor fornecer os dados, devemos criar um novo arquivo para servir como uma base de dados estática para ser exportada e enviada por uma nova rota.

Crie um arquivo de conteudo com 2 conteúdos para os alunos testarem. Siga o modelo do abaixo.

```js
/* conteudos.js */
export default {
  "9bf9": {
    titulo: "Código limpo",
    autor: "Robert C. Martin",
    ano: 2009,
    genero: [
      "Design de Software",
      "Programação e Desenvolvimento",
      "Tecnologia",
    ],
    paginas: 425,
    capa: "https://i.ibb.co/Xxvc7hs/9bf9.jpg",
    descricao: "Mesmo um código ruim pod...",
    avaliacao: 4.8,
    capadura: true,
  },
  ...
}
```

### Servindo dados
```js
import conteudos from "./conteudos.js" // o arquivo com os conteúdos deve estar na mesma pasta do index.js
```

Um rota contém o código de status da resposta (mostrar os códigos) e o conteúdo da resposta
Adicione uma rota:
```js
servidor.get("/api", function(requisicao, resposta) {
  resposta.status(200).json(conteudos)
})
```

Quando o cliente fizer uma requisição para uma rota inexistente, o servidor deverá notificar com uma resposta de erro 404, o famoso erro "Not Found". Assim alertando que nenhuma rota foi encontrada:

```js
servidor.get("*", function(requisicao, resposta) {
  resposta.sendStatus(404)
})
```

## A Aplicação

Crie uma projeto em branco e instale o styled-components

No style.css teremos o código abaixo e lembre de importar no index.html como nas aulas anteriores

```css
body {
  background: #eee;
  color: #222;
  font-family: "Arial", sans-serif;
  font-size: 14pt;
  margin: 0 auto;
  width: 720px;
}
```


### Configurando aplicação
Crie o arquivo **Inicio.jsx** e utilize-o no **index.js**

```jsx
import React from 'react'

export default function Inicio() {
  return (
    <div>
      <h1>
        Aqui vai o Componente ‘Título’
      </h1>
      <h2>        
        Aqui vai o Componente ‘Campo’
      </h2>

      <p>        
        Dentro do campo vai o Componente ‘Conteúdo’
      </p>
      <p>        
        Dentro do campo vai outro Componente ‘Conteúdo’
      </p>
    </div>
  )
}
```

### Constuindo Título

Atenção que a imagem utilizada será passada como uma propriedade

```jsx
const ModeloTitulo = styled.div`
    background-image: url(${
      props => props.imagem
    });
    background-position: center;
    background-size: cover;
    padding: 32px;
`
const TituloNome = styled.div`
    color: #fff;
    font-size: 32pt;
    margin-top: 160px;
    text-align: center;
`

export default function Title(props) {
  return (
    <ModeloTitulo imagem={ props.imagem }>
      <TituloNome>{ props.nome }</TituloNome>
    </ModeloTitulo>
  )
}
```


### Construindo Campo
```jsx
const ModeloCampo = styled.div`
  background: white;
  padding: 32px;
  margin: 32px 0;
`
const CampoInterno = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`

export default function Campo(props) {
  return (
    <ModeloCampo>
      <CampoInterno>
        { props.children }
      </CampoInterno>
    </ModeloCampo> 
  )
}
```

### Alinhando projeto

```jsx
/* src/Inicio.jsx */
import React from 'react'
import Titulo from './components/Titulo'
import Campo from './components/Campo'
import Conteudo from './components/Conteudo'

import background from './background-site.jpg'

export default function Inicio() {
  return (
    <div>
      <Titulo nome="Acelerando no React" imagem={ background } />
      <Campo>
      <Conteudo
        capa="https://i.ibb.co/rd0GmYS/opp.jpg"
        titulo="O Pequeno Príncipe"
        genero={[ "Infantil", "Conto", "Aventura" ]}
        ano="1943"
        autor="Antoine de Saint-Exupéry"
      />
      </Campo>
    </div>
  )
}

```

### Estados e efeitos

Vamos começar importando o useState e o useEffect de dentro do pacote do React. Com o **useState** iremos armazenar os dados vindo do servidor e no **useEffect** fazemos a conexão com o servidor:

```jsx
/* src/Inicio.jsx*/
import React, { useState, useEffect } from "react"
```

Crie o estados

```jsx
/* src/Inicio.jsx*/
const [ codigos, definirCodigos ] = useState([]) 
const [ conteudos, definirConteudos ] = useState({})
```

## Consumindo o Servidor

Usaremos um pacote externo chamado Axios para realizar a requisição com o servidor, poderíamos usar o comando "fetch" do próprio JavaScript mas por conta de segurança e performance o Axios se sai melhor nessa tarefa! 

```bash
npm install axios --save
```

```jsx
/* src/Inicio.jsx*/
import axios from "axios"
```

```jsx
/* src/Inicio.jsx*/
axios.get("http://localhost:4000/api")
  .then(function(resposta) {
    const dados = resposta.data 
    const lista = Object.keys(dados)
  
    definirCodigos(lista) 
    definirConteudos(dados) 
  })
  .catch(function(erro) {
    console.log(erro)
  })
```

### Mostrando Dados

```jsx
/* src/Inicio.jsx*/
<Campo> 
  {
    codigos.map(function(codigo) {
      return <Conteudo 
          key={ codigo }
          capa={ conteudos[codigo].capa }
          titulo={ conteudos[codigo].titulo }
          genero={ conteudos[codigo].genero }
          ano={ conteudos[codigo].ano }
          autor={ conteudos[codigo].autor }
        />    
    })
  }
</Campo>
```
