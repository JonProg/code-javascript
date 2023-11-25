function* geradora1(){
    yield 1
    yield 2
    yield 3
}

function* geradora2(){
    yield* geradora1()
    yield 4
    yield 5
    yield 6
}

const g4 = geradora2();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    };

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


