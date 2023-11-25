const animes = ['Dragon Ball','Naruto','One Piece', 'Digemon','Pokemon'];

// animes.splice(indice, delete, elemento,elemento);

//pop
//animes.splice(-1,1);

//shift
//animes.splice(0,1);

//push
//animes.splice(animes.length,0,'Fairy Tail')

//unshift
//animes.splice(0,0,'Kimetsu no yaiba')

const concatena = [...animes,...['Beyblade','Jujutsu kaizen']];
console.log(concatena);