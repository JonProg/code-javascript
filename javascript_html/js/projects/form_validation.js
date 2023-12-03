class ValidedForm{
    constructor(){
        this.form = document.querySelector('#form');
        this.event = this.events();
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const fieldsValid = this.isValid();
    }

    isValid(){
        let valid = true;
        for(let element of this.form.querySelectorAll('.error')){
            element.classList.remove('error');
            element.querySelector('small').innerText = ''
        }

        for(let field of this.form.querySelectorAll('.valided')){
            const label = field.previousElementSibling.innerText;
            if (!field.value){
                this.msgError(field,`"${label}" não pôde estar em branco`)
                valid = false;
            }
            if(field.id === 'cpf'){
                if(!this.validedCpf(field)) valid = false;
            }
        }
    }

    validedCpf(field){
        const cpf = new ValidatorCPF(field.value);
        if(!cpf.validated()){
            this.msgError(field,'"CPF" inválido');
            return false
        }

        return true
    }

    msgError(element,msg){
        const tagMsg = element.parentElement.querySelector('small');
        element.parentElement.classList.add('error');
        tagMsg.innerHTML += `${msg}<br/>`;
    }


}


const valided = new ValidedForm();

