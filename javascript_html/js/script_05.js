function myFunction(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function receiveEvent(event){
        event.preventDefault();
        const height = parseFloat(form.querySelector('#height').value);
        const weight = parseFloat(form.querySelector('#weight').value);
        const imc = weight / (height * height);
        let msg = `Seu IMC é ${imc.toFixed(2)} ${height}`;

        if(!height || !weight || height>=9999 || weight>=999){
            msg = 'Altura ou Peso inválidos';
        }else{
            if(imc<18.5){
                msg += ' (Abaixo do peso)';
    
            }else if (imc>=18.5 && imc<=24.9){
                msg += ' (Peso normal)';
                
            }else if (imc>=25 && imc<=29.9){
                msg +=' (Sobrepeso)';
    
            }else if (imc>=30 && imc<=34.9){
                msg += ' (Obesidade grau 1)';
    
            }else if (imc>=35 && imc<=39.9){
                msg += ' (Obesidade grau 2)';
    
            }else{
                msg += ' (Obesidade grau 3)';
            }
        }

        result.innerHTML = `<p>${msg}</p>`;
    };

    form.addEventListener('submit', receiveEvent);
};

myFunction();