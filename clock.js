'use strict';

let seconds = 0;
let minutes = 0;
let hours = 0;

const hourSpan = document.querySelector('.hours');
const minuteSpan = document.querySelector('.minutes');
const secondSpan = document.querySelector('.seconds');

const startButton = document.querySelector('.button-start');
const stopButton = document.querySelector('.button-stop');
const resetButton = document.querySelector('.button-reset');

let interval;

function startClock() {
    interval = setInterval(function() {
        seconds ++;

        if(seconds < 10) {
            secondSpan.innerHTML = '0' + seconds;
        }

        if(seconds >= 10 && seconds < 60) {
            secondSpan.innerHTML = seconds;
        }

        if(seconds >= 60) {
            seconds = 0;
            minutes ++;
            secondSpan.innerHTML = '0' + seconds;
        }

        if(minutes < 10) {
            minuteSpan.innerHTML = '0' + minutes;
        }


        if(minutes >= 10 && minutes < 60) {
            minuteSpan.innerHTML = minutes;
        }

        if(minutes >= 60) {
            minutes = 0;
            hours ++;
            minuteSpan.innerHTML = '0' + minutes;
        }

        if(hours < 10) {
            hourSpan.innerHTML = '0' + hours;
        }

        if(hours >= 10) {
            hourSpan.innerHTML = hours;
        }

    }, 1000);
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondSpan.innerHTML = '00';
    minuteSpan.innerHTML = '00';
    hourSpan.innerHTML = '00';
}

startButton.addEventListener('click', startClock);

stopButton.addEventListener('click', stopClock);

resetButton.addEventListener('click', resetClock);


