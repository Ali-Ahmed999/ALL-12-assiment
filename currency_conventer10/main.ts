
import inquirer from "inquirer"; 
let conversion = {
    "PKR" :{
        "USD":0.0044,
        "GBP":0.0037,
        "PKR": 1
    },
    "USD":{
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50,
    },
    "GBP":{
        "GBP": 1,
        "USD": 1.21,
        "PKR": 271.79,
    }
}


const answer:{
    from:"GBP" | "USD" | "PKR",
    to:"GBP" | "USD" | "PKR",
    amount:number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices:["PKR","USD","GBP"],
        message:"Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices:["PKR","USD","GBP"],
        message:"Select your conversion currency: ",
    },
    {
        type: "number",
        name: "amount",
        message:"Enter your amount: ",
    },
])

const {from,to,amount} = answer

if(from && to && amount ){
    let result = conversion[from][to] * amount
    console.log(`Your converson from ${from} to ${to} is ${result}`)
}else(
    console.log("invalid input!")
    
)
