let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers'); 

function showQuestion(quizQ){
    question.textContent = quizQ[0].question;
    answers.forEach(function (element, index){
        element.textContent = quizQ[0].answers[index];
    });

}

showQuestion(quizQuestion);








