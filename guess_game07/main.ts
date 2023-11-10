#!/usr/bin/env node
import inquirer from "inquirer";

let score: number =0;


async function startloop(){
   let again;
    do{ 
        await guessNumber();
      again = await inquirer.prompt([
            {
                type: "list",
                name : "restart",
                choices : ["yes","no"],
                message : "DO you want to continue"
            }
        ]);
    }while(again.restart === "yes" )
};


startloop();


async function guessNumber(){
    let guessNum = Math.floor(Math.random()*10);
    let tip;
    if(guessNum%2==0){
        tip = "Tip : number is even."
    }else{
        tip = "Tip : number is odd."

    };
    let answer = await inquirer.prompt([
        {
            name : "userguess",
            type: "number",
            message : (`Guess a number between 1 to 10  ${(tip)}`)
        }
     ]);console.log(`your guess ${answer.userguess} and system generates ${guessNum}`)
    if(answer.userguess===guessNum){
        score ++;
        console.log(`Congratulations your answer is correct. Your score is ${score}`);

    }else{
        console.log(`wrong guess. Your score is ${score}. Better luck next time`)
    }
};


