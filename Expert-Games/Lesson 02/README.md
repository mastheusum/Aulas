# Criando uma aplicação com Mirror

#### Pré-aula
O projeto pode ser feito no mesmo projeto iniciado na aula anterior <br>
Na aula de hoje os alunos verão como criar um projeto no Mirror de forma a permitir a conexão e fazer com que os Jogadores se mantenham sincronizados em todas as telas, mas caso na aula anterior tenha sido criado um jogo 3D recomendo a criação de um novo projeto pois o jogo feito será 2D.

### Network Manager
Comece adicionando um objeto vazio e renomeie pra NetworkController. Nele adicione o componente chamado *Network Manager* e junto dele adicione outro componente o *Kcp Transport*.<br>
Esses dois componentes serão essenciais para a troca de informações entre cliente e servidor, então é importante saber alguns detalhes sobre eles: 
* NetworkManager é responsável por administrar a conexão com o server e como ele afetará a cena do jogo (quem será o Player, quais objetos serão spawnados na cena, as cenas que devem aparecer quando o jogo estiver online ou offline, entre outros).
* KcpTransport é responsável por fazer o transporte dos dados entre client e server, nele é definida a porta de conexão e tempo de resposta, por exemplo.
Atenção à algumas das propriedades desses componentes:
* **Server Tick Rate**: a frequência do Update do Server (em segundos). Para jogos que necessitam de um tempo de resposta mais rápido, como jogos de tiro, é interessante uma frequência de 60Hz. Já jogos de RPG ou estratégia, por exemplo, você pode deixar 30Hz.
* **Network Address**: é o endereço do Server, onde você deve colocar o IP de onde ele se localiza ou, se ele estiver na mesma máquina dos clients, pode deixar como localhost.
* **Max Connections**: número máximo de clients simultâneos conectados ao server.
* **Player Prefab**: qual é o prefab do Player que será usado por todos os clients.
* **Registered Spawnable Prefabs**: lista com todos os objetos que serão spawnados durante o jogo, como moedas, poções, inimigos, etc.

Após adicionar os componentes adicione o *KcpTransport* ao *NetworkManager*.<br><br>

Após estas configurações iniciais crie um Player com um script de movimentação Top-Down e a seguinte lista de componente:
1. Rigidbody2D
2. Box Collider 2D
3. Network Identity (responsável por identificar o objeto na rede)
4. Script
Teste-o e então transfor-me o em um *Prefab*<br>
O diferencial neste script é que ele irá herdar suas propriedades do *NetworkBehavior* e o código responsável por sua movimentação dele será executado apenas se a criação dele tiver ocorrido na máquina local, ou seja, o cliente quando cria o próprio Player será capaz de movimentar ele, mas caso ele tenha sido criado pelo servidor o código de movimentação não irá acontecer.
```cs
using UnityEngine;
using Mirror;

public class PlayerBehavior : NetworkBehaviour
{
    public Rigidbody2D body;
    public float speed = 5;

    float inputX, inputY;
    private void Start()
    {
        body = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        if (isLocalPlayer)
        {
            inputX = Input.GetAxis("Horizontal");
            inputY = Input.GetAxis("Vertical");

            body.velocity = new Vector2(inputX, inputY);
        }
    }
}
```

Após isto basta utilizar o ParrelSync para abrir um dos clones do projeto e então executar o original e o clone. O original deve ser iniciado como Servidor e o clone como Cliente e então ver a movimentação.<br>
Faça os alunos testarem<br>

Será notável que a conexão acontece, mas a posição do Player não é atualizada em ambas as telas, apenas no tela local. Para resolver isto adicione ao Prefab Player o componente *Network Transform (unreliable)* e teste novamente (junto com os alunos).<br>
Agora funciona pois este componente atualiza o transform do objeto em todas as telas.<br>
Atividade:
Faça um jogo Top-Down semelhante ao Geek Brawl:
1. Prepare o Player com movimentação Top-Down
2. Faça a Bullet que se movimenta em linha reta
2. 1. A Bullet deve se auto-destruir após 3 segundos
3. Faça um mapa fechado para impedir os jogadores de ir embora
4. Programe para que o jogador perca vida caso seja tocado pela Bullet
4. 1. Caso isto aconteça a Bullet se auto-destroy
5. Caso o jogador perca todos os pontos de vida o seguinte deve acontecer:
5. 1. O jogador derrotado é desconectado
5. 2. O jogador vencedor recupera toda a vida.
