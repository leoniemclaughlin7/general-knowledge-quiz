let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let nextQ = document.getElementById('next-question');

let questionCounter = 0;
let score = 0;

/**
 * Displays question to the user, code help from youtube tutorial. 
 */
function showQuestion(quizQ, qCount) {
    question.textContent = quizQ[qCount].question;
    answers.forEach(function (element, index) {
        element.textContent = quizQ[qCount].answers[index];
    });
    resetAnswers();
}

nextQ.addEventListener('click', nextQuestion);
/**
 * Loads next question
 */
function nextQuestion() {
    questionCounter++;
    if (questionCounter < quizQuestion.length) {
        showQuestion(quizQuestion, questionCounter);
        showScore();
    }
}

/**
 * Shows score to the user
 */
function showScore() {
    scores.innerHTML = score;
}

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", getAnswer);
}
/**
 * Displayes correct or incorrect answer to user 
 */
function getAnswer() {
    disableAnswers();
    let choosenAnswer = this.innerText;
    if (quizQuestion[questionCounter].correctAnswer === choosenAnswer) {
        score++;
        this.classList.add('correct');
    } else {
        this.classList.add('incorrect');
        for (i = 0; i < answers.length; i++) {
            if (answers[i].innerText === quizQuestion[questionCounter].correctAnswer) {
                answers[i].classList.add('correct');
            }
        }
    }

}

/**
 * Resets answers back to default, hides next question button. 
 */
function resetAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('correct');
        answers[i].classList.remove('incorrect');
        answers[i].removeAttribute('disabled', 'disabled');
        nextQ.classList.add('hidden');
    }
}

/**
 * Disables answers after an answer has been picked
 * and shows next question button
 */
function disableAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].setAttribute('disabled', 'disabled');
    }
    nextQ.classList.remove('hidden');
}





showQuestion(quizQuestion, questionCounter);











