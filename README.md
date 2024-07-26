# Projeto de validação de e-mail e CPF com JavaScript 

## Índice
* [Introdução e-mail](#introdução-e-mail)
* [Funcionalidades e-mail](#funcionalidades-e-mail)
* [Descrição CPF](#descrição-cpf)
* [Introdução CPF](#introdução-cpf)
* [Funcionalidades CPF](#funcionalidades-cpf)
* [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
* [Fontes Consultadas](#fontes-consultadas)


## Introdução e-mail
Este código JavaScript implementa uma função básica para validar um endereço de e-mail. A função verifica se o campo de e-mail está preenchido e se contém o caractere "@" e um ponto ".".

## Recursos do JavaScript utilizados 
**document.forms[0].email.value:**
- ``document:`` Representa o documento HTML completo.
- ``forms[0]:`` Acessa o primeiro formulário do documento.
- ``email:`` Acessa o elemento de entrada com o nome "email" dentro do formulário.
- ``value:`` Obtém o valor (texto) inserido pelo usuário nesse campo.
- **indexOf():**
- É um método de string que retorna o índice da primeira ocorrência de um caractere específico dentro de uma string. Se o caractere não for encontrado, retorna -1.
- ``indexOf('@'):`` Verifica se o caractere "@" existe no endereço de e-mail.
- ``indexOf('.'):`` Verifica se o caractere "." existe no endereço de e-mail.
- **alert():**
- Exibe uma caixa de diálogo com uma mensagem para o usuário.
- **return:**
- Interrompe a execução da função e retorna um valor. Neste caso, return false impede o envio do formulário.
- **document.getElementById('email').innerHTML:**
- ``document.getElementById('email'):`` Obtém o elemento HTML com o ID "email".
- ``innerHTML:`` Define o conteúdo HTML dentro desse elemento.

### Lógica da Validação 
- Obtém o valor do campo de e-mail: A função pega o texto digitado no campo de e-mail.
- Verifica a presença de "@" e ".": Utiliza o método indexOf() para verificar se os caracteres "@" e "." estão presentes no endereço de e-mail.
- Exibe mensagem de erro ou confirmação: Se o e-mail for inválido (não contém "@" ou "."), exibe uma mensagem de erro. Caso contrário, exibe uma mensagem de confirmação e atualiza o conteúdo de um elemento HTML com o valor do e-mail.
- Impede o envio do formulário: Se o e-mail for inválido, retorna false para evitar o envio do formulário.

[<code><img height="102" src="https://pa1.aminoapps.com/6507/6aa143d7fff00eb6650f218bae88398e6e377410_hq.gif"></code>]

## Descrição CPF


## Introdução CPF 


## Funcionalidades CPF


## Técnicas e tecnologias utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)


## Fontes consultadas 
* [Alura - Como escrever um bom README.md](https://www.alura.com.br/artigos/escrever-bom-readme)
* [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
* [Alura - Tipos de type](https://cursos.alura.com.br/forum/topico-type-do-campo-telefone-104370)
* [Dio](https://www.dio.me/articles/tutorial-criando-um-readme-bonitao-para-o-seu-github)
* [Progamador alternativo - Youtube](https://youtu.be/HJ16WEmOWTw?si=UFvCAtBHbuCc08Hu)
* [Fotos para o subtópico "Técnicas e tecnologias consultadas"](https://github.com/alexandresanlim/Badges4-README.md-Profile)
* [HomeHost](https://www.homehost.com.br/blog/tutoriais/html-buttton/)
* [W3schools](https://www.w3schools.com/js/js_window_location.asp)
* [Site de animações para css](https://storyset.com/search)
* [Paleta de cores para html](https://paletadecolores.online/pt/azul/indigo/)
* [Conversor de MP4 para Gif](https://cloudconvert.com/)


## Autor(a)
|  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712281?v=4" width=115><br><sub>Ana Santos</sub>](https://github.com/AnaLu1za) |  
| :---: |

[<code><img height="32" src="https://t.ctcdn.com.br/IwwDh-BajTE4ZwE4zuIcvz9Q2ZY=/i490027.jpeg" alt="Linkedin"/></code>](https://www.linkedin.com/in/ana-luiza-santos-a5032a2a2/)