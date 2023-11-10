#!usr/bin/env node

import inquirer from "inquirer";
interface ansType {
    userID: string,
    userPin: number,
    accountType: string,
    cashType : string,
    transacationType : string,
    ammount: number
 
};
// let user: [] =;

let answer: ansType = await inquirer.prompt([
    {
        type: "input",
        name : "userID",
        message: "Kindly Enter Your ID"
    },
    {
        type: "number",
        name : "userPin",
        message: "Kindly Enter Your Pin"
    },
    {
        type: "list",
        name : "accountType",
        choices:["Current","Saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name : "transacationType",
        choices:["Fast Cash","Cash Withrawl"],
        message: "Kindly Select Your Transacation Type",
        when(answer){
            return answer.accountType
        }
    },
    {
        type: "list",
        name : "ammount",
        choices:["500","1000","2000","5000","10000","20000","50000"],
        message: "Kindly Select Your Ammount",
        when(answer){
            return answer.transacationType == "Fast Cash"
        }
    },
    {
        type: "number",
        name : "ammount",
        message: "Kindly Enter Your Ammount",
        when(answer){
            return answer.transacationType == "Cash Withrawl"
        }
    },
    
]);
 if(answer.userID && answer.userPin){
    let balance =Math.floor(Math.random()*10000000)
    console.log(balance);
    let EnternedAmmount = answer.ammount;
    if(balance >= EnternedAmmount){
        let remaining = balance - EnternedAmmount;
        console.log(`Your Remaining Balance Is ${remaining}`)
    }else{
        console.log("Insufficient Funds")
    }
 };