const date = new Date('2005-07-25 18:35:25');// Quando a data é do tipo string
console.log(date.toString());
console.log(Date.now());

const date2 = new Date(1699703833983); // forma utilizada nas bases de dados
console.log(date2.toString());

function zeroAEsquerda (num){
    return num >=10 ? num:`0${num}`;
}

function formatDate(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `Data |${dia}/${mes}/${ano}| -- Hora |${hora}:${min}|`
}

const date3 = new Date();
const formatNow = formatDate(date3);
console.log(formatNow);
