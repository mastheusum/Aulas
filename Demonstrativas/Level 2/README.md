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
Selecione o Node/Peça onde deseja encaixar o novo Node/Peça e clique no botão de + no topo da aba para escolher o Node/Peça que deseja encaixar.<br>
Então siga os passos abaixo:
1. Adicione um *KinematicBody2D* como filho do *World*
2. Renomei-o para *Player*
3. Adicione um *Sprite* como filho do *Player*
4. Selecione o *Player* e marque a opção *Make object children are not Selectable* ![Quadrado com pontinhos](https://github.com/mastheusum/Aulas/blob/main/Demonstrativas/Level%202/Screenshoots/000.png "Quadrado com pontinhos")
5. Posicione o *Player* sobre a plataforma (é só arrastar)
6. elecione o *Player* e clique no pergaminho que existe acima da aba
7. Crie o Script e vá para edição

Comece criando as variáveis que seu jogo irá precisar:
```
var speed = 200
var jump = -20
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
Agora vemos que ele cai direto.
