using UnityEngine;
using UnityEngine.Events;
using Mirror;
using System;

public class Player : NetworkBehaviour
{
    public float speed = 10;
    public Rigidbody2D body;
    Vector2 dir = Vector2.zero;

    [SyncVar]
    public int coins = 0;
    [SyncVar]
    public Color myColor = Color.white;

    [Serializable]
    public class IntEvent : UnityEvent<int> { }

    public IntEvent OnCoinCollect;
    
    void Start()
    {
        body = GetComponent<Rigidbody2D>();
        GetComponent<SpriteRenderer>().color = myColor;
    }

    void Update()
    {
        if (isLocalPlayer)
        {
            dir.x = Input.GetAxis("Horizontal");
            dir.y = Input.GetAxis("Vertical");

            body.velocity = dir * speed;

            if (Input.GetKeyDown(KeyCode.E))
            {
                TalkToServer();
            }
            if (Input.GetKeyDown(KeyCode.R))
            {
                TalkToAll();
            }
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Coin"))
        {
            AddCoin();
            TioNetworkManager.spawnedCoins--;
            Destroy(collision.gameObject);
        }
    }

    [Server]
    public void AddCoin()
    {
        coins++;
        OnCoinCollect.Invoke(coins);
    }

    [Command]
    void TalkToServer()
    {
        print("Player mandou uma mensagem!");
    }

    [ClientRpc]
    void TalkToAll()
    {
        print("Mensagem do servidor para todos os clientes!");
    }
}
