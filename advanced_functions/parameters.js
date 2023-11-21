
function somar(){
    let total = 0;
    for (const argument of arguments) { // Arguments para pegar varios valores
        total += argument
    }
    console.log(total)
}

somar(1,2,3,4,5,6);


function tester(a=3,b=5){ //Colocando valores padrão
    console.log(a+b)
}

tester();

function tester2({nome, sobrenome, idade}){ //Função que faz desestruturação
    console.log(nome, sobrenome, idade)
}

tester2({nome:'jonas',sobrenome:'henrique',idade:'18'});

//function test([nome,sobrenome,idade]){   funciona com array támbem
//  console.log(nome,sobrenome,idade)
//}


function conta(operador, acumulador, ...numeros){   // ... para pegar o rseto dos argumentos passados         
    for(let numero of numeros){                     // mais simples que o arguments
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }

    console.log(acumulador);
}

conta('+',0,23,34,56,7);
