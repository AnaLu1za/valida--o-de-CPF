// CÓDIGO DE VALIDAÇÃO DO EMAIL
// ------------------------------------------
// Obtém o valor do campo de e-mail do primeiro formulário da página
function checarEmail(){
    // Verifica se o campo de e-mail está vazio ou se não contém o caractere "@"
    if(document.forms[0].email.value == "" ||    
       document.forms[0].email.value.indexOf('@') == -1||
       document.forms[0].email.value.indexOf('') == -1){
        // Exibe um alerta informando que o e-mail é inválido
       alert("Por favor, informe um e-mail valido");
       // Impede o envio do formulário (retorna falso)
       return false;
    }else{
        // Se o e-mail for válido, exibe o valor do e-mail em um elemento com o id "email"
        document.getElementById('email').innerHTML = document.forms[0].email.value;
        // Exibe um alerta confirmando o e-mail
        alert("Email confirmado");
       
    }
}
 
 
// ------------------------------------------
 
 
// CÓDIGO DE VALIDAÇÃO DO EMAIL DIGITADO
// ------------------------------------------