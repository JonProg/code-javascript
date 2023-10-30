const num = Number(prompt('Digite um número:'));
const text = document.getElementById('text');
const title = document.getElementById('title');

title.innerHTML = (`${num}`);

text.innerHTML = `Raiz quadrada: ${num ** 0.5}`;
text.innerHTML += `${num} é inteiro ?${Number.isInteger(num)}`;
text.innerHTML +=`É NaN: ${Number.isNaN(num)}`;
text.innerHTML +=`Arredondando para baixo: ${Math.ceil(num)}`;
text.innerHTML +=`Arredondando para cima: ${Math.floor(num)}`;
text.innerHTML +=`Com duas casas decimais: ${num.toFixed(2)}`;