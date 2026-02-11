// 10 question quiz
//  Graded % scale return value of A - F
// number of questions correct vs wrong /10
// prompt answers to lowercase
// display score at the end

const questions ={
    first: {
        question : "Who was the first president of the United States of America?",
        answer: "George Washington"
    },
    second: {
        question :"What is the capitol of the United States of America",
        answer: "Washington D.C"
    },

    third: "What is national bird?",
    fourth:"What year was the declaration of Independence signed?",
    fifth: "What is the longest river in North America?",
    sixth: "How many different time zones are across the US?"
} 
// console.log (questions)


// let answer = prompt();

function problem(answer) {
    let userAnswer = answer.toLowerCase();
    if (userAnswer === questions.first.answer.toLowerCase()){
        console.log("Correct")
    } else  {
        console.log("Wrong")
    }

}



problem("George Washington");