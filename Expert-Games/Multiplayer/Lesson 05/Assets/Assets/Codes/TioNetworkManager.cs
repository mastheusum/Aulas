using Mirror;
using System.Collections.Generic;
using UnityEngine;
public class TioNetworkManager : NetworkManager
{
    public override void OnStartServer()
    {
        base.OnStartServer();

        print("Seja bem vindo!");
    }
    public override void OnStopServer()
    {
        base.OnStopServer();

        print("Encerrando o jogo");
    }
    public override void OnClientConnect()
    {
        base.OnClientConnect();

        print("Novo jogador conectado!");
    }
    public override void OnClientDisconnect()
    {
        base.OnClientDisconnect();

        print("Um jogador saiu da partida...");
    }


    // Variáveis para o Spawn do Player
    public Transform playerSpawnPoint1; 
    public Transform playerSpawnPoint2;

    // Variáveis para o Spawn da Coin
    public List<Transform> coinSpawnPoints;
    public int maxCoinsInGame = 2;
    public static int spawnedCoins = 0;

    public override void OnServerAddPlayer(NetworkConnectionToClient conn)
    {
        Transform startPoint;
        Color color;

        if (numPlayers == 0)
        {
            startPoint = playerSpawnPoint1;
            color = Color.blue;
        }
        else
        {
            startPoint = playerSpawnPoint2;
            color = Color.red;
            InvokeRepeating("SpawnCoins", 2, 2);
        }

        GameObject newPlayer = Instantiate(
            playerPrefab,
            startPoint.position, startPoint.rotation
            );
        newPlayer.GetComponent<Player>().myColor = color;

        NetworkServer.AddPlayerForConnection(conn, newPlayer);
    } 

    public void SpawnCoins()
    {
        if (spawnedCoins < maxCoinsInGame)
        {
            Vector3 local = coinSpawnPoints[
                Random.Range(0, coinSpawnPoints.Count)
            ].position;

            GameObject newCoin = Instantiate(
                spawnPrefabs.Find( prefab => prefab.name == "Coin" ),
                local, Quaternion.identity
            );

            spawnedCoins++;
            NetworkServer.Spawn(newCoin);
        }
    }

}
