const dataAtual = new Date();
const date = document.querySelector('.date');
const p = document.createElement('p');

p.innerHTML = dataAtual.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'short'})
date.appendChild(p)

// Forma de fazer uma data em portugues 
