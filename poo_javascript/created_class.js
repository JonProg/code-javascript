
class Pessoa{
    constructor(nome,sobrenome){ // Igual ao __init__ do python
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){ // Esse metodo é automaticamente colocado no prototype
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('jonas','henrique');
console.log(p1);