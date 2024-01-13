# RV - Inimigos

Hoje trabalhamos com os inimigos do nosso game, onde eles são spawnados em waves (mecânica que trabalha com “rodadas”, onde cada nova rodada terá mais inimigos na tela) e se movimentam em direção ao Player.

- Criação do Inimigo 
  - Procure um modelo para o inimigo (lembre-se que ele será do tipo que flutua)
    - foi utilizanda na preparação o modelo [Low Poly Combat Drone](https://www.google.com/url?q=https://assetstore.unity.com/packages/3d/low-poly-combat-drone-82234&sa=D&source=editors&ust=1701182267416670&usg=AOvVaw37DPNpZ7sxFA876q6XYVYu)
  - Crie um objeto vazio na cena para fazer o inimigo de nome Enemy
    - adicione o modelo do inimigo ao objeto criado
    - adicione os componentes a ele
      - BoxCollider & Rigidbody
  - Faça o script da movimentação do inimigo
    - ![001](Screenshots/001.png)
    - Adicione ao objeto Enemy
  - Transforme o Enemy em um Prefab
  - Crie 6 pontos de spawn para os inimigos
    - Recomendo motar algo semelhante a uma grade do tipo 2x3 (linha x colunas)
    - ![002](Screenshots/002.png)
- Spawn dos Inimigos
  - Crie um objeto vazio de nome EnemyController, ele será responsável pelo controle das waves
  - Crie um script de nemo EnemyController
    - Adicione ao objeto EnemyController
    - ```cs
      using UnityEngine;

      public class EnemyController : MonoBehaviour
      {
        public List<Transform> spawnPoins;
        public GameObject enemyPrefab;

        public int wave;
        public int enemiesToKill;

        [SerializeField] float spawnDelay = 3;
        [SerializeField] float speedBoost = 2;

        private void Start()
        {
          NextWave();
        }

        public void StartWave()
        {

          if (!IsInvoking("SpawnEnemy"))
          {
            NextWave();
            InvokeRepeating("SpawnEnemy", spawnDelay, spawnDelay);
            }
        }

        public void StopWave()
        {
          CancelInvoke("SpawnEnemy");
        }

        void NextWave()
        {
          wave++;

          enemiesToKill = wave * 10;
          speedBoost = speedBoost + speedBoost * 0.2f;
          spawnDelay = spawnDelay - spawnDelay * 0.1f;
        }

        public void SpawnEnemy()
        {
          Transform spawnPoint = spawnPoins[Random.Range(0, spawnPoins.Count)];

          GameObject new_enemy = Instantiate(enemyPrefab, spawnPoint.position, spawnPoint.rotation);

          new_enemy.GetComponent<EnemyMovement>().speed += speedBoost;
        }
      }
      ```
    - Volta na Unity e preencha os campos
      - ![003](Screenshots/003.png)
  - Adicione ao ImageFill_Interact mais uma chamada no evento para iniciar as waves
    - ![004](Screenshots/004.png)
- Faça o teste e veja se está tudo certo
  - ![005](Screenshots/005.gif)
- Configurando a Arma e Projéteis
  - Procure pelo modelo da arma
    - foi utilizado o modelo [Sci-fi Pistol [PBR]](https://www.google.com/url?q=https://assetstore.unity.com/packages/3d/props/guns/sci-fi-pistol-pbr-213679&sa=D&source=editors&ust=1701182267426585&usg=AOvVaw2b29F7P_b2Nj7OVe8JYiEW)
      - Caso a textura não carregue altere a propriedade Shader (logo abaixo do nome do material) para **Universal Render Pipeline/Lit**
    - Nele está incluso o projétil, mas é permitido que os alunos façam seus próprios projéteis
  - Posicione a arma como filha da câmera. Cuidado para não atrapalhar a visão
  - Vá até o prefab do projétil e adicione o componente **Trail Renderer**
    - ![006](Screenshots/006.png)
      - Abra o prefab e aperte o botão de play para ver o resultado do Trail
  - Crie o script **BulletMovement**
    - ![007](Screenshots/007.png)
- Lesson 04 | Disparando os Projéteis
  - A lógica do disparo é bem simples: caso o Player esteja olhando para um inimigo, serão disparadas várias balas com um delay entre uma e outra. Faremos um script chamado Player_Shoot que vai cuidar disso:
    - ![008](Screenshots/008.png)
  - Adicione o script ao Player
  - Crie um objeto no Player chamado shootPint
    - ![009](Screenshots/009.png)
  - Devemos arrastar todos os objetos para o script também:
    - ![010](Screenshots/010.png)
  - Agora precisamos atualizar o código do movimento da bullet no script BulletMovement
    - ```cs
        public class EnemyMovement : MonoBehaviour
        {
            Rigidbody rb;
            public GameObject player; // nova vairável
            public float speed = 3;

            void Start()
            {
                rb = GetComponent<Rigidbody>();
                player = GameObject.Find("Player"); // nova linha
            }

            void FixedUpdate()
            {
                rb.velocity = transform.forward * speed;
            }

            // novos métodos
            public void OnPointerEnter()
            {
                player.GetComponent<PlayerShoot>().isAimingEnemy= true;
            }

            public void OnPointerExit()
            {
                player.GetComponent<PlayerShoot>().isAimingEnemy= false;
            }

            private void OnCollisionEnter(Collision collision)
            {
                if (collision.gameObject.GetComponent<BulletMovement>())
                {
                    OnPointerExit();
                    Destroy(collision.gameObject);
                    Destroy(gameObject); 
                }
            }
        }
      ```
    - Perceba que já fizemos também a checagem de colisão com o **OnCollisionEnter()** e o inimigo será destruído com apenas um tiro (a bala também).
    - Se fizermos o teste agora, veremos que o inimigo está sendo derrotado, mas há um erro aparecendo no console após ele ser destruído:
      - ![011](Screenshots/011.png)
      - Esse erro ocorre pois o script responsável pela retícula não faz uma verificação se o objeto que estávamos olhando foi destruído, então ele tenta chamar as funções OnPointerEnter() e OnPointerExit() de um objeto nulo, causando a mensagem.
      - Para corrigir esse problema vamos abrir o script CardboardReticlePointer e alterar a função **Update()**:
      - ```cs
          private void Update()
          {
            RaycastHit hit;
            if (Physics.Raycast(transform.position, transform.forward, out hit, _RETICLE_MAX_DISTANCE))
            {
                if (_gazedAtObject != hit.transform.gameObject)
                {
                    // -- novo IF --
                    if (_gazedAtObject)
                    {
                        _gazedAtObject?.SendMessage("OnPointerExit");
                    }
                    // -- end --
                    _gazedAtObject = hit.transform.gameObject;
                    _gazedAtObject.SendMessage("OnPointerEnter");
                }

                bool isInteractive = (1 << _gazedAtObject.layer & ReticleInteractionLayerMask) != 0;
                SetParams(hit.distance, isInteractive);
            }
            else
            {
                // -- novo IF --
                if (_gazedAtObject)
                {
                    _gazedAtObject?.SendMessage("OnPointerExit");
                }
                // -- end --
                _gazedAtObject = null;
                ResetParams();
            }
            
            if (Google.XR.Cardboard.Api.IsTriggerPressed)
            {
                _gazedAtObject?.SendMessage("OnPointerClick");
            }

            UpdateDiameters();
          }
      ```
    - Corrigido o erro o jogo estará funcionando corretamente
    - ![012](Screenshots/012.gif)
