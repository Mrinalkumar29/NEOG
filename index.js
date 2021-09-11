var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name ? ");
console.log("Welcome "+ userName + " to do you know mrinal quiz ");
console.log("This quiz will check how well do you know me ");
console.log("Game Rules :- There will be four options and no need to write the complete answer just type the answer in CapsLock");
var score=0;
function play (question , answer)
{
  var userAnswer = readlinesync.question(question);
  if(userAnswer===answer)
  {
    console.log("you are right ");
    score=score+1;
    
  }
  else
  {
    console.log("you are wrong ");
    score=score-1;
  
  }
  console.log("current score ", score);
  console.log("--------------");
}
play("Where do i live ?\n A. Delhi \n B. Mumbai \n C. Banglore \n D. Pune \n ", "A");
play("My fav cricketer is ? \n A. Sachin \n B. Dhoni \n c. Virat \n D. Rohit \n " , "D");
play("my fav actor is ?\n A. Akshay \n B. Salman \n C. Rithik \n D. Vicky \n " , "A");
play("my fav marvel character ?\n A. Hulk \n B. Iron Man \n C. Thor \n D. Captain \n ", "C");
play("my birthday is on ? \n A.24 Sep \n B. 07 Aug \n C. 29 May \n D. 02 Dec \n" , "C");
play("Do i go to gym ? \n A. Yes \n B. No \n" , "A");