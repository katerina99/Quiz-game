const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ],
  },
  {
    question: "Which is the largest animal on land?",
    answers: [
      {text: "Elephant", correct: true},
      {text: "Blue Whale", correct: false},
      {text: "Giraffe", correct: false},
      {text: "Hippopotamus", correct: false},
    ],
  },
  {
    question: "Which is the tallest animal in the world?",
    answers: [
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: true},
      {text: "Blue Whale", correct: false},
      {text: "Lion", correct: false},
    ],
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Clear previous answer buttons
  answerButton.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct, button));
    answerButton.appendChild(button);
  });
}

function selectAnswer(correct, button) {
  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  // Disable all buttons after an answer is selected
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.disabled = true;
  });

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    // Quiz ended, show score or perform other actions
    alert("Quiz ended! Your score: " + score);
    // You can add more code here to display the final score or perform other actions
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    // Quiz ended, show score or perform other actions
    alert("Quiz ended! Your score: " + score);
    // You can add more code here to display the final score or perform other actions
  }
});

startQuiz();
