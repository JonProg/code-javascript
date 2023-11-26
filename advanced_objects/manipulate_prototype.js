
const objA = {
    chaveA:'A'
    // __proto__:Object.prototype
};

const objB = {
    chaveB:'B'
    //__proto__: objA
}

Object.setPrototypeOf(objB,objA);
console.log(objB.chaveA);


function Produto(nome,preco){
    this.nome = nome;
    this.preco= preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100));
};

const p1 = new Produto('Camiseta',50);
p1.desconto(45)

const p2 = {
    nome:'Caneca',
    preco:15
};

Object.setPrototypeOf(p2,Produto.prototype) 
p2.aumento(10)

const p3 = Object.create(Produto.prototype,{
    preco:{
        writable:true,
        enumerable:true,
        value:25
    },
    nome:{
        writable:true,
        enumerable:true,
        value:'Corretivo'
    }
});
p3.aumento(25)

console.log(p2,p1,p3)

/*
tenho que colocar .prototype 
caso eu não esteja utilizando um objeto literal
*/
