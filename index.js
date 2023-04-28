var startTime;
var elapsedTime = 0;
var timerInterval;
var timer;

function startTimer() {
startTime = Date.now() - elapsedTime;
console.log(startTime);
timerInterval = setInterval(updateTimer, 10); // update every 10 milliseconds
}

function stopTimer() {
clearInterval(timerInterval);
}

function resetTimer() {
clearInterval(timerInterval);
updateTimer(0);
}

function updateTimer(reset) {
var currentTime = Date.now();
elapsedTime = currentTime - startTime;

if(reset==0)
{
  elapsedTime=0;
}
var minutes = Math.floor(elapsedTime / 60000);
var seconds = Math.floor((elapsedTime % 60000) / 1000);
var milliseconds = elapsedTime % 1000;
document.getElementById("stop-watch-time").innerHTML =
("0" + minutes).slice(-2) +
  ":" +
  ("0" + seconds).slice(-2) +
  ":" +
  ("00" + milliseconds).slice(-3);
}



const elee=document.getElementById('timer-time');

let value = elee.value;

elee.addEventListener('change',(e)=>{
    value = e.target.value;
    
})

function start(){
    let  timeArr = value.split(':');
    console.log(timeArr);
    var min =timeArr[0];
    var sec=timeArr[1];
    timer = setInterval(()=>{
        console.log('00:'+sec);
        elee.value=min+':'+sec;

    if(sec==0 && min==0)
    {
        pause();
        alert("times up");
    }
    else if(sec==0)
    {
        sec=60;
        min--;
    }
    

  sec--;

},1000)//eqach 1 second
}


function pause(){
clearInterval(timer);
}