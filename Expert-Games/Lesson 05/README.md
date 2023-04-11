# Sincronizando Variáveis e Eventos

#### Pré-aula
A aula de hoje é uma continuação do conteúdo da aula anterior então é necessário que os alunos estejam com os projetos no mesmo ponto.<br>
Hoje veremos como ganhar pontos coletando essas moedas e como mostrar esses pontos na HUD. Vamos começar vendo um conceito muito importante: sincronização de variáveis!

### Atributo Syncvar
Para armazenar a quantidade de moedas coletadas, fizemos uma variável chamada coin no script do Player. Porém se testarmos o jogo, veremos que, quando um Player coleta uma moeda, o valor de sua variável não atualiza no outro client.<br>
[![001](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/001.gif "001")](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/001.gif "001")<br>
Isso ocorre pois o server não notificou os outros clients que a variável foi atualizada, essa alteração foi feita localmente no player que coletou a moeda. Como resolver?<br>
Podemos alterar a variável adicionando o atributo [SyncVar], ele fará com que o valor dessa variável seja sincronizado (atualizado) entre os clients quando o seu valor for alterado.

```cs
[SyncVar]
public int coins = 0;
```
Ótimo! Se testarmos o jogo agora, veremos que os valores são atualizados em ambos clients, basta olhar no Inspector.<br>
Vamos para outro exemplo: uma variável que definirá a cor de cada player quando eles forem spawnados! <br>
No script do Player crie a variável e na função Start defina a cor baseada nessa variável.

```cs
[SyncVar]
public Color playerColor;

private void Start()
{
    body = GetComponent<Rigidbody2D>();
    GetComponent<SpriteRenderer>().color = playerColor;
}
```
Agora, no script MyNetworkManager (função OnServerAddPlayer) vamos definir essa cor baseada na ordem dos players conectados:

```cs
public override void OnServerAddPlayer(NetworkConnectionToClient conn)
{
    Transform startPoint;
    Color color;
    
    if(numPlayers == 0)
    {
        startPoint = player1SpawnPoint;
        color = Color.green;
    }
    else
    {
        startPoint = player2SpawnPoint;
        InvokeRepeating("SpawnCoin", 2, 2);
        color = Color.red;
    }
    
    GameObject new_player = Instantiate(playerPrefab, startPoint.position, startPoint.rotation);
    new_player.GetComponent<Player>().playerColor = color;
    
    NetworkServer.AddPlayerForConnection(conn, new_player);
}
```
Execute o jogo e veja o resultado!<br>
[![002](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/002.png "002")](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/002.png "002")<br>

### Unity Events
Agora que entendemos como funcionam as variáveis sincronizadas, vamos voltar à mecânica das moedas: precisamos mostrar na HUD os pontos de cada player. Para que a HUD seja atualizada, ela precisa ser notificada toda vez que um player coletar uma moeda. Esse aviso pode ser feito de várias formas, mas nós usaremos uma em especial: Unity Events!<br>
Unity Events são eventos que podem ser disparados em algum momento do código e você pode definir (na própria Unity ou em código) quais funções serão chamadas. Acredite ou não, você já usou ela antes! Se você colocar um botão em um Canvas, nele há a opção OnClick:<br>
[![003](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/003.gif "003")](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/003.gif "003")<br>
Isso é um Unity Event! Repare que, no exemplo, eu habilitei um objeto da cena, mas poderíamos chamar qualquer função que pertence a algum componente desse objeto. Como dito acima, podemos também definir a função que será chamada através do próprio código. Vamos fazer um Unity Event que avisa a HUD quando ganharmos pontos!
<br>
Para criarmos um Unity Event podemos fazer como abaixo em qualquer script (só não esqueça de adicionar o namespace using UnityEngine.Events;):

```cs
public UnityEvent Teste;
```
Depois podemos disparar esse evento no momento que quisermos usando a função Invoke():

```cs
Teste.Invoke();
```

