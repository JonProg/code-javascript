function soma(x,y) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ){
        throw new TypeError('Coloque apenas números');
    }
    return x+y;
}

try{
    console.log(soma(1,2))
    console.log(soma('1',2))
} catch(error){
    console.log(error);
    console.log('Eu falei para você só colocar números');
}finally{
    console.log('Bom dia!!')
}
