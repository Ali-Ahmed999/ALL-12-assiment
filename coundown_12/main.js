#!usr/bin/env node 
import { log } from "console";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userinput",
    message: "please enter time",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return " seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            log("your time has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
