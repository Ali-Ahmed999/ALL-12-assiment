import inquirer from "inquirer";
const Counter = (Paragraph) => Paragraph.replace(/\s/g, "").length;
async function startwordcount(Counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write Your Paragraph Here...",
            name: "Paragraph"
        });
        console.log(Counter(res.Paragraph));
    } while (true);
}
startwordcount(Counter);
