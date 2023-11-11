function getDayText(dayWeek){
    let dayWeekText;

    switch(dayWeek) {
    case 0:
        dayWeekText = 'Domingo';
        return dayWeekText
    case 1: 
        dayWeekText = 'Segunda-feira';
        return dayWeekText  
    case 2:
        dayWeekText = 'Terça-feira';
        return dayWeekText
    case 3:
        dayWeekText = 'Quarta-feira';
        return dayWeekText  
    case 4:
        dayWeekText = 'Quinta-feira';
        return dayWeekText
    case 5:
        dayWeekText = 'Sexta-feira';
        return dayWeekText
    case 6:
        dayWeekText = 'Sábado';
        return dayWeekText
    default:
        dayWeekText = 'Dia inválido';
    }

}

const data  = new Date('2005-07-25 18:30');
let dayweek = data.getDay();
const dayWeekText = getDayText(dayweek);

console.log(dayWeekText);

// O switch/case é util quando temos que fazer vaias condicionais más ao mesmo tempo
// acho que existem maneiras mais interessantes de fazer o mesmo