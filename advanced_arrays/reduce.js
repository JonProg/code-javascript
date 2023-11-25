
const pessoas = [
    {nome:'Jonas',idade: 18},
    {nome:'Samuel',idade: 23},
    {nome:'Daniela',idade: 45},
    {nome:'Marcia',idade: 55},
    {nome:'Bruno',idade: 60},
]

const maisVelho = pessoas.reduce(function(acumulador,valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelho)

/* 
    O acumulador é o primeiro do array/objeto caso não seja difinido na função reduce
object.reduce(func,acumulator) e o valor caso não seja colocado um valor
padrão no acumulador ele vai ser o segundo valor do array/objeto 

*/