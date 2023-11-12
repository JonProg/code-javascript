
const nome_user = prompt('Digite seu nome completo:').toLowerCase();

document.body.innerHTML += `Seu Nome é: ${nome_user.split(' ')[0]} <br/>`;
document.body.innerHTML += `Seu Nome tem ${nome_user.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome_user[1]} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra "o" so seu nome?: ${nome_user.indexOf('o')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra "o" so seu nome?: ${nome_user.lastIndexOf('o')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome_user.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: [${nome_user.split(' ')}] <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome_user.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras menúsculas: ${nome_user.toLowerCase()} <br/>`;

