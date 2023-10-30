const home = 'earth';
let planet = 'mars alians';
let number = Number('7');


console.log('Hello',planet); //comentário
/*
    *Comentário com duas
    *linhas
    */
   
console.log(`Welcome ${home}`); // template string


// Manipulação de string //

console.log(planet.indexOf('aliens')); // mostra aonde começa a palavra 'aliens' 

console.log(planet.replace('aliens','humam')); // trocando aliens por humam

console.log(planet.length) // tamanho da string 

console.log(planet.slice(5, 10))

console.log(planet.slice(-5)) // <- planet.length - 5

console.log(planet.split(' ')) // forma um array com as palavras individuais pelo o espaço

console.log(planet.toUpperCase())
console.log(planet.toLowerCase())


// Trabalhando com números //

console.log(typeof(home)); 

let num1 = 5;
let num3 = 10.58945612;
let num2 = 6;

console.log(`${num1.toString() + num2}`) // Faz a representação do num2 em string
console.log(`${num1.toString(2)}`) // Converte num1 para binário
console.log(`${num3.toFixed(2)}`) // arredondando número
console.log(Number.isInteger(num2)) // para saber se o valor é um inteiro
console.log(Number.isNaN(num3 * 'ola')) // para saber se o valor for invalido

// Math.round(num3) -> arredonda para o mais próximo
// (num ** 0.5) -> raiz quadrada de um número
console.log(Math.max(1,2,55,80,63)) // pegar o maior valor em um sequência de valores
console.log(Math.min(1,2,55,80,63)) // pegar o maior valor em um sequência de valores

const aleatorio = Math.round(Math.random() * (10-5)+5) // gera valores de 10 a 5 para a const = aleatorio


