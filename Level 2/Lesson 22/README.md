# Geek Hero - Movimentação e Animação do Player

## Resumo
Agora demos início ao projeto feito na Unity e neste projeto faremos um clone do jogo que marcou uma geração o nosso queridíssimo Zelda. E durante o projeto os alunos verão os detalhes mais técnicos da utilização da programação orientada a objetos e de como podemos utilizar a Unity de forma mais simples para construirmos o nosso jogo.

## Conteúdo a ser abordado na aula

> O conteúdo lista a baixo foi coloca na ordem em que se pensa ser a mais eficiente durante a aula, mas algumas coisas devem ser entendidas antes:
> 1. A lista de tópicos é muito extensa e foi preparada para ser passada em duas aulas
> 2. Apesar de ter sido colocada em ordem o instrutor pode alterar a ordem dos tópicos como desejar para que seja mais fácil para a turma entender

- [ ] Como baixar e instalar a Unity
- [ ] Como criar um projeto na Unity
- [ ] Diferenças e Semelhancas: Unity x Godot
  - [ ] Interface
  - [ ] Programação
- [ ] O que é POO
  - [ ] O que são Objetos
  - [ ] O que são Classes
  - [ ] O que são atributos e métodos
  - [ ] Os pilares da POO (apenas citar os nomes, existirá um momento para falar deles)
- [ ] Como criar Objetos na Unity
  - [ ] Objetos para montar objetos (exemplificar com carro)
  - [ ] Objetos podem usar outros Objetos
  - [ ] Componentes
  - [ ] Montar o Player
    - [ ] Sprite Renderer (user Square)
    - [ ] Rigidbody2D
    - [ ] Box Collider 2D
- [ ] Criar pasta Scripts
  - [ ] Cuidados ao se criar um Script
  - [ ] CamelCase
- [ ] POO na prática
  - [ ] Apresentar a classe
  - [ ] Apresentar **Herança** (apenas citar)
  - [ ] Apresentar **Encapsulamento**: Public **x** Private
  - [ ] Apresentar métodos
  - [ ] Criar atributos
    - [ ] speed (float) (public)
    - [ ] direction (Vector2) (public)
    - [ ] body (Rigidbody2D) (public)
    - [ ] inputX (float) (private)
    - [ ] inputY (float) (private)
  - [x] Como criar um objeto via programação
    - [x] Criar uma instância de Vector2 para a variável direction
  - [x] Adicionar o Script ao Player na Unity
    - [x] Mostre como a Unity apresenta as variáveis no Inspector
    - [x] Preencha os campos
- [x] [Entendendo os Inputs](#entendendo-os-inputs)
  - [x] As entradas podem ser mapeadas pela Unity
  - [x] Entendendo o plano cartesiano na Unity
  - [x] Lendo as entradas
  - [x] Alterando o vetor direção
  - [x] Movendo o personagem
    - [x] MovePosition **X** velocity
- [x] Alterando a aparência do personagem
  - [x] Importando os Assets
  - [x] Configurando os Sprites
  - [x] Usando no Sprite Renderer
  - [x] Animation e Animator
    - [x] Animation: cria animações
    - [x] Realiza a mudança entre as animações
  - [x] Criando animações
    - [x] IDLE DOWN
      - [x] Ajustando velocidade
    - [x] WALK DOWN
    - [x] WALK LEFT
    - [x] WALK RIGHT
    - [x] WALK UP
  - [x] Usando o Animator
    - [x] Transições
    - [x] Parâmetros
    - [x] Blend Space
  - [x] Programando Animator no Script
- [x] Teste final

## Entendendo os Inputs

As entradas que a Unity recebem podem ser mapeadas para uma melhor utilização no código. É possível dizer o **nome** da entrada que se quer, quais teclas são consideradas **positivas** e quais teclas são consideradas **negativas**.

Isso facilita sua utilização pois podemos utilizar esses valores de forma direta, sem IF/ELSE para a movimentação do personagem em qualquer modelo de jogo (plataforma, top-down, corrida e etc.)

Cada entrada pode ter apenas um par de teclas positivas e outro par para as negativas, mas para burlar isso é possível criar várias entradas com o mesmo nome e isso nos permite abranger diversas plataformas (computador, celular, console) sem mudar a programação.