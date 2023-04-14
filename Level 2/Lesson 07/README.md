# Geek Brawl - Iniciando o Jogo

### Pré-aula
* Este material foi preparado em 13 de abril de 2023, então a versão utilizada foi a 3.5.2 LTS pois a Franquia ainda não atualizou o conteúdo do portal pra a versão 4.0.2 Lastest.

* Esta primeira aula está sendo preparada tendo em vista que o conteúdo do portal será passado para casa como atividade de casa então não serão utilizados Sprites, entretanto eles ainda serão adicionados ao final da aula como ponto de partida para os alunos verem o que tem no portal.

## Criando o Projeto
**OBS**:


O Godot é composto por duas telas:
* Prompt (tela preta)
* Godot

Ambas as janelas precisam estar funcionando para a Godot se manter funcionando. Caso uma delas feche ambas as telas irão fechar.


Caso a janela do *Prompt* não abra não há problema, o problema acontece de ela ser fechada depois de aberta pois isto irá fechar a Godot junto.


Para criar um projeto clique no botão **New Project** no lado direito da tela e uma nova janela irá aparecer


![001](Screenshots/001.png "001")


Cuidado onde irá salvar o projeto para não esquecer, então recomendo que salve em **Documents/Godot/Projects**, caso este caminho não exista então basta criar.


Quanto ao nome do projeto dê preferência siga um padrão para a aula: **[Dia da Semana] [Hora da aula] [Nome do aluno Aluno]** como no exemplo: **Sexta 14h Davi**


### Entendendo a interface
Ao entrar na Godot será recebido pela seguinte interface:


![001](Screenshots/002.png)


Vamos entender cada parte antes de sair fazendo as coisas.


* **Scene**
  

  Nessa parte da tela estarão dispostos todos os objetos da cena, como inimigos, plataformas, player, entre outros. Cenas são as telas do jogo (Menu, Game, Lose, etc.). 


  ![003](Screenshots/003.png)

* **FileSystem**
  

  Nessa parte ficarão todos os arquivos importados para o projeto (Imagens, Sons, Vídeos, entre outros). 


  ![004](Screenshots/004.png)

* **Inspector**
  
  
  Nele é possível configurar qualquer objeto que estiver selecionado na Viewport. Por exemplo: tamanho, posição na tela, cor, entre outros (veremos um pouco mais sobre isso a seguir). 


  ![005](Screenshots/005.png)