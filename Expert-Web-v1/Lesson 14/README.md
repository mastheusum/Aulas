# Realizando Login e Cadastro de Receitas

#### Pré-aula
Neste ponto é esperado que no seu projeto já esteja feito o conteúdo que foi pedido como atividade de casa para os alunos.

### Preparando o Login
Relembrando que já temos os templates das páginas que estamos utilizando neste projeto o que devemos fazer é criar um novo Script chamado *Login.js* que irá conter o conteúdo da página de login.<br>
Vamos começar com a estrutura básica do componente:
```javascript
import React, { useState, useEffect } from 'react';

function Login() {
   return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">						
         <br />         
         <div>						
            <h1 class="h2">Login</h1>						
            <form>
               <div class="form-group">
                  <label for="formGroupExampleInput">E-mail</label>
                  <input type="email" class="form-control" id="email" name="email" value=""  placeholder="E-mail">
               </div>
               <div class="form-group">
                  <label for="formGroupExampleInput2">Senha</label>
                  <input type="password" class="form-control" id="password" name="password" value="" placeholder="Senha">
               </div>
               <button type="submit" class="btn btn-primary">Entrar</button>
            </form>						
         </div>         
      </main>
   );
}

export default Login;
```
Entretanto para podermos testar isto vamos adicionar a página de login às nossas rotas no arquivo *index.js*. O arquivo ficará assim:
```javascript
<BrowserRouter>
   <Routes>
      <Route path="/" element={ <App /> } >
         <Route path='/user' element={ <UserBox /> } />
         <Route path='/sign_in' element={ <Login /> } />
      </Route>
   </Routes>
</BrowserRouter>
```
E para finalizar iremos colocar o link dele no nosso *App.js* para funcionar. Basta localizar onde está o hyperlink dele e então modificar para usar o componente **Link** do react-router-dom que foi mostrado na aula passada. Resutando no código abaixo:
```javascript
<li className="nav-item">
   <Link className="nav-link" to="/sign_in">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
      Login
   </Link>
</li>
```
Agora testamos a rota para ver se está funcionando corretamente.<br>
Visto o resultado vamos precisar fazer com que o Login funcione corretamente então vamos fazer novas mudanças nos arquivos. Primeiramente vamos adicionar novos imports:
```javascript
import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';
import CustomInput from './components/CustomInput';
import ManageErrors from './ManageErrors';
```
Adicionados os novos imports vamos adicionar os estados:
```javascript
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [guardaDados, setGuardaDados] = useState({});
```
E então vamos criar uma nova função para enviar o nosso formulário com o AJAX:
```javascript
function enviaForm(evento) {
   evento.preventDefault();
   console.log("dados sendo enviados...");

   $.ajax({
      url: "https://fase08profitmanager-production.up.railway.app/api/v2/auth/sign_in",
      
      contentType: 'application/json',
      dataType: 'json',
      accept: 'application/json',

      type: 'post',
      data: JSON.stringify(
         {
            email: email,
            password: password
         }
      ),

      success: function(resposta) {
         console.log("Sucesso!");
         console.log(resposta);
         alert('Login efetuado com sucesso!');
      },

      complete: function(resposta) {
         console.log("Complete!!");
         console.log(resposta.getAllResponseHeaders())
      },
      
      error: function(resposta) {
         if (resposta.status === 422) {
            new ManageErrors().publishErrorsValidation(resposta.responseJSON);
         }
      }
   });
}
```
Caso o login seja efetuado com *sucesso* vamos apenas eviar um alerta informando essa situação. E no caso de ocorrer um *erro*, vamos tratar este erro com um novo método do ManageErros que iremos preparar daqui a pouco.<br>
No caso do *complete* vamos precisar armazenar alguns dados referentes a sessão para que possamos realizar as operações que um usuário cadastrado pode realizar, como cadastrar receitas e despesas. Então vamos fazer algumas mudanças neste código:
```javascript
complete: function(resposta) {
   console.log("Complete!!");
   console.log(resposta.getAllResponseHeaders());
   var obj = guardaDados;
   obj.token = resposta.getResponseHeader('access-token');
   obj.client = resposta.getResponseHeader('client');
   obj.uid = resposta.getResponseHeader('uid');
   setGuardaDados(obj);

   PubSub.publish('access-token', obj.token);
   PubSub.publish('client', obj.client);
   PubSub.publish('uid', obj.uid);
},
```
Note que estamos usando o PubSub nos cabeçalhos que armazenamos. A ideia é que as outras páginas também tenham esta informação armazenada.<br>
Antes de irmos ao ManageErrors precisamos fazer algumas alterações no formulário para que ele use o nosso CustomInput e para que execute o enviaForm que acabamos de criar.
```javascript
<form onSubmit={enviaForm} method="post">
   <div class="form-group">
      <CustomInput type="email" id="email" label="E-mail" 
         name="email" placeholder="E-mail" 
         value={email} onChange={e => setEmail(e.target.value)}/>
   </div>
   <div class="form-group">
      <CustomInput  type="password" id="password" label="Senha" 
         name="password" placeholder="Senha"
         value={password} onChange={e => setPassword(e.target.value)}/>
   </div>
   <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```
