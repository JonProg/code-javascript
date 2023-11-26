
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:true, // mostra a chave
        configurable:false, // configurável
        get: () => estoquePrivado,
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Type Invalid');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa',45.67, 4);
p1.estoque = 'kk';
console.log(p1.estoque);
