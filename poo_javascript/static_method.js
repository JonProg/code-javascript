
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    static detonation(){ //Um método de classe
        console.log('Iniciando autodestriução...1...2...3...BOOOM')
    }
}

const tv1 = new ControleRemoto('LG')
ControleRemoto.detonation();