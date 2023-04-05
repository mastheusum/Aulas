# Comunicação Client & Server

#### Pré-aula
Na aula de hoje veremos sobre atributos de rede que são responsáveis por modificar o comportamento de alguns métodos e também sobre como utilizar outros objetos na rede.

### Atributos de Rede
Sabemos que o server é responsável pelo que acontece na cena e pelos objetos spawnados, porém o que acontece se um Player ganha pontos? Ou perde/ganha HP? Ou ainda, se o Player destrói algo na cena? Tudo isso acontece somente naquele client e os outros não saberão que isso aconteceu. Para que os outros clients fiquem sabendo dessas informações, o nosso Player deve comunicar o server das mudanças e ele então atualiza para todos os outros Players o que houve.<br>
[![001](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2004/Screenshots/001.png "001")](https://github.com/mastheusum/Aulas/blob/main/Expert-Games/Lesson%2004/Screenshots/001.png "001") <br>
Essa comunicação é possível usando atributos especiais que modificam as funções e variáveis de um script. Um deles é o atributos [Command], usado quando queremos que uma função do client seja executada no Server.