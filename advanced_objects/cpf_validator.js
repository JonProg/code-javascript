
function ValidatorCPF(cpf){
    this.cpf = cpf;
    this.cpfClean = cpf.replace(/\D+/g,'');
}

ValidatorCPF.prototype.validated = function(){
    if (typeof(this.cpfClean) === 'undefined' || this.cpfClean.length < 11) return false;

    let cpfArray = Array.from(this.cpfClean.slice(0, 9));
    let firstDigit = this.reduceDigit(cpfArray);
    let scondDigit = this.reduceDigit(cpfArray);

    if (Number(this.cpfClean.slice(9, 11)) === (firstDigit*10+scondDigit)){
        return true
    }else{
        return false
    }
}

ValidatorCPF.prototype.reduceDigit = function(array){
    let multiplier = array.length;
    let digit = 11 - (array.reduce(function (ac,val){
        let digit = (Number(val)*(multiplier+1))
        multiplier--
        return ac + digit
    },0)% 11);

    array.push(digit >9 ? 0:digit);
    return digit;
}

const cpf = new ValidatorCPF('705.484.450-52');
console.log(cpf.validated());