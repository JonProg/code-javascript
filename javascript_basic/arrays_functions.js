
const game_class = ['Arqueiro','Guerreiro','Mago', 'Assasino','Samurai'];
const [classGame, ...resto] = game_class; // "..." nesse caso esta servindo para pegar os outros valores

// game_class.push('Vagabundo') -> maneira de adicionar algo na lista
// game_class.unshift('Primeiro') -> adicionar um valor no começo da lista
// game_class.pop() -> retira o último valor da lista
// game_class.shift() -> retira o primeiro valor da lista
// delete game_class[1] -> retira o valor de indice 1 e coloca um <empty item> no lugar
// game_class.slice(0,4) -> fatiar a lista pegando mais de um valor igual a string
// (game_class instanceof Array); -> para saber se a lista é realmente uma lista rsrs

function class_game(id){
	return console.log(`Você agora é um ${game_class[id]} (=`)
}

const func = n => n ** 0.5 // função curta

const obj = {
	func() {
		console.log('Função do objeto')
	}
}

class_game(2);
console.log(resto);
obj.func();


