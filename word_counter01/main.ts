import inquirer from "inquirer"

const Counter = (Paragraph : string) => Paragraph.replace(/\s/g,"").length

async function startwordcount(Counter:(text:string) => number) {
    do{
        let res =await inquirer.prompt({
            type : "input",
            message : "Write Your Paragraph Here...",
            name : "Paragraph"
        })
        console.log(Counter(res.Paragraph));
        
    }
    while(true)
}

startwordcount(Counter)