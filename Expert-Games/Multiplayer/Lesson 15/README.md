# PROJETO 2

Nesta unit fizemos algumas mecânicas adicionais no projeto, melhorando a experiência de jogo e trabalhando com conceitos ainda não vistos, como por exemplo: sistema de drop de itens, troca de cenas e sons!

- [PROJETO 2](#projeto-2)
  - [Drop de Itens](#drop-de-itens)
    - [Criando os Prefabs](#criando-os-prefabs)
    - [DropItem \& ItemChance](#dropitem--itemchance)
    - [Moedas](#moedas)
  - [Troca de Cenas](#troca-de-cenas)
    - [Preparando a nova cena](#preparando-a-nova-cena)
    - [Mudança de Cenas no Multiplayer](#mudança-de-cenas-no-multiplayer)
    - [Build Settings](#build-settings)
  - [Sons](#sons)
    - [Criando Play List de sons](#criando-play-list-de-sons)

## Drop de Itens

### Criando os Prefabs
Antes de qualquer coisa é importante termos os prefabs dos itens que serão spawnados no jogo. Note que eles não são os ícones dos itens, mas os objetos que aparecem no cenário para o player pegar, portanto cada item deverá ter o seu.

![001](Screenshots/001.png)

Também é importante que os itens estejam registrados no NetworkManager, na lista de Spawn

![002](Screenshots/002.png)

### DropItem & ItemChance
Para a programação comece criando o Script **DropItem** e dentro dele teremos as seguintes classes

```cs
using Mirror;
using System;
using System.Collections.Generic;
using UnityEngine;

public class DropItems : NetworkBehaviour
{
   
}

[Serializable]
public class ItemChance
{
    
}
```

Vamos entender como o script funciona! Primeiro é importante observar que nosso script possui uma classe **ItemChance**. Precisamos dela pois cada item terá uma chance de ser spawnado, então ao invés de criarmos uma lista de GameObjects, vamos criar uma lista de ItemChance, onde podemos definir qual é o GameObject (item) e qual é a sua chance de cair (dropChance). Logo ela ficará assim:

```cs
[Serializable]
public class ItemChance
{
   public GameObject item;
   public float dropChance;
}
```

Na classe **DropItems** teremos apenas uma função que será responsável pelo spawn dos itens. Criamos inicialmente uma lista desses itens:

```cs
public List<ItemChance> dropList;
```

**Perceba que, ao colocar esse script no inimigo, podemos definir na Unity quais serão esses itens e suas respectivas chances:**

![003](Screenshots/003.png)

A função **Drop()** é a responsável pelo spawn, onde ela passa por cada item dentro da lista e gera um número aleatório (entre 0 e 100) que determinará se ele será ou não dropado.

```cs
public void Drop()
{
    foreach (ItemChance item in dropList)
    {
        float chance = UnityEngine.Random.Range(0, 100);
    }
}
```

Caso o número sorteado seja menor que a chance de drop do item, é definido o local onde ele aparecerá de forma aleatória, onde verificamos qual é a posição que o inimigo está e sorteamos um número que vai de X -1 para X +1 (o mesmo vale para Y e quanto maior for o número que estamos somando/subtraindo, maior é a distância que o item será spawnado). Por fim é criada uma cópia do item com o Instantiate() e ele é spawnado pelo Server.

```cs
public void Drop()
{
    foreach (ItemChance item in dropList)
    {
        float chance = UnityEngine.Random.Range(0, 100);

        if (chance <= item.dropChance)
        {
            Vector2 dropPosition = new Vector2(
                UnityEngine.Random.Range(transform.position.x-1, transform.position.x+1),
                UnityEngine.Random.Range(transform.position.y-1, transform.position.y+1)
            );  

            GameObject new_item = Instantiate(item.item, dropPosition, transform.rotation);
            NetworkServer.Spawn(new_item);
        }
    }
}
```

Para que essa função seja chamada, vamos adicionar no **Update()** do script **EnemyDamage** o código abaixo:

```cs
private void Update()
{
    enemyHPBar.fillAmount = hp / maxHP;

    if (hp <= 0)
    {
        GetComponent<DropItems>().Drop(); // essa linha aqui
        Destroy(gameObject);
    }
}
```

Podemos testar! Coloque o Script no inimigo e defina quais itens podem ser dropados e suas chances.

![004](Screenshots/004.gif)

### Moedas

Para as moedas, o processo é um pouco diferente, pois nesse caso precisaremos do prefab dela com uma **tag** (pode ser **Coin**) e não é necessário ter o script Item. Esse prefab já está no projeto (pasta **Prefabs**) e você pode alterar seu Sprite se preferir.

Vamos editar o script **Player_CollectItem** para verificarmos a colisão com a moeda:

```cs
private void OnTriggerEnter2D(Collider2D collision)
{
    Item collectedItem = collision.GetComponent<Item>();
    if (collectedItem)
    {
        if (isLocalPlayer)
        {
            inventory.AddItem(collectedItem.itemData, 1);
            OnItemCollect.Invoke();
        }
        
        Destroy(collision.gameObject);
    }
    // todo esse ELSE é novo
    else if (collision.CompareTag("Coin"))
    {
        if (isLocalPlayer)
        {
            inventory.AddCoins(10);
            OnItemCollect.Invoke();
        }

        Destroy(collision.gameObject);
    }
}
```

Não esqueça de definir a moeda no MyNetworkManager e também no inimigo (com sua chance de drop).

## Troca de Cenas
Quando desenvolvemos um game no modo Single Player (apenas 1 jogador) a forma como podemos trocar de cena é usando a classe SceneManager como abaixo:

![005](Screenshots/005.png)

Porém no modo multiplayer essa não é a forma mais adequada, pois quem deve administrar a troca de cenas é o Server! Vamos ver na prática como podemos fazer uma troca de cenas em que os clients possam continuar jogando juntos.

### Preparando a nova cena

Vamos criar uma cena com tudo o que precisamos: **HUD**, os **SpawnPoints** dos Players e o **CameraLimit** (salve o prefab de cada um desses objetos da cena que estávamos).

![006](Screenshots/006.png)

> Importante: Coloque na MainCamera o componente CinemachineBrain, caso contrário a Cinemachine dos Players não estará funcionando corretamente.

Se quiser, você pode fazer seu tilemap com um cenário bem legal para os Players. O meu, por exemplo, ficou assim:

![007](Screenshots/007.png)

### Mudança de Cenas no Multiplayer

Quando nossos Players forem transportados para essa nova cena, o objeto NetworkController será levado automaticamente para ela (ou seja, não precisamos colocá-lo nessa cena). Porém há um detalhe: o script MyNetworkManager pede os SpawnPoints dos Players e do Inimigo, mas como ele não estará na cena precisaremos passar esses objetos através de código.

Coloque no **Player1SpawnPoint** e no **Player2SpawnPoint** uma tag (pode ser “P1_Spawn” e “P2_Spawn” respectivamente) e abra o script **MyNetworkManager** para adicionar:

```cs
public override void OnServerSceneChanged(string sceneName)
{
    player1SpawnPoint = GameObject.FindGameObjectWithTag("P1_Spawn").transform;
    player2SpawnPoint = GameObject.FindGameObjectWithTag("P2_Spawn").transform;
}
```

A função **OnServerSceneChanged()** é chamada na troca de cena, então nesse momento nós buscamos os SpawnPoints pela tag.

Vamos modificar também a função **SpawnEnemy()** para que ele crie o inimigo somente se o **enemySpawnPoint** for válido:

```cs
void SpawnEnemy()
{
    if(enemySpawnPoint != null) // linha nova
    {
        GameObject new_enemy = Instantiate(
            spawnPrefabs.Find(prefab => prefab.name == "EnemyFollower"),
            enemySpawnPoint.position, enemySpawnPoint.rotation);

        NetworkServer.Spawn(new_enemy);
    }

}
```

Agora podemos voltar na cena anterior e criar um objeto que servirá de “Portal”: ele terá um Collider2D com trigger ativo e o script abaixo:

```cs
using Mirror;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Portal : NetworkBehaviour
{
   MyNetworkManager manager;
   public string sceneName;

   private void Start()
   {
       manager = GameObject.Find("NetworkController").GetComponent<MyNetworkManager>();
   }

   private void OnTriggerEnter2D(Collider2D collision)
   {
       if (collision.CompareTag("Player"))
       {
           manager.ServerChangeScene(sceneName);
       }
   }
}
```

Note que nós verificamos a colisão com o Player e chamamos a função **ServerChangeScene()**, fazendo com que todos os clients mudem de cena juntos sem perder a conexão.

Coloque o script no Portal e nele digite o nome da cena que nós iremos.

### Build Settings
Antes de testar é necessário incluir também na opção Build Settings quais são as cenas que nós temos no jogo:

![008](Screenshots/008.png)

Feito? Bora testar!

![009](Screenshots/009.png)

## Sons

### Criando Play List de sons