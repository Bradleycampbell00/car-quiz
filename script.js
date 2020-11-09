
// when start is clicked a timer is going to run
function Timer() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }
  
// when start is clicked it will replace the h1 with a question and the start button with 4 prompts

// each time a question is anwsered it will move onto the next question and if anwsered wrong itll take 10 seconds away

// when timer is up or all questions are anwsered youll be prompted to type in your initails and be added to the high score board


