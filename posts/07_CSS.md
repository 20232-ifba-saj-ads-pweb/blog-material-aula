---
icon: edit
date: 2023-10-03 19:30:00.00 -3
category:
  - PWEB
tag:
  - CSS
order: 7
---
# Uma visão geral do CSS

[^CSSw3]

CSS é um idioma que usamos para estilizar uma página da web.

## O que é CSS?
- CSS significa folhas de estilo em cascata (Cascading Style Sheets)
- CSS descreve como os elementos HTML devem ser exibidos na tela, papel ou em outras mídias
- O CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web de uma só vez
- Folhas de estilo externas são armazenados em arquivos CSS

## Por que usar CSS?

O CSS é usado para definir estilos para suas páginas da web, incluindo design, layout e variações na exibição para diferentes dispositivos e tamanhos de tela.

## CSS Solved a Big Problem

O HTML nunca pretendia conter tags para formatar uma página da web!

O HTML foi criado para descrever o conteúdo de uma página da web, como:

```htm
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

Quando tags como `<font>` e atributos de cores foram adicionadas à especificação HTML 3.2, ele iniciou um pesadelo para desenvolvedores da Web. O desenvolvimento de sites grandes, onde fontes e informações de cores foram adicionadas a todas as páginas, tornaram-se um processo longo e caro.

Para resolver esse problema, o World Wide Web Consortium (W3C) criou o CSS.

O CSS removeu a formatação do estilo da página HTML!


## O CSS salva muito trabalho!

As definições de estilo são normalmente salvas em arquivos .css externos.

Com um arquivo de folha de estilo externo, você pode alterar a aparência de um site inteiro alterando apenas um arquivo!


## Sintaxe do CSS

Uma regra CSS consiste em um seletor e um bloco de declaração.

![](https://www.w3schools.com/css/img_selector.gif)

O seletor aponta para o elemento HTML que você deseja estilizar.

O bloco de declaração contém uma ou mais declarações separadas por ponto e virgula.

Cada declaração inclui um nome de propriedade CSS e um valor, separado por um dois pontos.

Várias declarações de CSS são separadas com ponto e virgula e os blocos de declaração são cercados por chaves.


```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                color: red;
                text-align: center;
            } 
        </style>
    </head>
    <body>
        <p>Hello World!</p>
        <p>These paragraphs are styled with CSS.</p>
    </body>
</html>
```
## CSS Selectors

Um seletor CSS seleciona os elementos HTML que você deseja estilizar.

Os seletores CSS são usados para "encontrar" (ou selecionar) os elementos HTML que você deseja estilizar.

Podemos dividir os seletores de CSS em cinco categorias:

- Seletores simples (selecione elementos com base em nome, ID, classe)
- Seletores de combinadores (selecione elementos com base em um relacionamento específico entre eles)
- Seletores de pseudo-classe (selecione elementos com base em um determinado estado)
- Seletores de pseudo-elementos (selecione e estilo parte de um elemento)
- Seletores de atributos (selecione elementos com base em um atributo ou valor de atributo)

### O seletor de elementos CSS

O seletor de elementos seleciona elementos HTML com base no nome do elemento.

```html
<!DOCTYPE html>
<html>
<head>
<style>
p {
  text-align: center;
  color: red;
} 
</style>
</head>
<body>

<p>Every paragraph will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

</body>
</html>
```

### O seletor de ID do CSS

O seletor de ID usa o atributo ID de um elemento HTML para selecionar um elemento específico.

O ID de um elemento é único em uma página, portanto o seletor de ID é usado para selecionar um elemento exclusivo!

Para selecionar um elemento com um ID específico, escreva um caractere hash (#), seguido pelo ID do elemento.

```html
<!DOCTYPE html>
<html>
<head>
<style>
#para1 {
  text-align: center;
  color: red;
}
</style>
</head>
<body>

<p id="para1">Hello World!</p>
<p>This paragraph is not affected by the style.</p>

