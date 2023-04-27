# Estrutura da API e versionamento

## Pré-aula
Nesta aula estamos presumundo que o ambiente está corretamente instalado, configurado e testado, incluindo a criação das contas dos alunos no GitHub.

## O que é uma API
API é o acrônimo para Application Programming Interface, ou em português Interface de Programação de Aplicações.

Uma API é um conjunto de rotinas e padrões de programação para acesso de um aplicativo ou plataforma baseada na web, ou seja, trata-se de uma "ponte" que conecta aplicações para que seja possível utilizar suas funcionalidades sem conhecer detalhes de sua implementação.

APIs são criadas quando empresas sentem necessidade de que outros desenvolvedores criem produtos associados ao seu serviço.

## Padronização de comunicação
A partir do momento em que a API permite a intercomunicação entre usuários e aplicações é fundamental ficar atento a padronização da comunicação, a fim de que fique fácil a representação e compreensão por humanos.

Alguns exemplos de padrões para trocas de dados são:
- XML
- JSON
- YAML

## REST
*Representation State Transfer* é um estilo de se arquitetura para web frequentemente usado em serviços web.

O REST não impõe nenhuma regra para sobre como deve ser implementado, apenas coloca princípios que quando seguidos permitem a criação de um projeto com interfaces bem definidas. Permitindo, desta forma, que aplicações se comuniquem.

## Características do REST
* Usa o protocolo HTTP de forma explicita e representativa para se comunicar. O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar uma ação a ser executada pra um dado recurso. Estes métodos são comumente chamados de Verbos:
  * GET: através deste método é possível solicitar a representação de um recurso específico.
  * POST: método utilizado para criar um recurso
  * PUT/PATCH: este método substitui a atual representação de um recurso por um novo recurso
  * DELTE: remove um recurso específico.
* Utiliza os padrões URI, *Uniform Resource Identifier* (Identificador Uniforme de Recurso). É um conjunto de caracteres utilizado para identificar um recurso na internet.
  * URL significa *Uniform Resource Locator* (Localizador Padrão de Recurso)
* Não possui estado entre as comunicações, ou seja, cada comunicação é independente e padronizada precisando passar toda a informação .
* Ele deve facilitar o cache do conteúdo no cliente
* Deve ser clara a definição do que faz parte do cliente e do servidor. O cliente não precisa saber como o servidor foi implementado.
* Permite o uso de camadas também facilitando a escalabilidade, confiabilidade e segurança.

## Configurando a estrutura de uma API
Comece criando um projeto rails de nome ProfitManager_API usando como banco de dados o PostgreSQL e passando o parâmetro para a criação de uma API.

O comando fica da seguinte forma:
```shell
rails new ProfitManager_API -d postgresql --api
```

Espere a criação do projeto e então configure o arquivo *config/database.yml* para que ele possa acessar o banco de dados corretamente
```yaml
default: &default
  adapter: postgresql
  encoding: unicode
  # For details on connection pooling, see Rails configuration guide
  # https://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: localhost
  username: <seu usuário do PG>
  password: <senha do seu usuário>
```

Após isto configure o banco de dados com o comando **rails db:create db:migrate** e então rode e acesse o servidor.

## Configurando as rotas
Vamos começar pelo versionamento do código então vá até a pasta *controllers* e crie uma nova pasta chamada **api** detro desta pasta colocaremos 
todos os controllers referentes a nossa API mas para que possamos acessar os controllers que serão colocar nesta pasta precisaremos de um 
namespace no nosso arquivo de rotas para que o Rails entenda que existe uma pasta que deve ser acessada para encontrar os controllers.

Caso não queria criar o namespace lembre-se de colocar para cada action do nosso arquivo de rotas o nome da pasta antes, mas como isto dá muito
trabalho é mais fácil criar o namespace.

Então vamos configurar as rotas para a padronização da nossa API segundo o padrão REST recomenda então abra o arquivo **config/routes.rb** 
e configure-o como abaixo:

```rb
Rails.application.routes.draw do
  namespace :api do
  end
end
```

Visto que a nossa aplicação se comunicará através de JSON podemos definir isso como padrão para este namespace da seguinte forma  

```rb
Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
  end
end
```

## Versionamento da API
Para o versionamento da nossa API podemos seguir um passo 



