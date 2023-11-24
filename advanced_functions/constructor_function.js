function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () =>{
        this.clikButtons();
        this.pressBackSpace();
        this.pressEnter();
    };

    this.pressBackSpace = () => {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            this.del();
          }
        });
    };

    this.pressEnter = () =>{
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    },

    this.clikButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();

            this.display.focus();
        });
    };

    this.realizaConta = () =>{
        try{
            conta = eval(this.display.value);

            if(!conta) {
                alert(`Conta inválida`);
                return;
            }

            this.display.value = conta;
        }catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculator = new Calculator();
calculator.start();

// Na constructor function quando utilizamos o comando new ele permite utilizar "this"
// não sendo nessesario criar um objeto igual na factory function