# Customizando o Server

#### Pré-aula
Para esta aula continue no mesmo projeto das aulas anteriroes.<br>
Nesta aula eles utilizarão de herança para customizar o servidor da forma como preferirem.

### Herança
Utilizaremo de Herança para termos um servidor que funcione da forma como preferirmos. Para quem não lembra Herança é um recurso da Orientação a Objetos que nos permite fazer com que uma classe herde os atributos e métodos não privados de uma outra classe, nos dando um melhor aproveitamento do código.<br>

Aplicaremos Herança no *NetworkManager* para que tenhamos o nosso próprio NetworkManager.<br>
Vamos começar criando o script *TeuNomeNetworkManger* e nela adicionar o seguinte código:
```cs
using UnityEngine;
using Mirror;

public class TioNetworkManger : NetworkManager
{
    
}
```

Dessa forma tudo o que o *NetworkManger* tem o nosso *TeuNomeNetworkManger* terá e podemos colocar coisas novas ou modificar as antigas!<br>
O *NetworkManger* tem 4 funções básicas que são executadas em momentos específicos da conexão com o player e é importante conhecer elas.
* OnStartServer: executada quando o servidor ficar online (acontece somente uma vez)
* OnStopServer: executada quando o servidor fica offline (acontece somente uma vez)
* OnClientConnect: executada quando um cliente conecta com o servidor (acontece sempre que um novo cliente conecta e se um cliente desconectar e reconectar ele conta como um novo cliente)
* OnClientDisconect: executada quando um cliente desconecta do servidor

Vamos Testar cada uma delas
```cs
public class TioNetworkManger : NetworkManager
{
    public override void OnStartServer()
    {
        base.OnStartServer();

        Debug.Log("Seja bem vindo!");
    }

    public override void OnStopServer()
    {
        base.OnStopServer();

        Debug.Log("Encerrando o Server...");
    }

    public override void OnClientConnect()
    {
        base.OnClientConnect();

        Debug.Log("Novo jogador conectado!");
    }

    public override void OnClientDisconnect()
    {
        base.OnClientDisconnect();

        Debug.Log("Um jogador saiu da partida...");
    }
}
```

Vamos testar as nossas modificações e para isso precisaremos criar uma nova cena com o *NetworkController*, mas ao invés de usar o *NetworkManger* usaremos o *TeuNomeNetworkManager*<br>
Sabemos que funcionou através das saídas do console da Unity.<br>
Agora vamos utilizar essas funções para alterar o ponto de Spawn do Player para que os jogadores não dêem spawn na mesma posição.<br>
Antes disso vamos alterar um pouco o nosso cenário. Construa paredes ao redor do cenário e dois objetos vazios que sirvam para marcar os pontos de spawn dos jogadores.
```cs
public class TioNetworkManger : NetworkManager
{
    public Transform player1SpawnPoint;
    public Transform player2SpawnPoint;
        
    public override void OnServerAddPlayer(NetworkConnectionToClient conn)
    {
        Transform startPoint;
                
        if(numPlayers == 0)
        {
            startPoint = player1SpawnPoint;
        }
        else
        {
            startPoint = player2SpawnPoint;
        }
        
        GameObject new_player = Instantiate(playerPrefab, startPoint.position, startPoint.rotation);

        NetworkServer.AddPlayerForConnection(conn, new_player);
    }
}
```
Preencha os campos e TESTE!<br>
Agora que vemos os Spawns estão funcionando vamos entender o código:<br>
Primeiro temos dois campos responsáveis por receber os Transforms dos Spawns:
```cs
public Transform player1SpawnPoint;
public Transform player2SpawnPoint;
```
Após isso utilizamos o método OnServerAddPlayer para verificar a quantidade de jogadores já conectados ao servidor. Caso não tenhamos jogadores conectados nós utilizamos o primeiro spawn point, caso contrário nós utilizamos o segundo spawn point.<br>
Daí pra frente basta instanciar o novo jogador passando a posção e rotação do spawn point selecionado e então registrar o player no servidor.
