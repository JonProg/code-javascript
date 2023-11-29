
const pessoas = [
    {id:3,nome:'Ana'},
    {id:2,nome:'Carlos'},
    {id:1,nome:'Adrey'},
]

const novasPesssoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPesssoas.set(id,{...pessoa});
}

//novasPesssoas.delete(key) para deletar
//novasPesssoas.get(key) para pegar o valor da key
//novasPesssoas.set(key) para setar um novo item dentro do map

console.log(novasPesssoas)