No *ManageErrors.js* vamos adicionar uma nova função para cuidar dos erros:
```javascript
publishErrorsValidation(errors) {
   for (var i = 0; i < errors.errors.lenght; i++) {
      var erro = errors.errors[i];
      console.log(erro);
      PubSub.publish('erro-validacao-login', erro);
   }
}
```
Agora precisamos tomar alguma ação na nossa página de login quando o erro de validação for enviado e para isso usaremos o *useEffect* que colocaremos antes da função *enviaForm*:
```javascript
useEffect(() => {
   PubSub.subscribe('erro-validacao-login', function(topico, erro) {
      alert(erro);
   });
});
```
com isto podemos testar o Login tanto para sucesso quanto para erro.

### Preparando o Formulário de Cadastro de Receitas
Começamos criando o arquivo *Gain.js* que irá gerenciar as receitas e nele teremos 3 componentes:
```javascript
import React from 'react';

function GainForm() {}

function GainTable() {}

function GainBox() {}

export default GainBox;
```
Agora vamos ver adicionar o HTML de cada um destes componetentes começando do primeiro e lembrando que esse código já existe no template que baixamos, assim nos casos anteriores.<br>
GainForm:
```javascript
function GainForm() {
   return (
      <div style={{marginTop: "20px;"}}>						
         <h1 class="h2">Cadastro de Receitas</h1>						
         <form>
            <div class="form-group">
               <label for="formGroupExampleInput">Descrição</label>
               <input type="text" class="form-control" id="description" name="description" value=""  placeholder="Descrição da Receita"/>
            </div>
            <div class="form-group">
               <label for="formGroupExampleInput">Valor</label>
               <input type="number" class="form-control" id="value" name="value" value=""  placeholder="Valor"/>
            </div>
            <div class="form-group">
               <label for="formGroupExampleInput2">Data</label>
               <input type="date" class="form-control" id="date" name="date" value="" placeholder="Data"/>
            </div>
            <div class="form-group">
               <label for="formGroupExampleInput2">Usuário</label>
               <input type="text" class="form-control" id="user" name="user" value="" placeholder="Usuário"/>
            </div>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
         </form>						
      </div>
   );
}
```
GainTable:
```javascript
function GainTable() {
   return (
      <div class="table-responsive" style={{marginTop: "20px;"}}>
         <h2>Receitas</h2>
         <table class="table table-striped table-sm">
               <thead>
                  <tr>
                     <th>Descrição</th>
                     <th>Valor</th>
                     <th>Data</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Salário</td>
                     <td>100,00</td>
                     <td>22/02/2019</td>
                  </tr>							
               </tbody>
         </table>
      </div>
   );
}
```
GainBox:
```javascript
function GainBox() {
   return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
         <br/>
         <GainForm/>
         <br/>
         <GainTable/>
      </main>
   );
}
```
Ao final do código tome cuidado com a propriedade *style* pois no react ela deve receber um objeto como ocorre no código acima.<br>
Agora vamos adicionar a rota e criar o link assim como fizemos com a página de login.<br>
Como esta parte já foi feita antes não irei apresentar o código, apenas fica como anotação que o link para a página e de receitas é **/gains**.<br>
Agora vamos novamente adicionar os importas que estaremos usando:
```javascript
import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';
import CustomInput from './components/CustomInput';
import ManageErrors from './ManageErrors';
```
Após isto começaremos pelo formulário. Vamos criar seus estados:
```javascript
const [lista, setLista] = useState([]);
const [description, setDescription] = useState('');
const [value, setValue] = useState('');
const [date, setDate] = useState('');
const [guardaDados, setGuardaDados] = useState({});
```
Agora vamos aplicar os nossos *CustomInputs*:
```javascript
return (
   <div style={{marginTop: "20px"}}>
      <h1 className="h2">Cadastro de Receitas</h1>						
      <form>
            <div className="form-group">
               <CustomInput  type="text" id="description" label="Descrição" 
                  name="decription" placeholder="descrição"
                  value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
               <CustomInput  type="number" id="value" label="Valor" 
                  name="value" placeholder="valor"
                  value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="form-group">
               <CustomInput  type="date" id="date" label="Data" 
                  name="date" placeholder="data"
                  value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>						
   </div>
);
```
Testamos os imputs para ver se estão funcionando corretamente e então vamos programar o método enviaForm para a requisição de cadastrar um novo usuário:
```javascript
function enviaForm(evento) {
   evento.preventDefault();
   console.log('dados de receita sendo enviados...');

   $.ajax({
      url: "https://fase08profitmanager-production.up.railway.app/api/v2/gains",

      contentType: 'application/json',
      dataType: 'json',
      accept: 'application/json',

      type: 'post',
      data: JSON.stringify(
         {
            description: description,
            value: value,
            date: date
         }
      ),
   });
}
```
Neste ponto precisamos resolver o problema do cabeçalho da requisição, pois é nele que estamosi informando a quem pertence esta receita. Para começar vamos criar algumas variáveis fora do componente, logo após os imports:
```javascript
var token1;
var uid1;
var client1;
```
E então usamos estas variáveis na criação do nosso cabeçalho na nossa requisição:
```javascript
headers: {
   "access-token": token1,
   "uid": uid1,
   "client": client1
}
```
E então continuamos para a definição do *success* onde vamos pegar os dados da resposta e adicionar a lista que usaremos na nossa tabela:
```javascript
success: function(resposta) {
   console.log("sucesso");
   console.log(resposta);

   var obj = guardaDados;
   $.each(resposta.data, function(index, value){
      obj[index] = value;
   });
   setGuardaDados(obj);

   setTimeout(function(){
      var novaLista = lista;
      novaLista.push(guardaDados);

      PubSub.publish('atualiza-lista-receitas', novaLista);
      
      setDescription('');
      setValue('');
      setDate('');
      setGuardaDados({});
   },10);
}
```
A função complete mais uma vez pegará os dados do cabeçalho da requisição e os deixará disponíveis.
```javascript
complete: function(resposta) {
   console.log('complete!');
   console.log(resposta);

   var obj = guardaDados;
   obj.token = resposta.getResponseHeader('access-token');
   obj.client = resposta.getResponseHeader('client');
   obj.uid = resposta.getResponseHeader('uid');
   setGuardaDados(obj);

   PubSub.publish('access-token', obj.token);
   PubSub.publish('client', obj.client);
   PubSub.publish('uid', obj.uid);
},
```
Na função error duas verificações devem ser feitas: a primeira validará se o usuário está logado no sistema, e a segunda se as informações inseridas no formulário são válidas.
```javascript
error: function(resposta) {
   console.log('ERRO!');
   console.log(resposta);

   if (resposta.status === 401){
      new ManageErrors().publishErrorsValidation(resposta.responseJSON);
   }
   if (resposta.status === 422){
      new ManageErrors().publishErrorsGE(resposta.responseJSON);
   }
}
```
Apesar de tudo isso ainda receberemos o código 401 quando enviarmos os dados da nova receita, mesmo que corretos. Isso indica que não temos autorização suficiente para esta ação. Iremos corrigir isto no componente *GainTable*<br>
Lembre-se de adicionar o enviar form ao formulário!

