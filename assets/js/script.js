let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let nextQ = document.getElementById('next-question');
let timer = document.getElementById('count');
let quiz = document.getElementById('quiz-area');
let rules = document.getElementById('rules-area');
let result = document.getElementById('result-area');
let finalScore = document.getElementById('final-score');
let questionC = document.getElementById('question-counter');
let category = document.getElementById('question-category');

let questionCounter = 0;
let score = 0;
var sec = 15;
let time;

/**
 * starts the quiz when the start quiz button is clicked
 * hides the rules section and shows the quiz section. 
 */
function startQuiz() {
    quiz.classList.remove('hidden');
    rules.classList.add('hidden');
    showQuestion();
    questionCategory();
    questionCount();
    showScore();
    clearInterval(time);
    setTimer();
}

/**
 * Displays question and possible answers to the user, code help from youtube tutorial, link in README.md.  
 */
function showQuestion() {
    question.textContent = quizQuestion[questionCounter].question;
    answers.forEach(function (element, index) {
        element.textContent = quizQuestion[questionCounter].answers[index];
    });
    resetAnswers();
}

/**
 * Loads next question. If last question will call showResult function.
 */
function nextQuestion() {
    questionCounter++;
    if (questionCounter < quizQuestion.length) {
        showQuestion();
        questionCategory();
        questionCount();
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
        answers[i].classList.add('hover');
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
        answers[i].classList.remove('hover');
    }
    nextQ.classList.remove('hidden');
}

/**
 * Sets the timer, second function runs the timer and will show
 * user correct answer if they have run out of time. Code inspiration from Stackoverflow link in README.md. 
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
    showQuestion();
    questionCategory();
    questionCount();
    showScore();
    clearInterval(time);
    setTimer();
}

/**
 * Displays which question the user is on
 */
function questionCount() {
    questionC.innerHTML = quizQuestion[questionCounter].count;
}

/**
 * Displays the category of the question to the user
 */
function questionCategory() {
    category.innerHTML = quizQuestion[questionCounter].category;
}