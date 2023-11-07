---
icon: edit
date: 2023-10-24 18:30:00.00 -3
category:
  - aula
tag:
  - html
  - form
order: 13
---

# Formulários HTML

Um formulário HTML é usado para coletar a entrada do usuário. A entrada do usuário é geralmente enviada a um servidor para processamento.


<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```


## O elemento <form>

O elemento HTML <form>é usado para criar um formulário HTML para entrada do usuário:

```htm
<form>
.
form elements
.
</form>
```

O <form>elemento é um contêiner para diferentes tipos de elementos de entrada, como: campos de texto, caixas de seleção, botões de opção, botões de envio, etc.

## O elemento `<input>`

O elemento HTML `<input>` é o elemento de formulário mais usado.

Um elemento `<input>` pode ser exibido de várias maneiras, dependendo do type atributo.

aqui estão alguns exemplos:
  


|Tipo|	Descrição|
|--|--|
|`<input type="text">`	          |Exibe um campo de entrada de texto de linha única|
|`<input type="radio">`	          |Exibe um botão de opção (para selecionar uma das muitas opções)|
|`<input type="checkbox">`	|Exibe uma caixa de seleção (para selecionar zero ou mais dentre muitas opções)|
|`<input type="submit">`	          |Exibe um botão enviar (para enviar o formulário)|
|`<input type="button">`	          |Exibe um botão clicável|