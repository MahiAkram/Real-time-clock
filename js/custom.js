function stars(){
    let count = 500;
    let scene = document.querySelector('.bg');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        star.style.animationDuration = 3 + duration + 's';
        star.style.animationDelay = duration + 's';

        scene.appendChild(star);
        i++
        
    }
}

stars();

function clock(){
    var rtc = new Date();

    var hours = rtc.getHours();
    var minutes = rtc.getMinutes();
    var seconds = rtc.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = ( hours > 12 ) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
        var t = setTimeout(rtc,500);
    
    }

clock();