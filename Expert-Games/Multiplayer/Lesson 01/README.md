# Jogos Multiplayer - Introdução ao Mirror
------------
### Intrudução
*Falar brevemente da história dos jogos multiplayer.*
* Jogos multiplayer existem desde 1958 com o jogo **Tennis for Two**. Mesmo o jogo não tendo sido lançado, naquela época isto gerou filas quando foi exibido
* Não é possível falar de jogos multiplayer sem citar jogos que marcram gerações como **Mário Kart** e **Street Fighter**, mesmo que ambos sejam jogos que ainda eram jogados no mesmo hardware e com dois controles
* Mas o primeiro jogo multiplayer a ser criado foi de 1984, um jogo pouco conhecido e que não fez muito sucesso o **Islands of Kesmai**. Mesmo não tendo ficado famoso ele abriu as portas para um nova geração de jogos
* Conforme a Internet foi se popularizando vários jogos Online foram surguindo como **Doom**, **Counter Strike**, **Tibia** e **World of Warcraft** que marcaram gerações com uma base enorme de jogadores e muitas experiências divertidas

Agora estaremos aprendendo a fazer os nossos próprios jogos Multiplayer e para nos ajudar nesta tarefa estareos utilizando o [Mirror](https://assetstore.unity.com/packages/tools/network/mirror-129321 "Mirror") um pacote da Unity para desenvolvimento de Jogos em Rede.

### Instalação do Mirror
O passo a passo para a instalação do Mirror é bem simples.
1. Acesse o site a [Assets Store da Unity](https://assetstore.unity.com/ "Assets Store da Unity")
2. Acesse sua conta clicando no botão na parte superior direita da página<br>
[![Sign In 01](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/001.png "Sign In 01")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/001.png "Sign In 01")<br>
[![Sign In 02](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/002.png "Sign In 02")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/002.png "Sign In 02")
3. Agora vá para a caixa de pesquisa e pesquise por **mirror** <br>
[![Search Mirror 001](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/003.png "Search Mirror 001")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/003.png "Search Mirror 001")
4. Adicione o Mirror correto a sua lista de Assets <br>
[![Search Mirror 002](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/004.png "Search Mirror 002")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/004.png "Search Mirror 002")
5. Agora crie um projeto na Unity (como esta aula é apenas para ensinar como instalar e usar o Mirror pdoe ser 3D mesmo, pois alguns dos exemplos do Mirror usa 3D)
6. Dentro do projeto vá em **Window > Package Manger**<br>
[![Open Package Manager](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/005.png "Open Package Manager")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/005.png "Open Package Manager")
7. Na janela do Package Manager altere a listagem para My Assets para ver os assets que você escolhei da Asset Store, então escola o **Mirror**, faça Download e Importe
[![Download&Import Mirror](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/006.png "Download&Import Mirror")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/006.png "Download&Import Mirror")

O Mirror possui alguns exemplos simples de sua utilização para facilitar o seu aprendizado, basta procurar pela pasta de exemplos e abrir. Vamos começar com o exemplo básico para tentar conecar nos computadores uns dos outros.

Antes de dar Play vamos entender um pouco do funcionamento de um jogo em rede. Jogos em rede utilizam a arquitetura Cliente-Servidor, esta arquitetura é bem simples de se entender:
* Temos uma máquina que será o Host/Server/Servidor e irá prover serviços para os clientes
* Temos as máquinas Clientes que irá utilizar os serviços fornecidos pelo Host
* Existe a situação em que um Servidor funciona apenas como Servidor e não é possível jogar através dele, apenas de máquinas clientes. Nessa situação o Servidor recebe um nome especial de Servidor Dedicado. Ele tem melhor performance para suportar os clientes.

Entendida a arquitetura alguém terá que ser o nosso Servidor, mas não se preocupe pois não teremos um servidor dedicado nesta aula, pois não há necessidade.

Escolhido o aluno que irá ser o nosso Servidor ele deverá rodar a cena e clicar no botão **Host (Cliente + Server)** e fora da Unity abrir o **Prompt de Comando do Windows**.  <br> Para que os Clientes possam encontrar o Servidor eles precisam saber onde está o Servidor, mas não é uma informação física (pois o Servidor está claramente na mesma sala) precisamos poder localizar ele na Rede e para isso precisamos do Endereço IP dele.  É aí que o **Prompt de Comando** entra, é nele que nós podemos saber o endereço de IP de um computador, basta utilizar o comando **ipconfig**<br>[![ipconfig](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/007.png "ipconfig")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/007.png "ipconfig")<br>Ao usar esse comando várias informações irão aparecer na tela. O que estamos procurando é o Endereço IP, masi precisamente a versão 4 dele<br>[![ipv4](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/008.png "ipv4")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/008.png "ipv4")<br>
Tendo esta informação agora é só passar para os outros alunos tentarem conectar como Clientes.<br>
Para isso eles devem ir na caixa de texto ao lado do botão **Client** e alterar o texto para que fique igual ao Endereço IP do servidor. Se for o da foto então deve ser ***10.0.0.163*** e então clicar no botão **Client** para iniciar uma conexão como Client.
<br>
[![Client](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/009.png "Client")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/009.png "Client")
<br>
Ah... Se fosse tão simples...

##### Firewall
Se fosse preciso apenas isso para conectar dois computadores a vida dos hackers seria muito fácil, mas existem sistemas de segurança que nos protegem disso. Um deles é o **Firewall** que tem o dever de impedir esse tipo de coisa de acontecer a menos que uma excessão seja criada.<br>
Para configurar o Firewall para que ele permita as conexões entre os jogos precisamos entender um pouco de Redes de Computadores, mas ainda não é tempo disso então basta entender alguns pontos para saber onde devemos liberar para que nosso jogo funcione
* Existem tipos de rede e as que precisamos entender no momento são
 1. Rede Pública: como de shoppings, praças e locais com um grande número de pessoas
 2. Rede Privada: como casas, empresas e *escolas*
* No nosso caso temos um Rede Privada então vamos configurar o Firewall para que ele permita conexões de Rede Privada

Então o responsável pelo servidor deve fazer os seguntes passos:
1. Na pesquisa do Windows procure por Firewall<br>
[![Abrindo Firewall](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/010.png "Abrindo Firewall")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/010.png "Abrindo Firewall")
2.  Logo de primeira é possível ver que todas as proteções estão ativas, então vamos em **Rede Privada**<br>
[![O Firewall](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/011.png "O Firewall")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/011.png "O Firewall")
3. Em rede privada procuramos o botão que ativa a proteção<br>
[![Acessando Configurações de Rede Privada](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/012.png "Acessando Configurações de Rede Privada")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/012.png "Acessando Configurações de Rede Privada")
4. Por fim nós desligamos<br>
[![Desligando o Firewall](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/013.png "Desligando o Firewall")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/013.png "Desligando o Firewall")

* Lembrem de reativar o firewall quando terminar de testar

### Jogando em Rede
Jogar em rede já é possível, mas... e quando estivermos desenvolvendo o projeto e precisamos de um teste rápido? Devemos mesmo fazer um cópia do projeto para outro computador, desativar o Firewall para só então conectar? Mesmo o projeto sendo simples?
<br>
Pois é...
<br><br>
Para resolver esse problema e podermos fazer todos os testes em um único computador precisaremos de um outro pacote da Unity chamado [**ParrelSync**](https://github.com/VeriorPies/ParrelSync "**ParrelSync**") com esse pacote podemos rapidamente fazer e manter uma cópia do projeto no mesmo computador que pode ser aberta em outra Unity para testar localmente.<br>
Os passos para instalação são simples:
1. Vá até essa parte da página<br>
[![Desligando o Firewall](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/014.png "Desligando o Firewall")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/014.png "Desligando o Firewall")
2. Clique em *last release*
3. Faça download do **.unitypackage**
4. Já na Unity vá em **Assets > Import Package > Custom Package**<br>
[![Desligando o Firewall](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/015.png "Desligando o Firewall")](https://github.com/VictorSG-Maceio/AulasExpertGames-v2/blob/main/Lesson1/Screenshots/015.png "Desligando o Firewall")
5. Selecione o pacote do ParrelSync (se ela pedir para atualizar alguma coisa que não seja a versão da Unity pode permitir)

Agora precisamos apenas usar o ParrelSync para criar o clone do projeto.<br>
Para isso vá em: **ParrelSync > Clones Manager > Create New Clone > Open in New Editor**<br>
Esse processo pode demorar um pouco, mas quando começar teremos duas Unity abertas e então poderemos testar. Para esstes vamos utilizar o exemplo do Pong não precisaremos configurar o firewall e nem verificar o IPv4, apenas usar umas das Unity como Server e a outra como Client que irá acessar serviços de **localhost**