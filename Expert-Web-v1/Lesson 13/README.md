# Reacte Router e Navegação

#### Pré-aula
Para este projeto será preciso que os alunos estejam com o projeto corretamente refatorado usando o *useState* e o *useEffect* para evitar erros que ocorreram nas aulas anteriores.

### O react-router-dom
Essa biblioteca possibilita que o roteamento das páginas seja feito pelo lado do cliente. Como vantagem temos uma página estática que realizou apenas a primeira requisição e sempre que o cliente precisa mudar da página a mudança é feita sem a criação de uma nova requisição.
<br>Para que isso seja possível vamos precisar instalar o **react-router-dom** para isso usamos o comando: <br>
`npm install react-router-dom`<br>
Após a instalação não teremos nenhuma outra nova biblioteca a ser instalada hoje, então vamos iniciar o servidor.

### Preparando as rotas
A preparação das rotas é feita no arquivo *index.js* no ponto onde estamos renderizando o componente *<App />* , mas antes disso precisaremos importar algums elementos da *react-router-dom* como na linha abaixo: <br>
`import { BrowserRouter, Routes, Route } from 'react-router-dom';` <br>
Também precisaremos importar os componentes que serão renderizados na tela: <br>
`import App from './App';
import UserBox from './User';`