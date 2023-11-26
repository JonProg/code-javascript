function createPokemon(name, type, level){
    return { name, type, level};
}

const charizard = createPokemon('Charizard','Fire',40)

/* 

Objeto no javascript tem muita semelhança com uma
classe onde temos atributos e metodos 
só que o objeto é um pouco mais simples mais ao mesmo tempo bem útil

*/

const trainer = {
    name:'Ash',
    age:550,

    play_pokeball(pokemon){
        console.log(`${this.name} jogou o pokemon ${pokemon.name}`)
    }
}

trainer.play_pokeball(charizard)
console.log(`${charizard.name} | ${charizard} | ${charizard.level}`)

// Atribuição via desestruturação
const {name:nameTrainer} = trainer;
console.log(nameTrainer);

// '...' pega o resto do objeto

const pessoa1 = new Object();
pessoa1.nome = 'Jonas'
pessoa1.sobrenome = 'Henrique'
pessoa1.falarNome = function(){
    return (`${this.nome} ${this.sobrenome}`)
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

// Object.freeze(ARRAY/OBJETC); para travar o array/objeto para que ele não seja modificado
