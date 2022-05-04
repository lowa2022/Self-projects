let [milliseconds,seconds,minutes,hours] = [0,0,0,0]; //vars to hold time values
let timerRef = document.querySelector('.timerDisplay');
let int = null;

//to display updated time values to user
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){  //if millisecond reaches 1000, it starts again from 0 and increments
        milliseconds = 0;
        seconds++;
        if(seconds == 60){    //if second reaches 60, it starts again from 0 and increments
            seconds = 0;
            minutes++;
            if(minutes == 60){  //if millisecond reaches 60, it starts again from 0 and increments
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours; 
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
