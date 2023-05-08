const quizArea = document.getElementById('quiz-area');
const answerBtn = document.getElementById("answer-btn");


function showQuestion(index){
	let question = '<div class="question">' + quizQuestion[index].question + '</div>'
	quizArea.innerHTML = question;
    
    let answers = '<button class="answer-btn"><span>'+ quizQuestion[index].answers[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quizQuestion[index].answers[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quizQuestion[index].answers[2] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quizQuestion[index].answers[3] +'</span></button>';
	answerBtn.innerHTML = answers;

}


showQuestion(0);






