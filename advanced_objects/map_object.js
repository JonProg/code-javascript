
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

console.log(novasPesssoas)
