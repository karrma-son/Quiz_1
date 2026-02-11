let questionText = document.getElementById("question-text");
let answerA = document.getElementById("a-answer");
let answerB = document.getElementById("b-answer");
let answerC = document.getElementById("c-answer");
let gradeText = document.getElementById("grade-text");
const startButton = document.getElementById("start-btn");
let resetButton = document.getElementById("reset-btn")
const aButton = document.getElementById("a-btn");
const bButton = document.getElementById("b-btn");
const cButton = document.getElementById("c-btn");

let score = 0;
let questionIndex = 0; 
resetButton.style.visibility = "hidden";

const questionList = [
    {   id:0,
        question: "Who was the first president of the United States of America?",
        answer : ["Marcus Aurelius", "George Washington", "Napoleon Bonaparte"],
        correctAnswer: 1
    },
    {   id:1,
        question: "What is the capitol of the United States of America",
        answer : ["New York City", "Boston", "Washington D.C."],
        correctAnswer: 2
    },
    {   id:2,
        question: "What is the national bird?",
        answer : ["Bald Eagle", "Bluejay", "Turkey"],
        correctAnswer: 0
    },
    {   id:3,
        question: "What is the longest river in North America?",
        answer : ["Missouri", "Mississippi", "Rio Grande"],
        correctAnswer: 0
    },
    {   id:4,
        question: "How many different time zones are across the Contiguous US?",
        answer : [6, 4, 3],
        correctAnswer: 1
    },
    {   id:5,
        question: "What year was the Declaration of Independence signed?",
        answer : ["1492", "1865", "1776"],
        correctAnswer: 2
    },
    
    {   id:6,
        question: "Who issued the Emancipation Proclamation ?",
        answer : ["James Monroe", "Harry Truman", "Abraham Lincoln"],
        correctAnswer: 2
    },
    {   id:7,
        question: "What is the largest city in the United States of America",
        answer : ["New York City", "Los Angeles", "Chicago"],
        correctAnswer: 0
    },
    {   id:8,
        question: "What are the first amenedments to the Constitution called?",
        answer : ["Magna Carta", "the Bill of Rights", "the Declaration of Independence"],
        correctAnswer: 1
    },
    {   id:9,
        question: "What is the supreme law of the land?",
        answer : ["Justice for All", "the Bill of Rights", "the Constitution"],
        correctAnswer: 2
    },
];

function hideButtons(){
    answerA.style.visibility = "hidden";
    answerB.style.visibility = "hidden";
    answerC.style.visibility = "hidden";
    aButton.style.visibility = "hidden";
    bButton.style.visibility = "hidden";
    cButton.style.visibility = "hidden";
}

function viewButtons(){
    answerA.style.visibility = "visible";
    answerB.style.visibility = "visible";
    answerC.style.visibility = "visible";
    aButton.style.visibility = "visible";
    bButton.style.visibility = "visible";
    cButton.style.visibility = "visible"; 
}

hideButtons();

startButton.addEventListener("click",() => {
  startButton.remove();
  viewButtons();
  questionAsker();
});

resetButton.addEventListener("click",() => {
    resetButton.style.visibility = "hidden";
    score = 0; 
    questionIndex = 0
    gradeText.style.visibility = "hidden"
    viewButtons();
    questionAsker();
});

function questionAsker(){
    let nextQuestion = questionList[questionIndex];
    answerA.textContent = "A. " + nextQuestion.answer[0];
    answerB.textContent = "B. " + nextQuestion.answer[1];
    answerC.textContent = "C. " + nextQuestion.answer[2];
    questionText.textContent = nextQuestion.question;
    console.log(nextQuestion.id)
};

function userAnswer(answerIndex){
    let correctIndex = questionList[questionIndex].correctAnswer; 
    if (answerIndex === correctIndex){
        console.log("correct")
        score++;
    } else{
        console.log("incorrect")
    }

    questionIndex++;
  

    if(questionIndex < questionList.length){
        questionAsker();
    } else {
        checkAnswer();
        hideButtons();
    }

}
aButton.addEventListener("click", () => userAnswer(0));
bButton.addEventListener("click", () => userAnswer(1));
cButton.addEventListener("click", () => userAnswer(2));



function checkAnswer() {
    let gradeLetter = "";
    let totalScore = (score/questionList.length)*100;
    let finalScore = Math.round(totalScore);
    resetButton.style.visibility= "visible";
    gradeText.style.visibility = "visible";

    if (totalScore >= 90){
        gradeLetter = "A"
    } else if (totalScore >= 80 && totalScore < 90) {
            gradeLetter = "B"
    } else if (totalScore >= 70 && totalScore < 80) {
            gradeLetter = "C"
    } else if (totalScore > 60 && totalScore < 70) {
            gradeLetter = "D"
    } else {
            gradeLetter = "F"
    }
    
    if (totalScore === 100 ){
       questionText.textContent = `Congrats you got an ${gradeLetter}` 
       gradeText.textContent = `with a score of ${finalScore}%`
    } else {
        questionText.textContent = `Your grade is ${gradeLetter}`
        gradeText.textContent = `with a score of ${finalScore}% - Try Again?`
    };
};


// for (let i = 0; i < questionList.length; i++){
// console.log(questionList[i].answer[0])}