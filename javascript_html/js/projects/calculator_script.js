function createCalculator() {

    return {
      display: document.querySelector('.display'),
  
      start() {
        this.clikButtons();
        this.pressBackSpace();
        this.pressEnter();
      },
  
      pressBackSpace() {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            this.display.value = this.display.value.slice(0, -1);
          }
        });
      },
  
      pressEnter() {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        });
      },
  
      realizaConta() {
        let conta = this.display.value;
  
        try{
            conta = eval(conta);

            if(!conta) {
                alert(`Conta inválida`);
                return;
            }

        }catch(e) {
            alert('Conta inválida');
            return;
        }

        this.display.value = String(conta);
      },
  
      clikButtons() {
        document.addEventListener('click', e => {
          const el = e.target;
  
          if(el.classList.contains('btn-num')) {
            this.display.value += el.innerText
          }
  
          if(el.classList.contains('btn-clear')) {
            this.display.value = '';
          }
  
          if(el.classList.contains('btn-del')) {
            this.display.value = this.display.value.slice(0, -1);
          }
  
          if(el.classList.contains('btn-eq')) {
            this.realizaConta();
          }
  
          this.display.focus();
        });
      },
  
    };
  }
  
const calculator = createCalculator();
calculator.start();
  