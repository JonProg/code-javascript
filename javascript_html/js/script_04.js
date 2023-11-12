
const form = document.querySelector('.form');

function receiveEvent(event){
    event.preventDefault();
    const height = parseFloat(form.querySelector('#height').value);
    const weight = parseFloat(form.querySelector('#weight').value);
    const imc = weight / height ** 2;

    if(!height || !weight || height>=999 || weight>=9999){
        msg = 'Altura ou Peso inválidos';
        color_msg = "msg-obesity";
        return setResult(msg, color_msg);
    }else{
        return getTypeImc(imc);
    }
};

function getTypeImc(imc) {
    const typeImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return setResult(msgImc(imc, typeImc[5]), 'msg-obesity');
    if (imc >= 34.9) return setResult(msgImc(imc, typeImc[4]), 'msg-obesity');
    if (imc >= 29.9) return setResult(msgImc(imc, typeImc[3]), 'msg-obesity');
    if (imc >= 24.9) return setResult(msgImc(imc, typeImc[2]), 'msg-overweight');
    if (imc >= 18.5) return setResult(msgImc(imc, typeImc[1]), 'msg-normal');
    if (imc < 18.5) return setResult(msgImc(imc, typeImc[0]), 'msg-underweight');
  }

function setResult(msg,color_msg){
    const result = document.querySelector('.result');
    const p = document.createElement('p');

    result.innerHTML = '';
    p.classList.add(color_msg);
    p.innerHTML = msg;
    result.appendChild(p);
}

function msgImc(imc, typeImc){
    return `Seu IMC é ${imc.toFixed(2)} (${typeImc})`;
}

form.addEventListener('submit', receiveEvent);

