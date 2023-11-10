#!usr/bin/env node

import inquirer from "inquirer";

interface ansType {
    menuOpt: string,
    todo:string,

};

let todos: string[] = []
let loop : boolean = true;
let answer1 : ansType;
let answer2 : ansType;
let answer3 : ansType;


async function startloop(){
    while(loop){
       await displayMenueitem()

    }
}
startloop();


async function displayMenueitem(){
    answer1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOpt",
            choices: ["ADD TODO ITEM","DELETE TODO ITEM","EXIT"],
            message: "SELECT MENU ITEM"


        }
    ])
    switch(answer1.menuOpt){
        case "ADD TODO ITEM":{
            await addTodoItem()
          break;
        }
        case "DELETE TODO ITEM":{
             await deletetodo()
            break;
        }
    
    default: {
        loop = !true;
        console.log("EXIT PROGRAM..");
        break;
    
    }
    }
}
 async function addTodoItem(){
    answer2 = await inquirer.prompt([
        {
            type:"input",
            name:"todo",
            message: "ENTER YOUR TODO"
        }
    ])
    todos.push(answer2.todo)
    console.log(todos)
 }

 async function deletetodo(){
    if(todos.length>0){
        answer3 = await inquirer.prompt([
            {
                type:"list",
                name: "menuOpt",
                choices: todos,
                message : "SELECT YOUR TODO FOR DELETE:"

            }
        ]);
        let i = 0;
        do{
            if(todos[i] === answer3.menuOpt){
                todos.splice(i,1)
                break;
            }
            i++;
        }while(i<todos.length);
        console.log(todos);
    }else {
        console.log(" SORRY NO TODOS TO DELETE..");
    }
 }
