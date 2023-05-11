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
    before { host! 'localhost:3000/api/v1' }

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