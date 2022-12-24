var readlinesync = require('readline-sync')
score = 0;
var user = readlinesync.question("Hey hii welcome to Incredible India what is your name?")
console.log("Hi" + " " + user + " " + "let's check how much know about INDIA ")

var highScore = [{
  name: "Ram",
  score: 5
}, {
  name: "Joy",
  score: 3
}]
function play(question, answer) {
  var playerAnswer = readlinesync.question(question);
  if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right")
    score = score + 1
    console.log("current score" + " " + score)
    console.log("-----------------------------------------------------------")
  }
  else {
    console.log("wrong")
    console.log("current score" + " " + score)
    console.log("---------------------------------------------------------")
  }
}
var questions = [{
  Question: "Which state has the largest population?",
  Answer: "Uttar Pradesh"
},

{
  Question: "Which of the following is the capital of Arunachal Pradesh?",
  Answer: "Itanagar"
},
{
  Question: "Which is the largest coffee-producing state of India?",
  Answer: "karnataka"
},
{
  Question: "Which state of India is called Tiger State?",
  Answer: "Madhya Pradesh"
},
{
  Question: "Which is the largest river basin of  Indian peninsular region ?",
  Answer: "Godavari"
},
{
  Question: "In what state is Elephant Falls located?",
  Answer: "Meghalaya"
},
{
  Question: " India is a federal union comprising twenty-eight states and how many union territories?",
  Answer: '8'
},
{
  Question: "Which river system created  the Jog waterfalls?",
  Answer: "Sharavathi"
}]


for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.Question, currentquestion.Answer)
}

console.log("Hurrah yu scored :", score)
console.log("High score  " + highScore[0].name);
console.log(highScore[0].score);
console.log("----------------------------------")
console.log(" Second High score" + " " + highScore[1].name);
console.log(highScore[1].score);