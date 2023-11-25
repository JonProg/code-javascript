
const numbers = [5,50,36,38,98,75,71,61,24,23,64,55];
const numbersMap = numbers.map(value => value*2);
console.log(numbersMap)

const cars = [
    {name:'Porsche 911 GT2 RS', speed:340},
    {name:'Lamborghini Aventador SVJ ',speed:349},
    {name:'Aston Martin Valkyrie',speed:362},
    {name:'Hennessey Venom F5',speed:484},
    {name:'Koenigsegg Jesko Absolut',speed:500},
    {name:'Bugatti Veyron Super Sport',speed:431},
];

const names = cars.map(obj => obj.name)
const speeds = cars.map(obj => ({speed:obj.speed}))
const carsId = cars.map(function(obj,indice){
    const newObj = {...obj}; // colocando "obj" direto você modifica o objeto original
    newObj.id = indice;
    return newObj
})

console.log(names)
console.log(speeds)
console.log(carsId)