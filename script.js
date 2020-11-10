// when start is clicked a timer is going to run

const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionContainer = document.querySelector("#question-container");
const questionText = document.querySelector("#question-text");
const answersDiv = document.querySelector("#answers");

// Questions

const questions = [
  {
    text: "Who Won the 1966 24 Hour of Lemans?",
    answers: ["Ferrai", "Ford", "Fiat"],
    correctIndex: 1,
  },
  {
    text: "What was the First American Muscle Car?",
    answers: ["Pontiac GTO", "Oldsmobile Rocket 88", "Ford Mustang"],
    correctIndex: 1,
  },
  {
    text: "What was the First mass Produced Car?",
    answers: ["Model T", "Benz Patent-Motorwagen", "Rolls Royce 10-HP"],
    correctIndex: 0,
  },
  {
    text: "What is the best Selling Car/Truck of all Time?",
    answers: ["Chevy Cruise", "Ford F-150", "Toyota Corrola"],
    correctIndex: 2,
  },
  {
    text: "question?",
    answers: ["answer 1", "answer 2", "answer 2"],
    correctIndex: 0,
  },
  {
    text: "question?",
    answers: ["answer 1", "answer 2", "answer 2"],
    correctIndex: 0,
  },
  {
    text: "question?",
    answers: ["answer 1", "answer 2", "answer 2"],
    correctIndex: 0,
  },
  {
    text: "question?",
    answers: ["answer 1", "answer 2", "answer 2"],
    correctIndex: 0,
  },
  {
    text: "question?",
    answers: ["answer 1", "answer 2", "answer 2"],
    correctIndex: 0,
  },
  {
    text: "What does ABS Stand for?",
    answers: ["Air Bag System", "ALternate Blinking System", "Anti-lock Braking System"],
    correctIndex: 2,
  },
];
let questionIndex = 0;
startBtn.addEventListener("click", handleStartClick);
answersDiv.addEventListener("click", handleAnswerClick);
function handleStartClick() {
  startPrompt.style.display = "none";
  startBtn.style.display = "none";
  questionContainer.style.display = "block";
  renderQuestion();
  Timer();
//   Done();
}
function handleAnswerClick(e) {
  e.preventDefault();
  if (!e.target.matches("button")) return;
  const question = questions[questionIndex];
  const correctAnswer = question.answers[question.correctIndex];
  const userAnswer = e.target.textContent;
  if (userAnswer === correctAnswer) {

  } else {
    timeLeft -=10
  }
  questionIndex++;
  renderQuestion();


  if (questionIndex == questions.length) {
    gameOver();
  } else {
    renderQuestion();
  }
}
function renderQuestion() {
  const currentQuestion = questions[questionIndex];
  questionText.textContent = currentQuestion.text;
  answersDiv.innerHTML = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn purple-background");
    btn.textContent = answer;
    answersDiv.appendChild(btn);
  }
}
 var timerEl = document.querySelector(".time")
 let timeLeft = 75;


    // function Done () {
    //     if (questionIndex > questionIndex.length) {
    //         clearInterval(timeInterval)
    //         window.open("highscore.html")
    //     }
    // }


    // Timer
function Timer() {
  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0){
      clearInterval(timeInterval);
      window.open("highscore.html")
    }
    console.log(timeLeft)
  }, 1000);
}

// when start is clicked it will replace the h1 with a question and the start button with 4 prompts

// each time a question is anwsered it will move onto the next question and if anwsered wrong itll take 10 seconds away

// when timer is up or all questions are anwsered youll be prompted to type in your initails and be added to the high score board
