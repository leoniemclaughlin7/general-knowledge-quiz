const quizArea = document.getElementById('quiz-area');
const results = document.getElementById('results');
const submitBtn = document.getElementById('submit');

function showQuestions(){
	var output = [];
	var answers;
	for(var i=0; i<quizQuestion.length; i++){
		answers = [];
		for(option in quizQuestion[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+option+'">'
					+ option + ': '
					+ quizQuestion[i].answers[option]
				+ '</label>'
			);
		}
		output.push(
			'<div class="question">' + quizQuestion[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	quizArea.innerHTML = output.join('');
}

showQuestions();