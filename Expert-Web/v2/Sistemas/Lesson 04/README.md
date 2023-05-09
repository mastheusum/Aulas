# Introdução ao CSS

#### Pré-aula
Verifique o progresso dos alunos no portal e o progresso das atividades passadas para casa.

### Introdução
Até o momento vimos HTML que é muito útil para a criação da estrutura do site, mas ainda não vimos como trabalhar o visual da página. Nesse quesito o HTML é bem limitado.<br>
Com o objetivo de fazer sites mais bonitos e adaptativos para quaisquer dispositivos vamos aprender uma linguagem que trabalhe apenas na formatação do site. Esta linguagem se chama **CSS** ou *Cascading Style Sheet*<br>

### Sintaxe CSS e Seletores
Uma página pode ter regas e definições de aparência, posicionamento e diagramação dos conteúdos marcados nas páginas.<br>
A linguagem possui uma sintaxe bastante parecida com linguagens de programação vistas anteriormente, mas é importante lembrar que CSS não é uma linguagem de programação.
```css
h1 {
    color: orange;
    text-align: center;
}
```
No exemplo anterior temos:
* um seletor que é o *h1* que indicará quem será selecionado na página (neste caso todas as tags h1)
* **{}** indicando onde inicia e encerra o bloco de declaração
* duas declarações cada uma representada por `propriedade: valor;`
* **color** e **text-align** as propriedades que desejamos modificar
* **orange** e **center** os valores que as propriedades anteriores devem receber

### Seletores CSS
Os seletores são usados para selecionar/encontrar elementos do HTML
Existem 3 maneiras básicas de se ter um seletor:
1. TAG
2. ID
3. Classe
Podemos selecionar por tag como no exemplo abaixo onde usamos o *h1* e dessa forma todos os h1 receberão as alterações indicadas na regra.
```css
h1 {
    color: orange;
    text-align: center;
}
```
Podemos selecionar por ID, lembrando que um ID é único na página. No exemplo abaixo ele irá procurar por alguma tag com o ID *Menu* e então aplicar as alterações que colocamos e SIM o **#** é necessário na identificação de IDs assim como foi na aula de Hyperlinks
```css
#menu {
    color: red;
}
```
Podemos selecionar por Classe. Uma classe não é única e pode ser utilizada até mesmo por diferentes tipos de tag.
```css
.btn {
    border: solid 1px red;
}
```

### Como usar
Podemos utilizar CSS de três formas, sendo a última a mais utilizada por nos permitir reaproveitar o CSS de mais eficientemente.<br>
CSS Interno:<br>
Nesse caso o CSS é incluso na página (normalmente no cabeçalho) e lá as regras são escritas:
```HTML
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
            margin: left;
        }
    </style>
</head>
```
CSS Inline:<br>
Nesse caso o código CSS fica dentro da TAG. Esse formato é muito útil para testar certas regras antes de aplicar a página:
```html
<h1 style="color: blue; margin-keft: 20px;">This is a heading</h1>
```
CSS Externo:
Neste caso o código CSS fica em outro arquivo e é importado para as páginas que queremos (ainda no cabeçalho) com o código abaixo:
```html
<link real="stylesheet" href="/meu_arquivo.css">
```

### Tópicos finais
1. Cores
    1. Nomes
    2. Hexadecimal
    3. RGB
    4. RGBA
2. Cor da borda
3. Cor de fundo
4. Imagem de Fundo: `background-image: url('url_da_imagem.jpg');`
    1. Repetir `background-repeat`
5. Estilos de borda
    1. dotted
    2. dashed
    3. solid
    4. double
    5. groove
    6. ridge
    7. inset
    8. outset
    9. none
    10. hidden
6. Largura da borda
    1. `border-width: 5px;`
    2. `border-width: medium;`
    3. `border-width: 3px 10px 5px 21px;`
7. Boras arredondadas
8. Alinhamento de texto `text-align`
9. Decoração de texto
10. Transformações de texto
    1. `text-transform: uppercase;`
    1. `text-transform: lowercase;`
    1. `text-transform: capitalize;`
11. Sombra de texto
12. Font Family
13. Tamanho da fonte