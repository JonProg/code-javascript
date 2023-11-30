
const _velocidade = Symbol();

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(value){
        if(typeof valor != 'number') return;
        if(value >=100 || value <=0) return;
        this[_velocidade] =value;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');
carro1.acelerar()
console.log(carro1.velocidade)