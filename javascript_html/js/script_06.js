const container = document.querySelector('.container');
const elements = [
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'footer', texto:'Frase 3'},
    {tag:'section', texto:'Frase 4'},
];

const div = document.createElement('div');
container.appendChild(div);
for (let index = 0; index < elements.length; index++) {
    const {tag, texto} = elements[index];
    const element = document.createElement(tag);
    element.innerText = texto;
    div.appendChild(element);
}
