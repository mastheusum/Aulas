# Inimigos

## Preparando a aula

### Passos
- Estrutura do Enemy no jogo
- Explicar/Relembrar Pathfinding
- Baixar [NavMeshPlus](https://github.com/h8man/NavMeshPlus)
  - Extraia-o e importe para a Unity
  - Por motivos de organização coloque-o em uma pasta separada
- Preparando NavMesh
  - Crie um objet vazio chamado NavMesh e adicione nele o componente NavMeshSurface2D
    - **importante**: Rotacione o objeto para que ele fique deitado
  - Vá até o Tilemap *Ground* e adicione o componente NavMeshModifier
    - marque o Overrride Area
    - Area Type: Walkable
  - Vá até o Tilemap *Walls* e adicione o componente NavMeshModifier
    - 