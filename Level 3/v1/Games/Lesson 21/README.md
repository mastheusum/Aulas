# Unit 21 - Ataques

Nesta aula os alunos aprendem como adicionar os ataques ao personagem. Temos dois ataques, o normal e o ataque mágico. Para entender como estes elementos irão funcionar no 3D precisaremos entender sobre **corrotinas**, sobre a criação de colisores invisíveis através de programação, sobre o passo a passo para causar dano no inimigo em contraste com a forma feita no 2D e, para adoçar a vida, sobre Gizmos, um recurso da Unity que nos permite visualizar elementos invisíveis consruídos via programação.

- Animação de ataque - Animator
  - O ataque é a animação de chutar
  - Adicione a animação ao Animator Controller
  - Crie a transição para a animação IDLE e Running
  - Crie o parâmetro **isAttacking**
  - Configure as transições de ida para o ataque
    - **Has Exit Time**: False
    - **Transition Duration**: 0.1
    - **Conditions**:
      - *isAttacking*: True
  - Configure as transições de saída do ataque
    - **Has Exit Time**: True
    - **Exit Time**: 0.8
    - **Transition Duration**: 0.1
    - **Conditions**:
      - *isAttacking*: False
- Animação de ataque - Script
  - Adicione um IF para verificar se o botão esquerdo do mouse foi clicado
  - Inicie uma Coroutine para o método de assinatura Attack()
  - Crie o método de assinatura Attack() com retorno IEnumerator
- Método Attack
  - Progame o Attack para que 
    - inicie o ataque
    - espere 1s
    - finalize o ataque
- Colisor OverlapSphere
  - Crie uma lista para os inimigos, seu tipo será Transform
  - Crie um float para o raio da área de ataque
  - Crie o método que irá detectar inimigos, sua assinatura será **void GetEnemiesRange()**
  - O método Attack deverá camar o GeEnemiesRange após o *return*
  - Use o foreach para executar um bloco de código para cada elemento que entrar na área de colisão
- Gizmos
  - Programe o método de assinatura **private void OnDrawGizmosSelected()**
- Detectando Inimigo
  - Verifique se o colisor possui a tag *Enemy*
  - Crie um 3D Object do tipo Capsule para servir de alvo temporário
    - Adicione a tag *Enemy* nele
- Adicionando Inimigo na Lista
  - Adicione o inimio na lista
  - No método Attack, após o GetEnemiesRange, use um foreach para causar dano a cada inimigo na lista
- Enemy Script
  - Crie o script chamado Enemy
  - Adicione um atributo **public float life**
  - cire o método de assinatura **public void GetHit(float damage)**
    - Use-o para causar dano ao Enemy
  - Use o **void Update()** para verificar se o **Enemy** está morto, caso esteja, destrua-o
  - Volte ao método **Attack** e cause dano ao **Enemy**
- Ataque mágico
  - Adicione a animação da Fireball ao Animation Controller
  - Crie um parâmetro booleano chamado Magic 
  - Configure as transições para que fiquem iguais às do chute
  - Crie o método de assinatura **IEnumerator Magic()**
  - Programe para que quando apertar o botão direito do mouse inicie um Coroutine que executa Magic()

## Animação ataque - Script
Atualmente o Script do Player está assim

```cs
if (body.isGrounded)
{
  anim.SetBool("isJumping", false);

  if (inputX == 0 && inputY == 0) 
  {
    anim.SetBool("isRunning", false);
  }
  else 
  {
    anim.SetBool("isRunning", true);
  }

  if (Input.GetButtonDown("Jump")) 
  {
    anim.SetBool("isJumping", true);
  }
}
```

Modifique para que fique assim:

```cs
if (body.isGrounded)
{
  anim.SetBool("isJumping", false);

  if (inputX == 0 && inputY == 0) 
  {
    anim.SetBool("isRunning", false);
  }
  else 
  {
    anim.SetBool("isRunning", true);
  }

  if (Input.GetButtonDown("Jump")) 
  {
    anim.SetBool("isJumping", true);
  }

  if (Input.GetMouseButtonDown(0)) 
  {
    StartCoroutine( Attack() );
  }
}
```

E crie o método Attack(), caso ocorra um erro entenda que é normal

```cs
IEnumerator Attack()
{

}
```

## Attack()

```cs
IEnumerator Attack()
{
  anim.SetBool("isAttacking", true);
  yield return new WaitForSeconds(1f);
  anim.SetBool("isAttacking", false);
}
```

## Colisor OverlapSphere
Precisamos agora fazer com que nosso player tenha uma área de colisão para detectar os inimigos e aplicar o dano neles. No Script do Player vá para o início, onde colocamos as variáveis, para criar uma variável pública do tipo float que chamaremos de área Attack ou areaAtk. Essa “área ataque” será o valor do raio de ataque do nosso personagem. Também vamos criar uma lista de Transform de todos os inimigos que o player colidir chamada EnemyList. E o código ficará desta maneira:

```cs
List<Transform> EnemyList = new List<Transform>();
public float areaAtk;
```

Método GetEnemiesRange

