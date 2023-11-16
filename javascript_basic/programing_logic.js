/*
Operadores de comparação

> | < | >= | <=

== (valor) X 
=== (valor e tipo)
!= (valor) X
!== (valor e tipo)
-----------------------
Operadores Lógicos

&& -> AND
|| -> OR
! -> NOT

*/

const corUser = null
const languages = ['Java','Javascript','Python','C','C++','C#','Ruby']
const corDefault = corUser || 'preto' // Caso o úsuario como coloque alguma cor ela será colocada como padrão
console.log(corDefault)

for (let index = 0; index < languages.length; index++) {
    const language = languages[index];
    console.log(language)
}

const user = {
    username:'jonas',
    password:'senha',
    email:'email',
}

/*
for in do javascript diferentemente do python ele 
não mostra os valores mais sim os indices caso seja uma lista e caso 
seja um dicionario ele mostra a key
*/

for (const key in user) {
    console.log(key, user[key]);
}

//for of é utilizado quando você precisa do valores de um arry ou string
let num = 10;
while (num<=20) {
    console.log(num);
    num += 10;
}