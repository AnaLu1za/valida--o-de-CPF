// CÓDIGO DE VALIDAÇÃO DO EMAIL
// ------------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1||
       document.forms[0].email.value.indexOf('') == -1){
       alert("Por favor, informe um e-mail valido");
       return false;
    }else{
        document.getElementById('email').innerHTML = document.forms[0].email.value;
        alert("Email confirmado");
       
    }
}
 
 
// ------------------------------------------
 
 
// CÓDIGO DE VALIDAÇÃO DO EMAIL DIGITADO
// ------------------------------------------