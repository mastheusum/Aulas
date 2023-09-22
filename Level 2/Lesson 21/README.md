# Programação Orientada a Objetos com C#

## Resumo
A Programação Orientada a Objeto (POO) compreende-se em uma forma de estruturar códigos em um determinado projeto. Muitas linaguagens utilizam do paradigma da Programação Orientada a Objetos incluindo o C# (lê-se C sharp) que atualmente ela é uma das linguagens mais populares entre os programadores e tem muitos usos, sendo um dos principais a programação de jogos através da Unity Engine. Nesta aula os alunos tiveram seu primeiro contato com a interface do novo motor de jogos, mas nosso foco principal foi entender os alicerces da POO com a linguagem C# e como essa linguagem funciona no contexto da Unity.

## Conteúdo a ser abordado na aula

> O conteúdo lista a baixo foi coloca na ordem em que se pensa ser a mais eficiente durante a aula, mas algumas coisas devem ser entendidas antes:
> 1. A lista de tópicos é muito extensa e foi preparada para ser passada em duas aulas
> 2. Apesar de ter sido colocada em ordem o instrutor pode alterar a ordem dos tópicos como desejar para que seja mais fácil para a turma entender

- [x] Como baixar e instalar a Unity
- [x] Como criar um projeto na Unity
- [x] Diferenças e Semelhancas: Unity x Godot
  - [x] Interface
  - [x] Programação
- [x] O que é POO
  - [x] O que são Objetos
  - [x] O que são Classes
  - [x] O que são atributos e métodos
  - [x] Os pilares da POO (apenas citar os nomes, existirá um momento para falar deles)
- [x] Como criar Objetos na Unity
  - [x] Objetos para montar objetos (exemplificar com carro)
  - [x] Objetos podem usar outros Objetos
  - [x] Componentes
  - [x] Montar o Player
    - [x] Sprite Renderer (user Square)
    - [x] Rigidbody2D
    - [x] Box Collider 2D
- [x] Criar pasta Scripts
  - [x] Cuidados ao se criar um Script
  - [x] CamelCase
- [x] [POO na prática](#poo-na-prática)
  - [x] Apresentar a classe
  - [x] Apresentar **Herança** (apenas citar)
  - [x] Apresentar **Encapsulamento**: Public **x** Private
  - [x] Apresentar métodos
  - [x] Criar atributos
    - [x] speed (float) (public)
    - [x] direction (Vector2) (public) 
    - [x] body (Rigidbody2D) (public)
    - [x] inputX (float) (private)
    - [x] inputY (float) (private)
  - [ ] Como criar um objeto via programação
    - [ ] Criar uma instância de Vector2 para a variável direction
  - [ ] Adicionar o Script ao Player na Unity
    - [ ] Mostre como a Unity apresenta as variáveis no Inspector
    - [ ] Preencha os campos
- [ ] Entendendo os Inputs
  - [ ] As entradas podem ser mapeadas pela Unity
  - [ ] Entendendo o plano cartesiano na Unity
  - [ ] Lendo as entradas
  - [ ] Alterando o vetor direção
  - [ ] Movendo o personagem
    - [ ] MovePosition **X** velocity
- [ ] Alterando a aparência do personagem
  - [ ] Importando os Assets
  - [ ] Configurando os Sprites
  - [ ] Usando no Sprite Renderer
  - [ ] Animation e Animator
    - [ ] Animation: cria animações
    - [ ] Realiza a mudança entre as animações
  - [ ] Criando animações
    - [ ] IDLE DOWN
      - [ ] Ajustando velocidade
    - [ ] WALK DOWN
    - [ ] WALK LEFT
    - [ ] WALK RIGHT
    - [ ] WALK UP
  - [ ] Usando o Animator
    - [ ] Transições
    - [ ] Parâmetros
    - [ ] Blend Space
  - [ ] Programando Animator no Script
- [ ] Teste final
  
## POO na prática

```cs
using UnityEditor;

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