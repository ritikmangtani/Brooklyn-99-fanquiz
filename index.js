var readlineSync = require('readline-sync')
const chalk = require('chalk');


var score = 0;


function welcome(){
var userName = readlineSync.question("What is your name? ")

console.log(chalk.yellow("Welcome to The 99th Show of Brooklyn " +  userName))
}


//function
function play(question,answer){

  var userAnswer = readlineSync.question(question)

  if (userAnswer===answer){
    console.log(chalk.green("Hurray! You are right. "))
    score = score + 1;
  }
  else {
    console.log(chalk.red("Oh no! That's not right. "))
  }
  console.log("Your current score is :", score)
  console.log("------------")
}


// directly calling function

// play("Where do I Stay?", "Gandhinagar")
// play("What is my hometown?", "Mumbai")
// play("What is the name of my college? ", "NIFT")


//creating object


var questions =  [{
  question : 
  `Where did Terry once live when pursuing a college education? 
  a.japan 
  b.alaska 
  c.india
  d.north korea
  `,
  answer : "a"},
  {
  question:
  `Who is the jokester of the precinct?
  a:Amy
  b.Rosa
  c.Jake
  d.Hitchcock
  `,
  answer: "c",
},
{
  question:`What is Jake's favorite movie? 
  a.The Terminator
  b.The Hangover
  c.Mission Impossible
  d.Die Hard
  `,
  answer: "d",
},
{
  question:`What did Charles receive after being shot?
  a.NYPD Medal for Valor
  b.Commendation Integrity
  c.Meritorious Police Duty
  d.Nothing
  `,
  answer: "a",
},
{
  question:`How many brothers does Amy have?
  a.One
  b.Two
  c.Three
  d.Seven
  `,
  answer: "d",
}] //array


function game(){

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

}


var highscores = [{
  name : "Ritik",
  score : 5,
},{
  name : "Peralta",
  score : 4,
}];


function showScores(){

console.log(chalk.yellow("Your final score is :", score))

console.log("Do checkout the highscores. And if you just did beat them all. Ping me to update the scoreboard ")

highscores.map(score => console.log(score.name, ":" , score.score))
}


welcome();
game();
showScores();