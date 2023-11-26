/*
Prototype é uma característica fundamental e poderosa do JavaScript.
Ele permite que você adicione propriedades e métodos a objetos já existentes
em tempo de execução, o que significa que você pode estender as capacidades de um
objeto mesmo depois de criá-lo.

Em JavaScript, cada objeto tem um link interno para outro objeto chamado prototype.
Quando você tenta acessar uma propriedade ou método de um objeto, o JavaScript primeiro
verifica se esse objeto possui a propriedade ou o método. Se não encontrar, ele verifica
no objeto prototype associado a ele. Se ainda assim não encontrar, ele verifica
no prototype do objeto prototype, e assim por diante, até chegar no objeto prototype
final da cadeia.
*/


function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome +' '+this.sobrenome;
};

const pessoa1 = new Pessoa('Samuel','Medeiros');
const pessoa2 = new Pessoa('Jonas','Henrique');

// pessoa1 --> Pessoa.prototype --> Object.prototype
// Ordem de onde o JS visualiza os metodos/atributos