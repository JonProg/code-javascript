
function Produto(nome, preco, estoque){
    Object.defineProperty(this,'estoque',{
        enumerable:true, // mostra a chave
        value:estoque, // valor
        writable:false, // pode alterar
        configurable:false, // configurável
    });

    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:nome,
            configurable:false,
        },
        preco:{
            enumerable:true,
            value:preco,
            configurable:false,
        }
    });
}

const p1 = new Produto('Camisa',45.67, 4);
p1.estoque = 500000;
console.log(p1);
console.log(Object.keys(p1));