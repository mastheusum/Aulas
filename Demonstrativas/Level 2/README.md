# Level 2

#### Pré-aula
Equipamentos necessários:
* Godot 3.5.x
* Assets encontrados no [portal](https://portal.supergeeks.school/myclassroom/1312/2817/17830 "portal") (é preciso estar logado)
Para esta aula abra o projeto na Godot e deixe aberta a cena *Game*.

### Apresentação
Neste ponto da aula é importante se apresentar e conhecer o aluno, descobrir algumas coisas:
* Onde ele estuda: amigos dele já podem ser alunos da escola
* Jogos que ele gosta: saber suas influências ajuda a gerar proximidade com o aluno
* Canais do YouTube que ele segue: mesmo motivo do anterior
* Veja o interesse dele por programação ou desenvolvimento de jogos

### Início da aula
Comece apresentando a ele a Godot.<br>
Explique como ela monta suas cenas. Exemplo:
```
A Godot monta seus jogos como se montasse algo com peças de lego, onde é possível montar coisas incríveis juntando peças menores e mesmo as partes maiores podem ser apenas uma pequena parte de uma ainda maior.
Cada peça tem sua função para que o todo funcione corretamente.
Cada peça será chamada de Node, como no caso do World, TileMap e Background.
```
Explique as abas da interface da Godot:
* Scenes (canto superior esquerdo): aqui é onde vemos todas as peças que compõem a nossa cena
* File System (cando inferior esquerdo): aqui é onde vemos as pastas e arquivos que compõem a nossa cena
* Inspector (lado direito): aqui é onde vemos os detalhes do Node/Peça que estamos selecionando
* A parte central é onde montamos a nossa cena

### Montando o Personagem
Para a montagem do personagem basta seguir os seguintes passos:<br>
Selecione o Node/Peça onde deseja encaixar o novo Node/Peça e clique no botão de ![Adicionar Node](https://github.com/mastheusum/Aulas/blob/main/Demonstrativas/Level%202/Screenshoots/003.png "Adicionar Node") no topo da aba para escolher o Node/Peça que deseja encaixar.<br>
Então siga os passos abaixo:
1. Adicione um *KinematicBody2D* como filho do *World*
2. Renomei-o para *Player*
3. Adicione um *Sprite* como filho do *Player*
4. Escola uma imagem na pasta **Sprites/Player** para ser o seu personagem
5. Arraste esta imagem para o Node/Peça *Sprite*
6. Escolha a opção *Texture*
7. Selecione o *Player* e marque a opção *Make object children are not Selectable*: ![Quadrado com pontinhos](https://github.com/mastheusum/Aulas/blob/main/Demonstrativas/Level%202/Screenshoots/000.png "Quadrado com pontinhos")
7. Posicione o *Player* sobre a plataforma (é só arrastar)
8. elecione o *Player* e clique no pergaminho que existe no topo da aba *Scene*: ![Adicionar Script](https://github.com/mastheusum/Aulas/blob/main/Demonstrativas/Level%202/Screenshoots/001.png "Adicionar Script")
9. Crie o Script e vá para edição: ![Criar Script](https://github.com/mastheusum/Aulas/blob/main/Demonstrativas/Level%202/Screenshoots/002.png "Criar Script")
Comece explicando como funciona a movimentação na Godot:
```
func _physics_process(delta):
  # Vector2(1, 0) é um vetor que aponta para a direita
  move_and_slide( Vector2(1, 0) * 200 )
```
TESTE!<br>
Explicação:
```
O comando move_and_slide é responsável pela movimentação na Godot. Para que ele possa funcionar 
nós precisamos passar a direção do movimento e o quão rápido ele vai. 
Para a direção usamos um Vetor e para a velocidade um número. Basta multiplicar o vetor pelo número da velocidade
e teremos, em um único resultado, o que o move_and_slide precisa.
```
Não precisa entrar em detalhes sobre o que são vetores, adote uma explicação mais superficial. Exemplo:
```
Temos o eixo X e o eixo Y
O X diz o quão para a direita queremos ir. 
Se ele é ZERO não queremos mudar nossa posição X
Se ele é 1 queremos aumentar a nossa posição X
Se ele é -1 queremos diminuir a nossa posição X

O mesmo se aplica ao eixo Y, mas ele diz o quão para baixo queremos ir.
Se ele é ZERO não queremos mudar nossa posição Y
Se ele é 1 queremos aumentar a nossa posição Y
Se ele é -1 queremos diminuir a nossa posição Y
```
Dê uma simplificada caso ache necessário, isto é apenas um exemplo.<br>
Agora façamos uma atividade, faça o personagem andar apenas para a esquerda, depois apenas para baixo e por último apenas para cima.<br>
**Respostas**<br>
Esquerda:
```
func _physics_process(delta):
  move_and_slide( Vector2(-1, 0) * 200 )
```
Baixo:
```
func _physics_process(delta):
  move_and_slide( Vector2(0, 1) * 200 )
```
Cima:
```
func _physics_process(delta):
  move_and_slide( Vector2(0, -1) * 200 )
```
Agora que entendemos a movimentação vamos entender como são os controles.<br>
Utilizaremos um comando chamado *IF* que irá tomar decisões por nós enquanto o jogo acontece. Ele irá decidir se irá executar algo ou não, para isso basta passarmos uma informação do tipo VERDADEIRO ou FALSO<br>
Ele será responsável por mudar a nossa direção dependendo do botão que apertamos:
```
func _physics_process(delta):
  # será executado se é verdadeiro que apertamos a seta direita no teclado
  if Input.is_key_pressed(KEY_RIGHT):
    move_and_slide( Vector2(1, 0) * 200 )
  # será executado se é verdadeiro que apertamos a seta esquerda no teclado
  if Input.is_key_pressed(KEY_LEFT):
    move_and_slide( Vector2(-1, 0) * 200 )
```
TESTE!<br>
*Obs: podemos substituir o KEY_RIGHT por KEY_D, neste caso substitua o KEY_LEFT por KEY_A*<br>
Entretando programar dessa forma vai dar muito trabalho quando quisermos adicionar a gravidade e o pulo. Então vamos simplificar o código!<br>
*Não vamos nos aprofundar em variáveis, apenas usar uma explicação curta e usar.*<br>
Uma variável é um espaço na memória do computado que usamo para guardar alguma coisa que vamos usar depois. No nosso caso vamos guardar nossa velocidade e a direção do movimento que é o nosso vetor.
```
var speed = 200
var dir = Vector2()

func _physics_process(delta):
  if Input.is_key_pressed(KEY_RIGHT):
    dir.x = 1
  if Input.is_key_pressed(KEY_LEFT):
    dir.x = -1
  move_and_slide( dir * speed )
```
TESTE!<br>
Infelizmente desse jeito, depois que o nosso personagem começa a andar ele não para, por quê isso?<br>
Isso está acontecendo pois em nenhum momento nossa direção no X é ZERO!<br>
Para que possamos fazer isso vamos precisar de uma ajuda dos comandos *ELIF* e *ELSE*<br>
O comando *ELSE* é executado quando o comando anterior, seja *IF* ou *ELIF* não executa (recebe false). Já o comando *ELIF* é um *IF* um pouco diferente, pois ele irá verificar sua condição apenas se o *IF* antes dele não executar.<br>
Sabendo disso podemos modificar o nosso código para ficar da seguinte forma:
```
var speed = 200
var dir = Vector2()

func _physics_process(delta):
  # será executado se é verdadeiro que apertamos a seta direita no teclado
  if Input.is_key_pressed(KEY_RIGHT):
    dir.x = 1
  # será executado se é verdadeiro que apertamos a seta esquerda no teclado
  elif Input.is_key_pressed(KEY_LEFT):
    dir.x = -1
  # será executado se nem IF nem ELIF tiver sido executado
  else:
    dir.x = 0
  move_and_slide( dir * speed )
```
TESTE!<br>
Agora o Playe fica parado. Vamos então fazer ele pular!<br>
*Obs: neste ponto tem uma pegadinha, pois o Player não tem colisão então o próximo código vai fazer ele cair e atravessar o piso*<br>
Antes de pular ele vai precisar cair ou vai acabar decolando como um foguete, então vamos começar por aí.<br>
Para que ele caia basta adicionar uma velocidade de queda para o Player, mas não basta adicionar qualquer velocidade, ele precisa ir caindo mais rápido enquanto continuar em queda, afinal é assim tanto no mundo real quanto nos jogos.<br>
Para isso vamos criar uma variável para a gravidade e adicionar uma pequena conta antes do *move_and_slide*:
```
var speed = 200
var dir = Vector2()
var gravity = 10

func _physics_process(delta):
  # será executado se é verdadeiro que apertamos a seta direita no teclado
  if Input.is_key_pressed(KEY_RIGHT):
    dir.x = 1
  # será executado se é verdadeiro que apertamos a seta esquerda no teclado
  elif Input.is_key_pressed(KEY_LEFT):
    dir.x = -1
  # será executado se nem IF nem ELIF tiver sido executado
  else:
    dir.x = 0
  
  dir.y = dir.y + gravity * delta
  move_and_slide( dir * speed )
```
TESTE!<br>
Com isto vemos que o nosso personagem apenas cai direto hahaha!<br>
Isto acontece por ele não ter colisão com a plataforma, então vamos adicionar um novo Node/Peça ao *Player*:<br>
1. Selecione o *Player* clique para adicionar um Node
2. Pesquise por *ColSh*
3. Escolha *Collision Shape 2D*
4. Selecione o *Collision Shape 2D* e no *Inspector* procure pelo campo *Shape* e clique no valor do campo que vai estar *Empty*
5. Escolha a opção *New Rectangle Shape2D*
6. Um quadrado azul esverdeado cercado por pontos laranjas deve ter aparecido a frente do sprite do player, este é o colisor
7. Arraste os pontos laranjas para alterar o tamanho do quadrado e faça-o cobrir o player
8. Não precisa cobrir ele completamente, apenas o suficiente para que ele bata onde achar que deve bater
TESTE!<br>
Agora que ele fica na plataforma vamos fazer o pulo.


----------------

Comece criando as variáveis que seu jogo irá precisar:
```
var speed = 200
var jump = -5
var gravity = 10
var direction = Vector2()
```
Após a criação das variáveis vamos para a programação da movimentação
```
func _physics_process(delta):
  if Input.is_action_pressed('ui_right'):
    direction.x = 1
  elif Input.is_action_pressed('ui_left'):
    direction.x = -1
  else:
    direction.x = 0

  move_and_slide(direction * speed)
```
TESTE!<br>
O código acima fará o personagem andar para os lados, agora precisamos fazer ele poder pular, mas para pular ele precisa poder cair ou ele irá apenas subir como um foguete.<br>
Então vamos melhorar o código acima:
```
func _physics_process(delta):
  direction.y = direction.y + gravity * delta

  if Input.is_action_pressed('ui_right'):
    direction.x = 1
  elif Input.is_action_pressed('ui_left'):
    direction.x = -1
  else:
    direction.x = 0

  move_and_slide(direction * speed)
```
TESTE!<br>
Agora vemos que ele cai direto. Isto acontece por ele não ter colisão com a plataforma, então vamos adicionar um novo Node/Peça ao *Player*:<br>
1. Selecione o *Player* clique para adicionar um Node
2. Pesquise por *ColSh*
3. Escolha *Collision Shape 2D*
4. Selecione o *Collision Shape 2D* e no *Inspector* procure pelo campo *Shape* e clique no valor do campo que vai estar *Empty*
5. Escolha a opção *New Rectangle Shape2D*
6. Um quadrado azul esverdeado cercado por pontos laranjas deve ter aparecido a frente do sprite do player, este é o colisor
7. Arraste os pontos laranjas para alterar o tamanho do quadrado e faça-o cobrir o player
8. Não precisa cobrir ele completamente, apenas o suficiente para que ele bata onde achar que deve bater
TESTE!<br>
Agora ele fica acima da plataforma então falta fazer ele pular. Vamos novamente alterar o código que temos
```
func _physics_process(delta):
  direction.y = direction.y + gravity * delta

  if Input.is_action_just_pressed('ui_up'):
    direction.y = jump

  if Input.is_action_pressed('ui_right'):
    direction.x = 1
  elif Input.is_action_pressed('ui_left'):
    direction.x = -1
  else:
    direction.x = 0

  move_and_slide(direction * speed)
```
TESTE!<br>
Agora ela estará pulando corretamente.<br><br>
*Não se preocupe com o pulo duplo*<br><br>
Agora desenvolva o mapa garantindo que no local onde for o final da fase teremos uma bandeira de qualquer cor.<br>
Vamos adicionar um colisor no nosso cenário que deverá ficar na mesma posição que a bandeira. A ideia é que quando o *Player* bater neste colisor isso nos leve até a cena de vitória. Siga os passos abaixo:
1. Adicione ao *World* um Node chamado *StaticBody2D*
2. Mude o nome do *StaticBody2D* para **WinZone**
3. Adicione ao *WinZone* um *Collision Shape 2D*
4. Selecione o *Colision Shape 2D* e na propriedade *Shape* escolha a opção *New Rectangle Shape2D*
5. Selecione o *WinZone* e marque a opção *Make object children are not Selectable*
6. Arraste o *WinZone* para a posição da bandeira
7. Selecione o *Colission Shape 2D* do *WinZone* e altere o tamanho dele para ele cobrir a bandeira
```
Somente para o Instrutor:
Sobre a detecção da colisão é preciso entender que o Player vai estar batendo em váras coisas,
então ele possui um lista de coisas em que está batendo.
Precisaremos verificar de uma por uma qual dessas coisas possui o nome WinZone e por isto é
importante que o nome seja escrito exatamente igual tanto na aba Scenes quanto na programação
```
Com isto feito precisamos verificar se o nosso *Player* tocou ou não na *WinZone*.

