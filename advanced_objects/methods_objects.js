
// copy
const produto = {nome:'Caneca', preco:1.8};
const outraCoisa = {...produto, teste:'test'};

console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log(Object.keys(produto));
console.log(outraCoisa);

