
class Personagem{
    constructor(nome,ataque,defesa,poder,arma){
        this.nome = nome;
        this.ataque = ataque
        this.defesa = defesa;
        this.poder = poder;
        this.arma = arma;
    }

    atacar(){
        return `${this.nome} atacou o inimigo e inflegiu um dano de ${this.ataque}`
    }

    defender(){
        return `${this.nome} está defedendo o ataque com uma defesa de ${this.defesa}`
    }

    soltarPoder(){
        return `${this.nome} está soltando o poder ${this.poder}`
    }
}

class Samurai extends Personagem{
    constructor(nome){
        super(nome,120,20,'Corte Universal','Katana')
    }

    sepuko(){
        return `${this.nome} está fazendo sepuko...`
    }
}

const samurai1 = new Samurai('Jin-Woo');
console.log(samurai1.atacar());
console.log(samurai1.soltarPoder());
console.log(samurai1.sepuko());