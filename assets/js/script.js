let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");

let questionCounter = 0;
let score = 0;

function showQuestion(quizQ, qCount) {
    question.textContent = quizQ[qCount].question;
    answers.forEach(function (element, index) {
        element.textContent = quizQ[qCount].answers[index];
    });
}

function nextQuestion() {
    questionCounter++;
    if (questionCounter < quizQuestion.length) {
        showQuestion(quizQuestion, questionCounter);
        showScore();
    }
}

function showScore() {
    scores.innerHTML = score;
}

function getAnswer() {
    answers.forEach(function (element, index) {
        element.addEventListener('click', function () {
            if (quizQ[qCount].correctAnswer === index) {
                element.style.color = 'green';
                score++;
            } else {
                element.style.color = 'red';
            }
        });

    });
}





showQuestion(quizQuestion, 0);









