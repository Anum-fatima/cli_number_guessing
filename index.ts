#!/user/bin/env node 
import inquirer from "inquirer";

// 1) computer will generate a random number-Done

// 2) user input for guessing number-Done

// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
      {
           name: "userGuessedNumber",
           type: "number",
           message: "Please guess a number between 1 - 10: ",
      }


]);

if(answers.userGuessedNumber === randomNumber ){ 
    console.log("congratulations! you guessed right number.");
}else { 
    console.log("you guess wrong number.");
 }