```cs
void GetEnemiesRange()
{
  EnemyList.Clear();
}
```

Método Attack

```cs
IEnumerator Attack()
{
  anim.SetBool("isAttacking", true);
  yield return new WaitForSeconds(1f);
  GetEnemiesRange();

  anim.SetBool("isAttacking", false);
}
```

Então, a cada ataque vamos limpar a lista e depois colocar os inimigos na lista. Para verificar cara inimigo na lista usaremos laço de repetição: **foreach**. O **foreach** executa uma instrução ou um bloco de instruções para cada elemento que entrar na área de colisão. Portanto verificamos todos os colliders. Faremos assim:

```cs
void GetEnemiesRange()
{
  EnemyList.Clear();

  foreach (Collider colisor in Physics.OverlapSphere()) // aqui deve ocorrer um erro pois está incompleto
  {

  }
}
```

O método **Physics.OverlapSphere()** será responsável por projetar o formato da área de colisão do ataque que será invisível. Através deste método, na frente do player vamos colocar uma esfera e todos os objetos que colidirem entrarão no foreach. Nos parâmetros deste método devemos colocar a posição que é um Vector3 e o raio desta esfera. Vamos fazer assim:

```cs
void GetEnemiesRange()
{
  EnemyList.Clear();

  foreach (Collider colisor in Physics.OverlapSphere( (transform.position + transform.forward), areaAtk )) 
  {

  }
}
```

O transform.position  é a própria posição do player que somado ao transform.forward desloca o colisor um pouco para frente e a variável areaAtk  é o raio deste colisor.

## Gizmos
Nossa área de ataque, porém não conseguimos vê-la ainda e para isso utilizaremos um recurso da Unity chamado: Gizmos. Quando selecionamos o Player, por exemplo, conseguimos ver a cápsula de colisão do Character Controller que é verdinha. 

Volte ao script para criar esta visualização. Gizmos são as linhas dos colisores e outros objetos invisíveis que são importantes para o programador do jogo no modo de edição, mas para o jogador não. No Script vamos utilizar o seguinte método:

```cs
private void OnDrawGizmosSelected()
{
  Gizmos.color =  Color.red;
  Gizmos.DrawWireSphere( transform.position + transoform.forward, areaAtk );
}
```

Note que agora é possível reparar a área de colisão pelas linhas vermelhas

## Detectando Inimigo
```cs
void GetEnemiesRange()
{
  EnemyList.Clear();

  foreach (Collider colisor in Physics.OverlapSphere( (transform.position + transform.forward), areaAtk )) 
  {
    if (colisor.gameObject.CompareTag("Enemy"))
    {
      Debug.Log("Enemy");
    }
  }
}
```

## Adicionando Inimigos na Lista
GetEnemiesRange

```cs
void GetEnemiesRange()
{
  EnemyList.Clear();

  foreach (Collider colisor in Physics.OverlapSphere( (transform.position + transform.forward), areaAtk )) 
  {
    if (colisor.gameObject.CompareTag("Enemy"))
    {
      EnemyList.Add(colisor.transform); // apenas essa linha mudou
    }
  }
}
```

Attack (o comentário será um comentário até termos um script para o inimigo)

```cs
IEnumerator Attack()
{
  anim.SetBool("isAttacking", true);
  yield return new WaitForSeconds(1f);
  GetEnemiesRange();

  foreach (Transform enemy in EnemyList)
  {
    // Execute o dano no Inimigo
  }

  anim.SetBool("isAttacking", false);
}
```

## Enemy Script
```cs
public class Enemy : MonoBehavior
{
  public float life;

  void Update()
  {
    if (life > 0)
    {
      // no futuro teremos código aqui, por enquanto deixe em branco
    }
    else 
    {
      Destroy(gameObject);
    }
  }

  public void GetHit(float damage)
  {
    life -= damage;
  }
}
```

**Attack()**

```cs
IEnumerator Attack()
{
  anim.SetBool("isAttacking", true);
  yield return new WaitForSeconds(1f);
  GetEnemiesRange();

  foreach (Transform element in EnemyList)
  {
    Enemy enemy = element.GetComponent<Enemy>();

    if (enemy != null)
    {
      enemy.GetHit(20);
    }
  }

  anim.SetBool("isAttacking", false);
}
```

## Ataque mágico
```cs
IEnumerator Magic()
{
  anim.SetBool("Magic", true);
  yield return new WaitForSeconds(1.5f);
  anim.SetBool("Magic", false);
}
```

```cs
if (body.isGrounded)
{
  anim.SetBool("isJumping", false);

  if (inputX == 0 && inputY == 0) 
  {
    anim.SetBool("isRunning", false);
  }
  else 
  {
    anim.SetBool("isRunning", true);
  }

  if (Input.GetButtonDown("Jump")) 
  {
    anim.SetBool("isJumping", true);
  }

  // chute
  if (Input.GetMouseButtonDown(0)) 
  {
    StartCoroutine( Attack() );
  }
  // fireball
  if (Input.GetMouseButtonDown(1)) 
  {
    StartCoroutine( Magic() );
  }
}
```