### Preparando Tabela de Receitas
No caso da nossa tabela de receitas vamos precisar apenas de uma variável para a lista de receitas:
```javascript
const [lista, setLista] = useState([]);
```
Após a criação da variável vamos usar o *useEffect* para atualizar os dados da lista e também para manter atualizado os dados necessários para o cabeçalho usado no cadastro de novas receitas:
```javascript
useEffect(() => {
   PubSub.subscribe('access-token', function(topico, token) {
      token1 = token;
   });
   PubSub.subscribe('client', function(topico, client){
      client1 = client;
   });
   PubSub.subscribe('uid', function(topico, uid){
      uid1 = uid;
   });
   PubSub.subscribe('atualiza-lista-receitas', function(topico, novaLista){
      setLista(novaLista);
   });
   PubSub.subscribe('erro-validacao-GE', function(topico, erro){
      alert(erro);
   });
});
```
Com isso não apenas atualizamos a tabela de receitas cadastradas durante a sessão como também pegamos os dados necessário para realizar operações na API como *token*, *client* e *UID*. <br>
Agora que temos isso feito vamos apenas alterar a tabela para que os dados presentes na nossa lista seja mapeados para ela:

```javascript
function GainTable() {
   return (
      <div class="table-responsive" style={{marginTop: "20px;"}}>
         <h2>Receitas</h2>
         <table class="table table-striped table-sm">
               <thead>
                  <tr>
                     <th>Descrição</th>
                     <th>Valor</th>
                     <th>Data</th>
                  </tr>
               </thead>
               <tbody>
                    {
                        lista.map(function(gain){
                            return(
                                <tr key={gain.id}>
                                    <td>{gain.description}</td>
                                    <td>{gain.value}</td>
                                    <td>{gain.date}</td>
                                </tr>	
                            );
                        })
                    }						
                </tbody>
         </table>
      </div>
   );
}
```

Teste o cadastro de receitas e veja o resultado!<br>
Para finalizar precisamos construir o método *publicshErrorsGE* que estamos usando no cadastro, mas que ainda não foi criado em *ManageErrors*.<br>
No script *ManageErrors.js* vamos adicionar o seguinte método:

```javascript
publishErrorsGE(errors) {
   for (var i = 0; i < errors.errors.lenght; i++) {
      var erro = errors.errors[i];
      console.log(erro);
      PubSub.publish('erro-validacao-GE', erro);
   }
}
```
Com isso finalizamos o conteúdo de hoje e fica para casa fazer o cadastro de Despesas (Expenses.js).









