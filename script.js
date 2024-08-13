let timer=document.getElementById("timer");
let start=document.getElementById("start");
let end=document.getElementById("end");
let reset=document.getElementById("reset");
let elapsedTime=0;
let timerInterval;



function startTimer() {
    let startTime = Date.now() - elapsedTime;

  
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime; 
      timer.textContent=formatTime(elapsedTime);
    }, 10);
    start.disabled=true;
    end.disabled=false;

}
function endTimer(){
      clearInterval(timerInterval);
      start.disabled=false;
      end.disabled=true;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime=0;
    timer.textContent="00:00:00:00";
    start.disabled=false;
    end.disabled=true;

}
function formatTime(){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
start.addEventListener("click",startTimer);
end.addEventListener("click",endTimer);
reset.addEventListener("click",resetTimer);
