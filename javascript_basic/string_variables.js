const home = 'earth';
let planet = 'mars alians';
let number = Number('7');


console.log('Hello',planet); //comentário
/*
    *Comentário com duas
    *linhas
    */
   
console.log(`Welcome ${home}`); // template string

console.log(planet.indexOf('aliens')); // mostra aonde começa a palavra 'aliens' 

console.log(planet.replace('aliens','humam')); // trocando aliens por humam

console.log(planet.length) // tamanho da string 

console.log(planet.slice(5, 10))

console.log(planet.slice(-5)) // <- planet.length - 5

console.log(planet.split(' ')) // forma um array com as palavras individuais pelo o espaço

console.log(planet.toUpperCase())
console.log(planet.toLowerCase())

console.log(typeof(home)); 

