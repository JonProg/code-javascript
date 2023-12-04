
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100));
};

function Camiseta(nome,preco,cor,tamanho){
    Produto.call(this,nome,preco) 
    // Serve para linkar ás duas funções permitindo usar objeto.nome ou objeto.preco

    this.cor = cor;
    this.tamanho = tamanho;
}

Camiseta.prototype = Object.create(Produto.prototype); 
// Utilizado para pegar as funções do prototype de Produto

Camiseta.prototype.constructor = Camiseta;
// Utilizado para dizer que o tipo do objeto é camiseta e nãao produto

const camiseta = new Camiseta('gucci',2330,'preta','M');
camiseta.aumento(10);
console.log(camiseta)
console.log(camiseta.nome)