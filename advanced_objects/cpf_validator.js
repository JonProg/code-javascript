function reduceDigit(array){
    let multiplier = array.length;
    let digit = 11 - (array.reduce(function (ac,val){
        let digit = (Number(val)*(multiplier+1))
        multiplier -=1
        return ac + digit
    },0)% 11);

    array.push(digit >9 ? 0:digit);
    return digit;
}


function cpfValidator(cpf){
    let cpfClean = cpf.replace(/\D+/g,'');
    let cpfArray = Array.from(cpfClean.slice(0, 9));

    let firstDigit = reduceDigit(cpfArray);
    let scondDigit = reduceDigit(cpfArray);

    if (Number(cpfClean.slice(9, 11)) === (firstDigit*10+scondDigit)){
        console.log(`${cpf} é um cpf válido`)
    }else{
        console.log(`${cpf} é um cpf inválido`)
    }
}

cpfValidator('705.484.450-52');