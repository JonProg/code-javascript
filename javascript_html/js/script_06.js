const month = [
    "Janeiro", "Fevereiro", "Março",
    "Abril","Maio", "Junho",
    "Julho","Agosto","Setembro",
    "Outubro","Novembro","Dezembro"
];
const day = [
    "Domingo","Segunda-feira","Terça-feira",
    "Quarta-feira", "Quinta-feira","Sexta-feira","Sábado"
]

function zeroText(hour){
    return hour>=10 ? `${hour}`:`0${hour}`
}

function formatDate(dataNow){
    const dayText = day[dataNow.getDay()];
    const monthText = month[dataNow.getMonth()];
    const year = dataNow.getFullYear();
    const hourText = `${zeroText(dataNow.getHours())}:${zeroText(dataNow.getMinutes())}`;

    return `${dayText}, ${dataNow.getDate()} de ${monthText} de ${year} ${hourText}`
}

const dataAtual = new Date();
const dataFormat = formatDate(dataAtual);
const date = document.querySelector('.date');
const p = document.createElement('p');

p.innerHTML = dataFormat;
date.appendChild(p);
