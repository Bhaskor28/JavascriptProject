const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Sahara", correct: true },
      { text: "Arctic", correct: false },
      { text: "Antarctic", correct: false },
      { text: "Gobi", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "Which language is used to style web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "Python", correct: false },
      { text: "CSS", correct: true },
      { text: "C++", correct: false }
    ]
  }
];


const questionElement = document.getElementById('question');
const answerList =document.getElementById('answer-box');
const nextButton=document.getElementById('next');

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
	currentQuestionIndex=0;
	score=0;
	nextButton.innerHTML="Next";
	showQuestion();
}



function showQuestion() {
	resetState();
	let currentQuestion=questions[currentQuestionIndex];
	let questionNo=currentQuestionIndex+1;
	questionElement.innerHTML=questionNo+". "+currentQuestion.question;


	currentQuestion.answers.forEach(answer=>{

		const button=document.createElement("button");
		button.innerHTML=answer.text;
		button.classList.add("answer");
		answerList.appendChild(button);
		if(answer.correct){
			button.dataset.correct=answer.correct;
		}
		 button.addEventListener("click",selectAnswer);
	});
	
}

function resetState() {
	nextButton.style.display="none";
	while(answerList.firstChild){
		answerList.removeChild(answerList.firstChild);
	}
}

function selectAnswer(e) {

	const selectedBtn=e.target;
	const isCorrect = selectedBtn.dataset.correct==="true";

	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}
	else{
		selectedBtn.classList.add("incorrect");
	}
	
	Array.from(answerList.children).forEach(button=>{
		if(button.dataset.correct==="true"){
			button.classList.add("correct");

		}
		button.disabled=true;

	});
	nextButton.style.display="block";


}
function handleNextButton() {
	
	currentQuestionIndex++;
	if(currentQuestionIndex<questions.length){
		showQuestion();

	}
	else{
		showScore();

	}

}

nextButton.addEventListener("click",()=>{
	
	if(currentQuestionIndex<questions.length){
		handleNextButton();

	}
	else{
		startQuiz();

	}

});


function showScore() {
	resetState();
	questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML="Play Again";
	nextButton.style.display="block";

	

}


startQuiz();

