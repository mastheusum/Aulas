# Testes Automatizados

## Pré-aula
Esta aula continua de onde o projeto foi finalizado na aula anterior. Como nada novo foi instalado o máximo necessário será utilizar o **rails s** para ver o status do servidor (se está rodando corretamente)
Caso não esteja use:

- bundle install
- altere o usuário e senha do arquivo **config/database.yml**
- rails db:create
- rails db:mgrate

## TDD - Uma prática popular
Uma prática comum entre os desenvolvedores de software atualmente é o TDD, Test Drive Development, ou em português Desenvolvimento Orientado por Testes. O conteito é bem simples de se entende, basta criar 
os testes antes mesmo de escrever o código.

Isto pode parecer estranho inicialmente, mas a ideia é a seguinte:

1. Criamos os testes que, supondo que o projeto está corretamente implementado, deverão passar
2. Realizamos os testes antes do código estar implementado. Como ainda não temos código eles devem falhar
3. Criamos o código que irá passar em cada teste sem se preocupar tanto com a implementação. Passar no teste é o que importa
4. Realizamos os testes novamente e assim passamos neles.
5. Recriamos os testes para exigirem mais eficiência do código ou para falharem nos pontos onde sabemos que ele irá apresentar falhas com a implementação atual
6. Realizamos os testes novamente e falharemos em alguns pontos
7. Refatoramos o código para que passe nos novos testes.
8. O ciclo se repete a partr do tópico **5**

A prática de TDD agrega benefícios de desenvolvimento

- Benefícios na qualidade do produto. 
- Problemas com atualizações ou criação de novas versões de um produto são amenizados, pois, com o grande número de testes automatizados gerados no momento do 
desenvolvimento garantem maior segurança para os desenvolvedores na hora de realizar mudanças.
- Podem ser executados a qualquer momento ppelo desenvolvedor e a maioria roda em questão de segundos
- Ajuda a garantir que os reuisitos funcionem como esperado
- Auxilia na identificação de problemas no código das implemetações

> Dica:
> se está difícil escrever um teste automatizado, é porque provavelment o código de produção está muito complicado

Para utilizar-mos o TDD precisaremos da **gem rspec-rails**, então adicione-a ao Gemfile e use o comando **bundle install** após isto use o comando **rails g rspec:install**

Caso esteja utilizando alguma versão do Linux como SO será preciso instalar um paco adicional que é o **rubygem-rspec-core**

Outra gem que será útil para os testes é a *Faker* essa gem gera aleatóreamente para nós nomes, emails, endereços e várioas outras coisas que pedirmos e será util para testarmos cadastro, login e outras coisas então adicione-a ao Gemfile uma linha com **gem 'faker'** e use o **bundle install**

## TDD x Tempo
A ideia é que boa parte do tempo seja gasto com os testes para que não seja preciso gastar esse tempo testando o código manualmente depois.

## Criando Model para Usuários
Para criar o usuário usaremos o **Devise** então vá até o Gemfile e adicione uma linha no final do arquivo contendo **gem 'devise'** e depois use o comando *bundle install*

Agora que temos o Devise vamos instalar ele na nossa API com o comando **rails generate devise:install** e então criar o nosso model com o comando **rails g devise user** e então finalizamos com o **rails db:migrate**

vários arquivos serão criados e entre eles teremos os arquivos de teste que no momento não possuem testes (ainda), mas já podemos realizar o testes com o comando **rails rspec** como saída teremos um exemplo, zero falhas e uma pendência de que o teste ainda não foi implementado.

## Criando um teste
Testes funcionam com espectativas, então é executada uma ação e é experado que algo predeterminado aconteça como resultado. 

Vamos começar apagando o arquivo de teste **spec/models/user_spec.rb** pois estaremos testando apenas as requisições então crie o arquvo **spec/request/requests/api/v1/user_spec.rb** com o conteúdo:

```rb
require 'rails_helper'

RSpec.describe 'Users API', type: :request do
    
end
```

Agora vamos adicionar algums elementos necessários para os testes:

```rb
require 'rails_helper'

RSpec.describe 'Users API', type: :request do

    # o código abaixo cria um novo usuário utilizando a gem Faker para o e-mail
    let(:user) {User.create(
        email: Faker::Internet.email,
        password: '123456',
        password_confirmation: '123456'
    )}
    # a linha abaixo pega o id do usuário criado anteriormente
    let(:user_id) { user.id }

    # antes de qualquer grupo de testes define para onde será feita a requisição
    before { host: 'localhost:3000/api/v1' }

    # descreve um grupo de testes
    describe 'GET user/:id' do

    end

end
```

Definidos estes elementos vamos criar um teste dentro do grupo de testes:

```rb
require 'rails_helper'

RSpec.describe 'Users API', type: :request do

    # o código abaixo cria um novo usuário utilizando a gem Faker para o e-mail
    let(:user) {User.create(
        email: Faker::Internet.email,
        password: '123456',
        password_confirmation: '123456'
    )}
    # a linha abaixo pega o id do usuário criado anteriormente
    let(:user_id) { user.id }

    # antes de qualquer grupo de testes define para onde será feita a requisição
    before { host: 'localhost:3000/api/v1' }

    # descreve um grupo de testes
    describe 'GET user/:id' do
    
    	# de qualquer teste nesse grupo será definido o cabeçalho da requisição e será feita uma requisição do tipo GET para /users passando o ID de um user
        before do
            headers = { 'Accept' => 'application/json' }
            get "/users/#{user_id}", params: {}, headers: headers
        end

        # contexto do teste
        context "when the user exists" do
            # o que é experado nesse teste
            it "returns the user" do
                user_response = JSON.parese( response.body )
                # para passar a expecttva é que o id do usuário seja equivalente ao id do usuário armazenado no início do arquivo
                expect(user_response["id"]).to eq(user_id)
            end
        end

    end

end
```

Se testarmos com o comando **rails rspec** teremos um teste falho. Isto faz sentido pois não temos um controller User com action que receba um ID de usuário e nenhuma rota foi adicionada ao nosso arquivos de rotas ainda.





