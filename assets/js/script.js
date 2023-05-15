let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let nextQ = document.getElementById('next-question');
let timer = document.getElementById('count');
let startBtn = document.getElementById('start-quiz');
let quiz = document.getElementById('quiz-area');
let rules = document.getElementById('rules-area');
let result = document.getElementById('result-area');
let finalScore = document.getElementById('final-score');
let restartBtn = document.getElementById('restart-quiz');

let questionCounter = 0;
let score = 0;
var sec = 15;
let time;

startBtn.addEventListener('click', startQuiz);
/**
 * starts the quiz when the start quiz button is clicked
 * hides the rules section and shows the quiz section. 
 */
function startQuiz() {
    quiz.classList.remove('hidden');
    rules.classList.add('hidden');
    showQuestion(quizQuestion, questionCounter);
    showScore();
    clearInterval(time);
    setTimer();
}


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
        clearInterval(time);
        setTimer();
    } else {
        showResult();
    }
}

/**
 * Shows score to the user.
 */
function showScore() {
    scores.innerHTML = score;
}

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", getAnswer);
}
/**
 * Displayes correct or incorrect answer to user if user
 * gets question wrong, will display the correct answer.  
 */
function getAnswer() {
    disableAnswers();
    let choosenAnswer = this.innerText;
    if (quizQuestion[questionCounter].correctAnswer === choosenAnswer) {
        score++;
        this.classList.add('correct');
        clearInterval(time);
    } else {
        this.classList.add('incorrect');
        for (i = 0; i < answers.length; i++) {
            if (answers[i].innerText === quizQuestion[questionCounter].correctAnswer) {
                answers[i].classList.add('correct');
            }
        }
        clearInterval(time);
    }

}

/**
 * Resets answers back to default, hides next question button. 
 */
function resetAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('correct');
        answers[i].classList.remove('incorrect');
        answers[i].disabled = false;
        nextQ.classList.add('hidden');
    }
}

/**
 * Disables answers after an answer has been picked
 * and shows next question button
 */
function disableAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].disabled = true;
    }
    nextQ.classList.remove('hidden');
}

/**
 * Sets the timer, second function runs the timer and will show
 * user correct answer if they have run out of time. 
 */
function setTimer() {
    time = setInterval(runTimer, 1000);
    sec = 15;
    function runTimer() {
        timer.innerHTML = sec;
        sec--;
        if (sec === -1) {
            clearInterval(time);
            let correctAnswer = quizQuestion[questionCounter].correctAnswer;
            for (i = 0; i < answers.length; i++) {
                if (answers[i].innerText === correctAnswer) {
                    answers[i].classList.add('correct');
                }
            }
            disableAnswers();
        }
    }
}

/**
 * Shows final score to user. 
 */
function showResult() {
    result.classList.remove('hidden');
    quiz.classList.add('hidden');
    finalScore.innerHTML = score;
}

restartBtn.addEventListener('click', restartQuiz);
/**
 * Restarts quiz once player has finished, sets user
 * score to zero and resets the question counter. 
 */
function restartQuiz() {
    result.classList.add('hidden');
    quiz.classList.remove('hidden');
    rules.classList.add('hidden');
    score = 0;
    questionCounter = 0;
    showQuestion(quizQuestion, questionCounter);
    showScore();
    clearInterval(time);
    setTimer();
}













