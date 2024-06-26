# Seleção de Personagens

Tento um personagem que ataca se recupera a ideia agora é podermos escolher entre personagens para usar no nosso jogo e com mais alguma ajuda do Mixamo desenvolvemos os novos personagens e o sistema de seleção.

- Baixe 2 novos modelos no Mixamo com T-Pose, IDLE, ATTACK e DEATH
  - Já foram deixados modelos preparados para não ser necessário baixar durante a aula
- Configure os novos modelos da mesma forma com foi feito com o modelo da aula anterior
- Crie o Animation Controller
- Ele deve ser feito igual ao da aula anterior, repetindo até mesmo o nome dos parâmetros
  - Isso deve ser feito dessa forma pois usaremos sempre o mesmo script para aterar os parâmetros do Animator do personagem
- Renomeie o Prefab AR_Object para o nome que você deseja para o primeiro personagem e então duplique-o para fazer os outros dois personagens
  - Antes
    - ![001](Screenshots/001.png)
  - Depois
    - ![002](Screenshots/002.png)
  - No final
    - ![003](Screenshots/003.png)
- Lembre de adicionar os Animator Controller dos novos personagens
- Lembre-se de configurar o script **Stats** para cada um deles e alterar a escala
- Construa no Canvas a HUD de seleção de personagens usando a imagem de cada personagem nos botões
  - Para conseguir a imagem basta tirar um print do rosto do personagem
    - Herarchy
      - ![006](Screenshots/006.png)
    - Cena
      - ![004](Screenshots/004.png)
  - Lembre-se de configurar o Image Type para Sprite (2D and UI)
- **Opcional**: configure o CombatPanel para que ele tenha Icones nos botões
  - Exemplo:
    - ![005](Screenshots/005.png)
- Deixe o CombatPanel e o AR_PlaceObject desabilitados
- Deixe o ChooseCharacterPanel habilitado
- Vá nos prefabs dos personagens e altere a propriedade isPlayer para **false**, pois apenas o que nós selecionarmos deve ter este valor como **true**
- No script AR_PlaceObject devemos criar uma nova função chamada SelectCharacter
  - ![007](Screenshots/007.png)
- Outra mudança que ocorre na programação é que a variável **isPlayer** do script Stats deve ser **public** e que o variável **objectToSpawn** deve ser **private**
- Adicione o componente Button nas fotos dos personagens do painel de seleção
  - No evento OnClick devemos fazer uma chamada para o método SelectCharacter e passar como parâmetro o personagem
  - Habilitar o AR_PlaceObjects
  - Desabilitar o ChooseCharacterPanel
    - ![008](Screenshots/008.png)
- Repita o processo anterior para todos os personagens
- Vamos criar uma arena onde os personagens podem lutar
  - Esta arena pode ser feita utilizando cubos e outros objetos da Unity ou você pode usar uma pronta
  - Caso queira utilizar uma pronta o portal possui o link para um Asset na Unity
    - [arena](https://assetstore.unity.com/packages/3d/environments/fantasy/low-poly-gladiators-arena-167116)
    - Este asset já foi adicionado a conta padrão da SuperGeeks Maceió, basta olhar em **Package Manager > My Assets**
  - Independente da escolha a Arena deve ser feita em um único Prefab pois precisará ser instanciada posteriormente
  - Ajuste a escala da arena
- Crie dentro da arena dois objetos vazios para marcar os pontos de spawn do Player e do Opponent
  - ![011](Screenshots/011.png)
  - Os BoxColliders foram colocados apenas para ajudar a visualizar os pontos de spawn, eles não devem permanecer ativos
- Programe o AR_PlaceObjects para que ele possa saiba quem é a arena e quem são os adversários
  - O resultado será como abaixo
    - ![009](Screenshots/009.png)
- Altere o Stats para que ele tenha informação de quem é o oponente do nosso personagem
  - ![010](Screenshots/010.png)
- De volta ao AR_PlaceObjects altere a função SpawnObjects() para criar os outros objetos
  - ![012](Screenshots/012.png)
- Preencha os novos campos
- Faça a build e teste