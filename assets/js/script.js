function formatType (type) {
    if(type < 10) {
        return `0${type}`
    } else {
        return type
    }
}

function showTime (seconds, minutes, hour, day) {
    document.getElementById('seconds').innerText = formatType(seconds);
    document.getElementById('minutes').innerText = formatType(minutes);
    document.getElementById('hour').innerText = formatType(hour);
    document.getElementById('day').innerText = formatType(day);
}

function convertTime (time) {
    const seconds = time % 60;
    const minutes = Math.floor((time % (60 * 60) / 60));
    const hour = Math.floor((time % (60 * 60 * 24) / (60 * 60)));
    const day = Math.floor(time / (60 * 60 * 24));

    showTime(seconds, minutes, hour, day)
}

function countdown(eventTime) {
    function initEvent () {
        if(eventTime === 0) {
            clearInterval(id)
        }
        convertTime(eventTime--)
    }
    let id = setInterval(() => {
        initEvent()
    }, 1000)
}

function calculationCountdown () {
    const dateEvent = new Date('2023-01-20 00:00:00'); 
    const dateCurrent = new Date();
    return Math.floor((dateEvent - dateCurrent) / 1000); 
}

countdown(calculationCountdown())











