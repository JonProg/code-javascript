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

