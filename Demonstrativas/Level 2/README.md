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

### Montando o personagem
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

