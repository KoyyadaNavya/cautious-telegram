
const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "Hot Mail", "How to Make Links"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What is CSS used for?",
    choices: ["Calculations", "Styling", "Logic"],
    answer: "Styling"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.answer) score++;
      nextQuestion();
    };
    choicesContainer.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h3>Your Score: ${score}/${questions.length}</h3>
    `;
  }
}

showQuestion();