Vamos testar? No script MyNetworkManager nós criaremos um evento que vai disparar quando o Player for conectado:
```cs
public UnityEvent OnPlayerConnect;

public override void OnServerAddPlayer(NetworkConnectionToClient conn)
{
    OnPlayerConnect.Invoke();

    Transform startPoint;
    Color color;
    /* ... */
}
```

Repare que na Unity, se você clicar no objeto NetworkController, verá que agora há uma opção parecida com a que vimos anteriormente no Botão: podemos definir qual função será chamada! <br>

Faremos algo semelhante no script do Player, porém queremos que nosso Unity Event retorne um número que represente as moedas quando for chamado… Lembra da herança? Que tal criarmos nosso próprio Unity Event? Vamos fazer assim:

```cs
[Serializable]
public class IntEvent : UnityEvent<int> {}
```

Olha que legal! Agora nós temos nosso IntEvent e podemos criar um evento que retorna um int quando disparado.

```cs
public IntEvent OnCoinCollect;
```

Vamos criar uma função que adiciona moedas através do server e chamá-la toda vez que coletarmos uma moeda:

```cs
[Server]
public void AddCoins()
{
    coins += 1;
    OnCoinCollect.Invoke(coins);
}

private void OnTriggerEnter2D(Collider2D collision)
{
    if (collision.CompareTag("Coin"))
    {
        AddCoins();
        TioNetworkManager.spawnedCoins--;
        Destroy(collision.gameObject);
    }
}
```

Porém há um pequeno detalhe que precisamos saber: não é possível arrastar objetos da cena nos eventos que estão em prefabs (como é o caso do nosso Player), afinal eles nem foram criados na cena ainda. Precisaremos definir em código quais funções serão chamadas quando esse evento for disparado.
<br>
Vamos criar um script para a nossa HUD, nela terá tudo o que é necessário para atualizar os pontos. Começaremos com os objetos que usaremos, serão os dois textos (TextMeshPro) que mostram os pontos e os dois Players, como abaixo:

```cs
public class HUD : NetworkBehaviour
{
    public TextMeshProUGUI textCoinsP1;
    public TextMeshProUGUI textCoinsP2;
    
    Player player1;
    Player player2;
}
```

Em seguida faremos duas funções que serão chamadas quando o evento for disparado. Elas serão responsáveis por mostrar os pontos na tela (repare que em cada uma há o atributo *ClientRpc*, isso ocorre pois o server precisa chamar essa função em todos os clients para que os pontos sejam atualizados na HUD corretamente).

```cs
[ClientRpc]
public void UpdatePlayer1Coins(int coins)
{
    textCoinsP1.text = coins.ToString();
}

[ClientRpc]
public void UpdatePlayer2Coins(int coins)
{
    textCoinsP2.text = coins.ToString();
}
```

Por fim, faremos uma função que definirá o que será chamado quando o evento for disparado:

```cs
public void AddPlayerListener(Player player)
{
    if(player1 == null)
    {
        player1 = player;
        player1.OnCoinCollect.AddListener(UpdatePlayer1Coins);
    }
    
    else
    {
        player2 = player;
        player2.OnCoinCollect.AddListener(UpdatePlayer2Coins);
    }
}
```

Perceba que, para definir as funções chamadas, usaremos o AddListener(). Podemos entender que essas funções serão “ouvintes” do evento, ou seja, elas ficam esperando o evento ser disparado para serem chamadas.
<br>
A função AddPlayerListener que fizemos acima precisa ser chamada em algum lugar. Vamos chamá-la no script do Player, assim que ele for criado, fazendo com que a HUD qual dos players está disparando o evento.

```cs
void Start()
{
    rb = GetComponent<Rigidbody2D>();
    GetComponent<SpriteRenderer>().color = playerColor;
    GameObject.FindGameObjectWithTag("HUD").GetComponent<HUD>().AddPlayerListener(this);
}
```

Não se esqueça de colocar o script da HUD na Unity e definir quais são os textos!<br>
[![005](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/005.png "005")](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2005/Screenshots/005.png "005")<br>