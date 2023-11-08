function myFunction(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function receiveEvent(event){
        event.preventDefault();
        const height = parseFloat(form.querySelector('#height').value);
        const weight = parseFloat(form.querySelector('#weight').value);
        const imc = weight / (height * height);
        let msg = `Seu IMC é ${imc.toFixed(2)}`;
        let color_msg

        if(!height || !weight || height>=999 || weight>=9999){
            msg = 'Altura ou Peso inválidos';
            color_msg = "msg-obesity";
        }else{
            color_msg = "msg-obesity";

            if(imc<18.5){
                msg += ' (Abaixo do peso)';
                color_msg = "msg-underweight";
    
            }else if (imc>=18.5 && imc<=24.9){
                msg += ' (Peso normal)';
                color_msg = "msg-normal";
                
            }else if (imc>=25 && imc<=29.9){
                msg +=' (Sobrepeso)';
                color_msg = "msg-overweight";
    
            }else if (imc>=30 && imc<=34.9){
                msg += ' (Obesidade grau 1)';
    
            }else if (imc>=35 && imc<=39.9){
                msg += ' (Obesidade grau 2)';
    
            }else{
                msg += ' (Obesidade grau 3)';
            }
        }

        result.innerHTML = `<p class="${color_msg}">${msg}</p>`;
    };

    form.addEventListener('submit', receiveEvent);
};

myFunction();