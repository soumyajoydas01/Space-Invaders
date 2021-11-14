var timeleft = 10;
var Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
    document.getElementById("countdown").innerHTML = "Let's Go!!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);