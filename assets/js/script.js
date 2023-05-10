let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let nextQ = document.getElementById('nextQ');

let questionCounter = 0;
let score = 0;

function showQuestion(quizQ, qCount) {
    question.textContent = quizQ[qCount].question;
    answers.forEach(function (element, index) {
        element.textContent = quizQ[qCount].answers[index];
    });
    getAnswer(quizQuestion, questionCounter);
}

nextQ.addEventListener('click', nextQuestion);
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

function getAnswer(quizQ, qCount) {
    answers.forEach(function (element, index) {
        element.addEventListener('click', function () {
            if (quizQ[qCount].correctAnswer === index) {
                score++;
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
            }
        });

    });

}




showQuestion(quizQuestion, 0);









