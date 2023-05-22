//Variables needed in the getquestion function.
let currentQuestionArray = 0;
let choicesEl = document.getElementById("choices-el");

//Timer elements
let timerEl = document.getElementById("timer-el");
let time = 60;
let timerId;

//Fuction to run timer and end quix if the player ran out of time.
function timeLeft() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    return endQuiz;
  }
}
// Starts the game when the onclick of startGame is clicked
function startGame() {
  //Hides the start page
  document.getElementById("homepage").style.display = "none";

  //Shows the questions page
  document.getElementById("questions").style.display = "block";

  //Starts timer and shows the time
  timerId = setInterval(timeLeft, 1000);
  timerEl.textContent = time;
  //Calls the questions function to run through the array of questions.
  getQuestion();
}

//The function that generates and runs through the questions.
function getQuestion() {
  //Gets question from the questions.js and updates the p tag.
  let currentQuestion = questions[currentQuestionArray];
  let questionEl = document.getElementById("question-el");
  questionEl.textContent = currentQuestion.question;

  //Displays the choices from the questions.js in a box.
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    let currentChoices = currentQuestion.choices[i];
    let choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("class", "currentChoices");
    choicesBtn.setAttribute("class", currentChoices);
    choicesBtn.textContent = i + 1 + ". " + currentChoices;

    choicesEl.appendChild(choicesBtn);
  }
}

//Function to see if a correct answer was chosen or not.
function questionAnswer(event) {
  let selectedChoice = event.target;

  //If wrong answer is selected the player is penalized 5 seconds.
  if (selectedChoice.value !== questions[currentQuestionArray].answer) {
    time -= 5;
  }
}
function endQuiz() {
  console.log("You finished!");
}
