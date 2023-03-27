# Criando uma aplicação com Mirror

#### Pré-aula
O projeto pode ser feito no mesmo projeto iniciado na aula anterior <br>
Na aula de hoje os alunos verão como criar um projeto no Mirror de forma a permitir a conexão e fazer com que os Jogadores se mantenham sincronizados em todas as telas, mas caso na aula anterior tenha sido criado um jogo 3D recomendo a criação de um novo projeto pois o jogo feito será 2D.

### Network Manager
Comece adicionando um objeto vazio e renomeie pra NetworkController. Nele adicione o componente chamado *Network Manager* e junto dele adicione outro componente o *Kcp Transport*.<br>
Esses dois componentes serão essenciais para a troca de informações entre cliente e servidor, então é importante saber alguns detalhes sobre eles: NetworkManager é responsável por administrar a conexão com o server e como ele afetará a cena do jogo (quem será o Player, quais objetos serão spawnados na cena, as cenas que devem aparecer quando o jogo estiver online ou offline, entre outros). Já o KcpTransport é responsável por fazer o transporte dos dados entre client e server, nele é definida a porta de conexão e tempo de resposta, por exemplo.<br>
* **Server Tick Rate**: a frequência do Update do Server (em segundos). Para jogos que necessitam de um tempo de resposta mais rápido, como jogos de tiro, é interessante uma frequência de 60Hz. Já jogos de RPG ou estratégia, por exemplo, você pode deixar 30Hz.
* **Network Address**: é o endereço do Server, onde você deve colocar o IP de onde ele se localiza ou, se ele estiver na mesma máquina dos clients, pode deixar como localhost.
* **Max Connections**: número máximo de clients simultâneos conectados ao server.
* **Player Prefab**: qual é o prefab do Player que será usado por todos os clients.
* **Registered Spawnable Prefabs**: lista com todos os objetos que serão spawnados durante o jogo, como moedas, poções, inimigos, etc.