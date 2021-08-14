var readlineSync = require('readline-sync');
const chalk = require('chalk');




function welcome(){
var username = readlineSync.question("What is your name?")
console.log(chalk.bold.blue("Welcome "+ username +" to DO YOU KNOW ME QUIZ"));
}

score = 0;

var questions = [{
  question:"Where is my Home?",
  answer:"Kota"
},
{
  question:"Where do I study?",
  answer:"MUJ"
},
{
  question:"What is my Branch?",
  answer:"IT"
},
{
  question:"What is the language in which this program is written?",
  answer:"JavaScript"
},
{
  question:"What is the first language I learnt?",
  answer:"C"
}
];


var highScores = [
  {
    name: "Priyansh",
    score: 4,
  },

  {
    name: "Pasha",
    score: 2,
  },
];


// play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bold.green("Right"));
    score++;
  }else{ 
  console.log(chalk.bold.red("Wrong"));
  score--;
  }
console.log(chalk.underline.bgGrey("current score:", score));
console.log("-------------");
}


// game function

function game(){
 for(var i=0; i < questions.length; i++){
   var currentQues = questions[i];
   play(currentQues.question,currentQues.answer); 
 } 
}

function showScores() {
  console.log(chalk.bold.bgBlue("You Scored: ", score));

  console.log("Check out the high scores: ");

  highScores.map(score => console.log(score.name, " : ", score.score));
}



welcome();
game();
showScores();
