function myFunction(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const pessoas = [];

    function receiveEvent(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        const pessoa = {
            nome:nome.value, 
            sobrenome:sobrenome.value, 
            altura:altura.value,
            peso:peso.value
        };

        pessoas.push(pessoa)

        result.innerHTML += `<p>Nome :${pessoa.nome} 
        Sobrenome:${pessoa.sobrenome} <br> Altura:${pessoa.altura} <br> Peso:${pessoa.peso}</p>`;
        
    };

    form.addEventListener('submit', receiveEvent);
};

myFunction();