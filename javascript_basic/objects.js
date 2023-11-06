
function createPokemon(name, type, level){
	return {name, type, level};
};

const charizard = createPokemon('Charizard','Fire',40);

/* 

Objeto no javascript tem muita semelhança com uma
classe onde temos atributos e metodos 
só que o objeto é um pouco mais simples mais ao mesmo tempo bem útil

*/
const trainer = {
	name: 'Ash',
	age: 550,
	
	play_pokeball(pokemon){
		console.log(`${this.name} jogou o pokemon ${pokemon.name}...`);
	};
};


trainer.play_pokeball(charizard);
console.log(`${charizard.name} | ${charizard.type} | ${charizard.level}`);

