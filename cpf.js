// VALIDAÇÃO DE CPF DIRETO DO JAVASCRIPT
// Adicionando escutador ao formulário
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio padrão do formulário
 
    const cpf = document.getElementById('cpf').value; // Obtém o valor do campo CPF
    const msg = document.getElementById('message'); // Obtém a referência ao elemento para mostrar a mensagem
 
    if(validarCPF(cpf)){ // Chama a função de validação e verifica o resultado
        msg.textContent = 'O CPF é válido!';
        msg.style.color = 'green';
    }else{
        msg.textContent = 'O CPF é inválido!';
        msg.style.color = 'red';
    }
}
);
 
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
 
    // Estrutura de decisão para verificar quantidade de dígitos e se todos os digitos são iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false; // CPF inválido se não tiver 11 dígitos ou todos os dígitos forem iguais
    }
   
    let soma = 0;
    let resto;
 
    // Validando o primeiro digito verificador
    for(let i=1;i <= 9;i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i); // Calcula a soma ponderada
    }
 
    resto = (soma * 10) % 11;  // Calcula o resto da divisão por 11
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
    if(resto !== parseInt(cpf.substring(9, 10))){
        return false; // Se o resto não corresponder ao dígito verificador, o CPF é inválido
    }
 
    soma = 0;
    // Validando o segundo digito verificador
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i) * (12 - i));
    }
 
    resto = (soma * 10) % 11;
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
   
    if(resto !== parseInt(cpf.substring(10, 11))){
        return false;
    }

     // Se passou por todas as validações, o CPF é válido
    return true;
}