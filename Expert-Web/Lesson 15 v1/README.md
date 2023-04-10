# Persistindo o Login e criando o Dashboard
Na aula de hoje será aprendido como persistir o login através de uma propriedade chamada sessionStorage, a qual faz com que os dados durem somente o tempo da sessão. O usuário pode mudar de página ou até mesmo ir para outro site que, mesmo assim, as variáveis permanecerão. Elas somente serão apagadas quando o usuário fechar o navegador.<br>


Além disso, nesta aula será aprendido como criar o Dashboard do sistema. Essa página será responsável por exibir todas as receitas e despesas do usuário, e, a partir das informações geradas, um cálculo simples será criado para definir qual o saldo atual do usuário logado.

### SessionStorage
A propriedade **sessionStorage** permite acessar um objeto Storage de sessão para a origem atual. O *sessionStorage* é semelhante ao localStorage (permite armazenar dados de forma simples e sem expiração, ou seja, ficam lá enquanto não forem apagados por código ou pelo próprio navegador). A única diferença é que enquanto os dados armazenados localStorage não têm tempo de expiração, os dados armazenados *sessionStorage* são limpos quando a sessão da página termina. Uma sessão de página dura enquanto o navegador estiver aberto e sobrevive com recarregamentos e restaurações da página. Abrir uma página em uma nova aba ou janela fará com que uma nova sessão seja iniciada com o valor do contexto de navegação de nível superior, que difere de como os cookies de sessão funcionam.<br>
Deve-se notar que os dados armazenados em um sessionStorage ou localStorage são específicos para o protocolo da página.

#### Sintaxe

* Salvar dados para sessionStorage
    * sessionStorage.setItem('key', 'value');
* Obter dados salvos de sessionStorage
    * sessionStorage.getItem('key');
* Remover dados salvos de sessionStorage
    * sessionStorage.removeItem('key');
* Remover todos os dados salvos de sessionStorage
    * sessionStorage.clear();

### Refatorando o Login
A forma que o login estava feito não passou de um simples teste para entender como deveria ser o seu funcionamento. Para melhorar a estrutura interna do código de login, é necessário primeiramente abrir o arquivo Login.js. <br>
Basicamente, 3 informações são essenciais para que seja possível realizar praticamente qualquer requisição no sistema: access-token, client e uid. Essas 3 informações estavam sendo passadas para as demais páginas pela biblioteca de publicação e assinatura baseada em tópicos, chamada PubSubJS, porém essa não é uma forma muito interessante de ser feita. <br>
Ao invés de utilizar o PubSubJS, os 3 cabeçalhos serão armazenados em objetos de sessão denominados token, client e uid, assim como demonstrado a seguir:
```javascript
complete: function(resposta) {
    console.log("Complete!!");
    console.log(resposta.getAllResponseHeaders());
    var obj = guardaDados;

    obj.token = resposta.getResponseHeader('access-token');
    obj.client = resposta.getResponseHeader('client');
    obj.uid = resposta.getResponseHeader('uid');
    setGuardaDados(obj);

    /* 
     * PubSub.publish('access-token', obj.token);
     * PubSub.publish('client', obj.client);
     * PubSub.publish('uid', obj.uid);
     */

    sessionStorage.setItem('token', guardaDados.token);
    sessionStorage.setItem('client', guardaDados.client);
    sessionStorage.setItem('uid', guardaDados.uid);
},
```
Agora que não estamos mais realizando esta publicação podemos remover uma gambiarra que fizemos em Gains e Expenses na unidade passada:
```javascript
headers: {
    "access-token": sessionStorage.getItem('token'), // token1,
    "uid": sessionStorage.getItem('uid'), // uid1,
    "client": sessionStorage.getItem('client'), // client1
},
```
E com isso nós também podemos atualizar o código do *complete* do AJAX:
```javascript
complete: function(resposta) {
    console.log("Complete!!");
    console.log(resposta.getAllResponseHeaders());
    var obj = guardaDados;

    obj.token = resposta.getResponseHeader('access-token');
    obj.client = resposta.getResponseHeader('client');
    obj.uid = resposta.getResponseHeader('uid');
    setGuardaDados(obj);

    /* 
    * PubSub.publish('access-token', obj.token);
    * PubSub.publish('client', obj.client);
    * PubSub.publish('uid', obj.uid);
    */

    sessionStorage.setItem('token', guardaDados.token);
    sessionStorage.setItem('client', guardaDados.client);
    sessionStorage.setItem('uid', guardaDados.uid);
},
```
Vamos remover o código que não precisamo mais, tanto em Gain quanto em Expense<br>
No começo do script:
```javascript
import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';
import CustomInput from './components/CustomInput';
import ManageErrors from './ManageErrors';

// var token1; // esse código pode ser removido ou comentado
// var uid1;
// var client1;
```
Aqui no Table também: 
```javascript
useEffect(() => {
    // esse código pode ser removido ou comentado
    // PubSub.subscribe('access-token', function(topico, token) {
    //     token1 = token;
    // });
    // PubSub.subscribe('client', function(topico, client){
    //     client1 = client;
    // });
    // PubSub.subscribe('uid', function(topico, uid){
    //     uid1 = uid;
    // });
    PubSub.subscribe('atualiza-lista-receitas', function(topico, novaLista){
        setLista(novaLista);
    });
    PubSub.subscribe('erro-validacao-GE', function(topico, erro){
        alert(erro);
    });
});
```

### Criando Dashboard
O Dashboard será basicamente um local no qual será possível observar todas as receitas e despesas daquele usuário, além de informar o saldo atual do mesmo. Ao abrir o arquivo Dashboard.js nos deparamos com um curto trecho de código, que nada mais é que uma exibição de um título chamado Painel de Controle.<br>
Comece criando o arquivo *Dashboard.js*:

```javascript
import React from "react";
import $ from 'jquery';
import ManageErrors from "./ManageErrors";

const Dashboard = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <hr/>
            <h2>Painel de Controle</h2>
        </main>
    );
}
```


Em seguida, duas novas classes serão criadas, denominadas GainDash (conterá todos os códigos relacionados às receitas do usuário) e ExpenseDash (conterá todos os códigos relacionados às despesas do usuário).<br>

GainDash:
```javascript
const GainDash = () => {
    return (
        <div></div>
    );
}
```

ExpenseDash:
```javascript
const ExpenseDash = () => {
    return (
        <div></div>
    );
}
```
O componente Dashboard será exportado por padrão e ele irá renderizar além do H2 uma div com uma tabela e o GainDash e ExpenseDash:

```javascript
const Dashboard = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <hr/>
            <h2>Painel de Controle</h2>
            <div className="table-responsive">
                <h2>Saldo</h2>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <td><b>50,00</b></td>
                        </tr>
                    </thead>
                </table>
            </div>
            <br />
            <GainDash />
            <br />
            <ExpenseDash />
        </main>
    );
}
```

#### Exibindo Receitas
Vamos começar definindo os estados listaGain e guardaDados junto com seus setters. Faremos isso no GainDash:

```javascript
const [listaGain, setListaGain] = useState([]);
const [guardaDados, setGuardaDados] = useState({});
```

Depois criamos uma tabela para exibir os dados das receitas:
```javascript
return (
    <div>
        <h2>Receitas</h2>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Data</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
);
```

