// flyer photoshop
function timerStudy(){
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function seeHour(time){
        const newClock = new Date(time * 1000)
        return newClock.toLocaleTimeString('pt-BR', {hour12:false, timeZone:'UTC'});
    }

    function runClock(){
        timer = setInterval(function(){
            seconds++;
            clock.innerHTML = seeHour(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const element = e.target;

        if (element.classList.contains('stop')){
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('paused');
            seconds = 0;
        }

        if (element.classList.contains('pause')){
            clearInterval(timer);
            clock.classList.add('paused');
        }

        if (element.classList.contains('play')){
            clock.classList.remove('paused');
            clearInterval(timer);
            runClock();
        }
    });
}

timerStudy();

