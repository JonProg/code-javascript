
function criarCarro(marca,ano,nome,cor){
    let booster = false;
    return {
        nome,
        marca,
        ano,
        cor,

        get info(){
            return `Marca: ${this.marca}  Nome:${this.nome} Ano:${this.ano} Cor:${this.cor}` //Sem o this é mais perfomatico
        },

        set setCor(color){
            this.cor = color;
        },

        get acelerar(){
            let msg = !booster ? `${nome} está acelerando...`:`${nome} nitro ativado acelerando...`

            return msg
        },

        booster(typeBooster){
            booster = true;
            return `${typeBooster} adicionado com sucesso no ${nome}`
        }

    }
}

const car1 = criarCarro('Astom Martim',2020,'Zetsu34','black');

console.log(car1.info)
car1.setCor = 'white'
console.log(car1.info)
console.log(car1.acelerar)
console.log(car1.booster('Nh0'))
console.log(car1.acelerar)
