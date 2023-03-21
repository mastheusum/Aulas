# GDevelop 5

### Resumo
Esta aula será para apresentar o GDevelop então teremos pouca coisa que realmente chame a atenção dos alunos durante a aula. Para resolver este problema é recomendado realizar brincadeiras que chamem a atenção do aluno para a ferramenta. <br>Apresentar 2 ou 3 jogos feitos na ferramenta podem animar, ainda mais se tiverem sido feitos na unidade.<br>Não será ensinado a instalar o GDevelop durante a aula então envie por e-mail o link para download e esteja disponível para possíveis erros, apesar de imporvável que isto ocorra em uma ferramenta tão recente é bom estar do lado seguro.<br>Também não será ensinado a criar um projeto nesta aula, será apenas aberto um projeto já existente.

### Introdução ao GDevelop
O GDevelop é uma *Game Engine* Profissional de desenvolvimento de jogos, ou seja uma ferramenta feita para facilitar o desenvolvimento de aplicativos e jogos. <br>Ele é uma ferramenta de código aberto o que quer dizer que qualquer um pode desenvolver uma novas ferramentas e funcionalidade para ele. A versão que utilizaremos é o **GDevelop 5**.

### Interface do GDevelop
##### Tela inicial
[![001](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/001.png "001")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/001.png "001")<br>
Na tela inicial é onde podemos criar nossos projetos, escolher idioma, carregar projetos salvos e várias outras coisas.
##### Gerente de Projeto
Quando um projeto é aberto você pode clicar no ícone superior esquerdo para acessar o **Gerente de Projetos**.
<br>
[![002](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/002.png "002")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/002.png "002")<br>
O Gerente de Projetos mostra a estrutura do seu projeto
<br>
[![003](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/003.png "003")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/003.png "003")<br>
Para sair do Gerente de Projetos basta clicar fora dele.
##### Scene Editor
Ao abrir uma cena (ou um layout externo), um editor de cena é aberto. É aqui que você pode projetar e criar os níveis e menus do jogo criando e adicionando objetos à cena. A primeira cena da lista é a primeira cena carregada quando o jogo é iniciado.
<br>
[![004](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/004.png "004")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/004.png "004")<br>
O quadrado preto representa a janela do seu jogo, mas isto não quer dizer que ela será pequena, é apenas para que você saiba quando um objeto irá aparecer dentro da tela e quando estará fora dela.
##### Events Editor
O editor de eventos é o local ondo você poderá fazer o jogador interagir com os outros objetos do jogo e fazer coisas novas acontecerem. Nele é possível programar visualmente seu jogo sem nenhum conhecimento específico em programação.
<br>
[![005](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/005.png "005")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/005.png "005")<br>
##### Top Menus
Nos menus superiores podemos fazer várias coisas, entre elas publicar nossos jogos.
<br>
[![006](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/006.png "006")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/006.png "006")
### Behaviors
A palavra *behaviour* significa comportamento, mas no caso do GDevelop ela significa muito mais que isso, os *behaviours* são pequenos "códigos" que já vem prontos e servem para agilizar o desenvolvimento de jogos, geralmente eles são feitos baseados em códigos que são muito usados. Por exemplo, muitas pessoas começam sua carreira desenvolvendo jogos de plataforma, por conta disso existem *behaviours* para as plataformas e para o personagem que anda e pula pelo cenário.<br>Existem dois tipos de *behaviors* os que foram desenvolvidos por programadores do própro GDevelop e que por isto já vem instalados e os que foram criados por usuários como você, alguns do segundo tipo estão disponíveis para download.
<br>
[![010](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/010.png "010")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/010.png "010")<br>
Para que possamos aprender sobre *behaviors* vamos precisar de um projeto, então abra o projeto que foi colocado para download na unidade.<br>Após aberto o projeto vá até o Gerente de Projetos e escolha a cena de nome **Platformer**<br>
Se rodarmos o jogo veremos que nada acontece.<br>
Vamos abrir o nosso Player dando um duplo clique nele e então uma nova janela irá abrir
<br>
[![011](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/011.png "011")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/011.png "011")<br>
Vá em *behaviors*
<br>
[![012](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/012.png "012")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/012.png "012")<br>
Clique em *Add Behavior*
<br>
[![009](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/009.png "009")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/009.png "009")<br>
Então selecione *Platformer Character*
<br>
[![013](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/013.png "013")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/013.png "013")<br>
Agora é só clicar em **Apply** e então rodar o jogo!<br>
E Pum! O personagem atravessa o chão...<br>
Isso acontece pois nós adicionamos gravidade para o personagem cair, mas não adicionamos o comportamento *Platform* ao piso para que ele possa servir de plataforma.<br>
Tente adicionar esse *behavior* por conta própria e então teste.
Outros *behaviors* úteis são:
* *Destroy when outside of the screen*: que destroy automaticamente o objeto quando ele sair da tela.
* *Draggable Object*: que nos permite arrastar objetos. É muito útil para vários projetos, mas até mesmo em projetos simples como Damas e Xadrez ele é útil
* *Top-Down Movement (4 or 8 Directions)*: Principal comportamento para jogos Top-Down
* *Linear Movement*: útil quando se tem um objeto que se move em linha reta como um projétil/tiro
* *Stay on Screen*: este é útil em quase todos os projetos pois ele força os objetos a permanecerem dentro da tela

Além de se adicionar *behaviors* é possível configurar para que eles funcionem de outros formas. <br>No caso do **Platform** nós podemos pular para cima dele, mas não podemos fazer isto tentando atravessar ele pois nosso Player vai bater com a cabeça, mas se formos no Behavior e configurarmos sua propriedade Type para *Jumptrhu Platform* então será possível pular através das plataformas.
<br>
[![014](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/014.png "014")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/014.png "014")
<br>
Para configurarmos a escada seguiremos a mesma ideia. Vamos adicionar a ela o *behavior* Platform mas iremos modificar a sua propriedade **Type** para *Ladder*
<br>
[![015](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/015.png "015")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/015.png "015")
<br>
### Utilizando Behaviors da Comunidade
Para utilizar behaviours da comunidade vamos utilizar outra cena do projeto em que você vem trabalhando, para abrir esta outra cena clique no botão project manager e depois na cena *Racer*.
<br>
[![016](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/016.png "016")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/016.png "016")
<br>
Vamos adicionar o behavior **Linear Movement** ao Opponent. Abra o Opponent, vá em Behaviors e depois em *Search New Behaviors* e então pesquisamos por **Linear Movement** e então selecionamos ele.
<br>
[![017](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/017.png "017")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/017.png "017")
<br>
Agora clicamos em **Install in Project** e então ele irá aparecer na nossa lista de behaviors e então podemos escolher ele para o Opponent.
<br>
[![018](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/018.png "018")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/018.png "018")
<br>
Com ele selecionado vamos definir o **Speed on X axis** para 250 e então aplicar.<br>
Para o nosso Player iremos adicionar o behavior *Top-Down Movement* e testar. 
<br>
[![019](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/019.png "019")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/019.png "019")
<br>
Só que nessa velocidade nós não podemos ganhar do inimigo...<br>
Então vamos alterar a propriedade *Max Speed* para 1000, aplicar e testar novamente
<br>
[![020](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/020.png "020")](https://github.com/mastheusum/Aulas/blob/main/Level%201/Lesson%209/Screenshots/020.png "020")
<br>
