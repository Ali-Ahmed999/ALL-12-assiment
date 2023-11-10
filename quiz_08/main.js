import chalk from "chalk";
import inquirer from "inquirer";
const apiLink = "https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuize = await fetch(data);
    let res = await fetchQuize.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "Enter your name"
    });
    for (let i = 1; i < 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(`${chalk.green.italic("Correct")}`);
        }
        else
            (console.log(`your corret answer is  ${chalk.red.italic(data[i].correct_answer)}`));
    }
    console.log(`Dear ${chalk.red.bold(name.fname)},your score  is ${chalk.green.bold(score)} Out of ${chalk.red.bold('5')}`);
};
startQuiz();