</body>
</html>
```

## Material extra


- [https://cssgridgarden.com/](https://cssgridgarden.com/)
- [http://www.csszengarden.com/](http://www.csszengarden.com/)

## Grid CSS

O Grid CSS oferece um sistema de layout baseado em grade, com linhas e colunas, facilitando o design de páginas da web sem precisar usar `float` e `position`.

::: normal-demo Demo

```html
<h1>Grid Layout</h1>

<p>This grid layout contains six columns and three rows:</p>

<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>
```

```css
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
```

:::


## Criando Layouts com CSS Grid Layout

Demanda:  
> Eu preciso criar um layout com um cabeçalho, um menu lateral, o conteúdo principal e um rodapé


logo: 

```htm
<header>Cabeçalho</header>
<aside>Menu lateral</aside>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>
```

agora precisamos posiciona-las da seguinte maneira:

- Header: Em cima da página
- Aside: Na parte esquerda da página
- Main: Na parte direita da página
- Footer: Em baixo da página

### Conhecendo o CSS Grid Layout

Como criar layouts era uma tarefa comum no dia-a-dia e às vezes um tanto quanto chata de se implementar em css (ou usando até `table` para posicionar elementos), a galera pensou: "Será que não seria possível melhorar esse processo, deixando mais rápido e eficiente?", foi nesse contexto que criou-se a nova funcionalidade chamada de CSS Grid Layout.

Nosso primeiro passo será definir qual tag vai receber as "lacunas" para posteriormente adicionarmos nossos elementos. Bom, se tudo esta dentro de body, temos um bom candidato:

```css
body {
  display: grid;
}
```

### Iniciando o posicionamento

::: normal-demo Grid

```html
<div class="grid-container">
<header>Cabeçalho</header>
<aside>Menu lateral</aside>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>
</div>
```

```css
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grid-container{
  background-color: blue;
  display: grid; 
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 20vh 70vh 10vh;
}

header, aside, main, footer{
  background-color: red;
}

header{
  background-color: green;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

aside{
  background-color: blue;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

main{
  background-color: red;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

footer{
  background-color: yellow;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

:::

## grid-template-areas

A propriedade `grid-template-areas` especifica áreas dentro do layout de Grid.

Você pode nomear itens de grid usando a propriedade `grid-area` e, em seguida, referência ao nome na propriedade `grid-template-areas`.

Cada área é definida por aspas. Use um sinal de `.` para se referir a um item de grade sem nome.



::: normal-demo Grid Area

```html
<div class="grid-container">
<header>Cabeçalho</header>
<aside>Menu lateral</aside>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>
</div>
```

```css
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grid-container{
  background-color: blue;
  display: grid; 
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas: "header header"
                       "menu content"
                       "footer footer";
    
}

@media only screen and (max-width: 600px) {
  .grid-container {
    background-color: lightblue;
    grid-template-columns: 1fr;
    grid-template-rows: 15vh 15vh 60vh 10vh;
    grid-template-areas: "header "
                         "menu "
                         "content"
                         "footer ";
  }
}

header, aside, main, footer{
  background-color: red;
}

header{
  background-color: green;
  grid-area: header;
}

aside{
  background-color: blue;
  grid-area: menu;
}

main{
  background-color: red;
  grid-area: content;
}

footer{
  background-color: yellow;
  grid-area: footer;
}

```

:::

## Material extra/Referências

<iframe width="560" height="315" src="https://www.youtube.com/embed/HN1UjzRSdBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [https://github.com/rocketseat-content/youtube-desvendando-css-grid](https://github.com/rocketseat-content/youtube-desvendando-css-grid)
- [https://www.alura.com.br/artigos/criando-layouts-com-css-grid-layout](https://www.alura.com.br/artigos/criando-layouts-com-css-grid-layout)
- [https://www.w3schools.com/css/css_grid.asp](https://www.w3schools.com/css/css_grid.asp)
- [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)




<!-- @include: ../bib/bib.md -->