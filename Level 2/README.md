# Programação Orientada a Objetos com C#

## Resumo
A Programação Orientada a Objeto (POO) compreende-se em uma forma de estruturar códigos em um determinado projeto. Muitas linaguagens utilizam do paradigma da Programação Orientada a Objetos incluindo o C# (lê-se C sharp) que atualmente ela é uma das linguagens mais populares entre os programadores e tem muitos usos, sendo um dos principais a programação de jogos através da Unity Engine. Nesta aula os alunos tiveram seu primeiro contato com a interface do novo motor de jogos, mas nosso foco principal foi entender os alicerces da POO com a linguagem C# e como essa linguagem funciona no contexto da Unity.

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
- [ ] [POO na prática](#poo-na-prática)
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
- [x] Entendendo os Inputs
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
  - [x] Não inclui a programação para a transição entre as animações
- [x] Teste final
  
## POO na prática

```cs
using UnityEngine;

public class TopDownMove : MonoBehavior
{
  public float speed;
  public Vector2 direction;
  public Rigidbody2D body;

  private float inputX, inputY;

  void Start() { }
  void Update() { }
}
```