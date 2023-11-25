const numbers = [12,13,45,34,67,89,12,4,6,7,3,9,2,23,45,64];
const numbersFilter = numbers.filter(valor => valor>10);

console.log(numbersFilter);

const cars = [
    {name:'Porsche 911 GT2 RS', speed:340},
    {name:'Lamborghini Aventador SVJ ',speed:349},
    {name:'Aston Martin Valkyrie',speed:362},
    {name:'Hennessey Venom F5',speed:484},
    {name:'Koenigsegg Jesko Absolut',speed:500},
    {name:'Bugatti Veyron Super Sport',speed:431},
];

const carsFilter = cars.filter(obj => obj.speed > 400);
console.log(carsFilter);

const carsFilter2 = cars.filter(obj => obj.name.toLocaleLowerCase().startsWith('a'));
console.log(carsFilter2);