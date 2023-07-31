document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
  
    let countdown;
    let secondsRemaining = 3600;
  
    function updateTimer() {
      const hours = Math.floor(secondsRemaining / 3600);
      const minutes = Math.floor((secondsRemaining % 3600) / 60);
      const seconds = secondsRemaining % 60;
  
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      timerDisplay.textContent = formattedTime;
    }
  
    function startTimer() {
      countdown = setInterval(function () {
        if (secondsRemaining > 0) {
          secondsRemaining--;
          updateTimer();
        } else {
          clearInterval(countdown);
          alert("Time's up!");
          // You can add additional actions to be performed when the timer reaches 00:00:00 here.
        }
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(countdown);
      secondsRemaining = 3600;
      updateTimer();
    }
  
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
  });  