// flyer photoshop

const clock = document.querySelector('.clock');
const play =  document.querySelector('.play');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
let num = 0;


function seeHour(num){
    let newClock = new Date()
    newClock.setHours(0,0,num)
    return newClock.toLocaleTimeString('pt-BR', {hour12:false})
}

play.addEventListener('click', function(event){
    play.disabled = true;

    const timer = setInterval(function(){
        num++
        clock.innerHTML = seeHour(num);
    }, 1000);

    setInterval(pause.addEventListener('click', function(event){
        clearInterval(timer);
        play.disabled = false;
    })
    )
    setTimeout(stop.addEventListener('click', function(event){
            num = 0;
            clock.innerHTML = seeHour(num);
            clearInterval(timer);
            play.disabled = false;
        })
    )
});

