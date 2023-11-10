#! /usr/bin/env node
import { sum } from "./addition.js";
import { sub } from "./subtract.js";
import { mul } from "./multiplication.js";
import { div } from "./division.js";
import inquirer from "inquirer";
import chalk from "chalk";

const answer1 : {
    num1 :number,
    num2 : number,
    operator :string
} = await inquirer.prompt([
    {
        type:"number",
        name : "num1",
        message :"Enter your frist number:"

    },
    {
        type: "number",
        name : "num2",
        message : "Enter your second number:"
    },
    {
        type:"list",
        name: "operator",
        choices:["+","-","*","/"],
        message: "Select an operator:"
    }
]);

const {num1,num2,operator} = answer1;

if(num1 || num2 || operator){
    
    if (answer1.operator === "+" ){ 
       let result0 =  sum (answer1.num1,answer1.num2)
       console.log(chalk.bgGreen(`your result is ${result0}`))
    }else if (answer1.operator === "-"){
     let result1 = sub (answer1.num1,answer1.num2)
     console.log(chalk.bgGreen(`your result is ${result1}`))}
    if (answer1.operator === "*"){
     let   result2 = mul (answer1.num1,answer1.num2)
     console.log(chalk.bgMagenta(`your result is ${result2}`))
    }if (operator === "/"){
     let   result3 = div (answer1.num1,answer1.num2)
   console.log(chalk.bgBlue(`your result is ${result3}`)) } 
}else {
    console.log("please enter valid number")
};
