# Reacte Router e Navegação

#### Pré-aula
Para este projeto será preciso que os alunos estejam com o projeto corretamente refatorado usando o *useState* e o *useEffect* para evitar erros que ocorreram nas aulas anteriores.

### O react-router-dom
Essa biblioteca possibilita que o roteamento das páginas seja feito pelo lado do cliente. Como vantagem temos uma aplicação de página única (*Single Page Application*) que realizou apenas a primeira requisição e sempre que o cliente precisa mudar da página a mudança é feita sem a criação de uma nova requisição.
<br>Para que isso seja possível vamos precisar instalar o **react-router-dom** para isso usamos o comando: <br>
```javascript
npm install react-router-dom
```
<br>
Após a instalação não teremos nenhuma outra nova biblioteca a ser instalada hoje, então vamos iniciar o servidor.

### Preparando as rotas
A preparação das rotas é feita no arquivo *index.js* no ponto onde estamos renderizando o componente *<App />* , mas antes disso precisaremos importar algums elementos da *react-router-dom* como na linha abaixo: <br>
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
``` 
Também precisaremos importar os componentes que serão renderizados na tela: <br>
```javascript
import App from './App';
import UserBox from './User';
```
Então vamos remover estas linhas:
```javascript
<React.StrictMode>
	<App />
</React.StrictMode>
```
E utilizaremos o seguinte código: 
```javascript
<BrowserRouter>
	<Routes>
		<Route path="/" element={ <App /> } >
			<Route path='/user' element={ <UserBox /> } />
		</Route>
	</Routes>
</BrowserRouter>
```
Explicando:
* BrowserRouter: este componente este componente armazena o local atual na barra de endereços do navegador utilizando URLs limpos e navega usando a pilha de histórico integrada do navegador.
* Routes: este componente irá armazenar as rotas. Elas podem ser aninhadas uma na outra fazendo com que as rotas senha renderizadas dentro das rotas pai
* Route: define o caminho de uma rota e qual elemento será renderizado por ela. No nosso caso teremos a rota *App* que irá servir de Layout base para nossas outras rotas e dentro dela iremos renderizar os outros componentes como o *UserBox*.
Após definirmos como serão nossas rotas se formos no navegador teremos que apenas o nosso Layout funcionando como sempre, mas isso não quer dizer que estamos conseguindo mudar entre as rotas.<br>
Para testar se está realmente funcionando vamos alterar a linha no arquivo App.js e remover o componente *UserBox*:
```javascript
<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
	<br/>
	<UserBox /> // <- remova ou comente esta linha
</main>
```
Agora testamos novamente para ver o resultado.
<br>Veremos que as rotas não estão funcionando ainda. O que acontece agora é que nada aparece. O que faz sentido pois não indicamos onde o componente filho seria renderizado.
<br>Para resolver isso vamos até a linha onde estava o componente *UserBox* e adicionar o código:
```javascript
<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
	<br/>
	<Outlet /> {/*antes aqui estava o componente UserBox*/}
</main>
```
Caso o Outlet não tenha sido importado pelo autocompletar do VS Code então faça isso manualmente como no código abaixo:
```javascript
import { Outlet } from 'react-router-dom';
```
Entretando ainda não está funcionando, mas desta vez o problema são os nossos links. Se verificarmos direitinho eles estão nos levando até arquivos estáticos que não fazem parte de nossas rotas.
<br>Porém só alterar o parâmetro href da tag link não irá resolver o nosso problema, precisamos de outro componente para fazer a mudança entre as rotas afinal não queremos que uma nova requisição ocorra, ou a ideia de uma página única não vai acontecer.
<br>Como exemplo das mudanças vou apresentar apenas a mudaça com a tag que nos lega até **Cadastrar Usuário** que no momento está da seguinte forma:
```javascript
<a className="nav-link" href="/user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Cadastrar Usuário <span className="sr-only">(current)</span>
                  </a>
```