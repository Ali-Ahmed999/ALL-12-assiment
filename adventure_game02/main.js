#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.Opt == "Attack") {
            console.log("Attack");
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion & Your Fuel Is ${p1.fuel} `));
        }
        if (ask.Opt == "Run For Your Life...") {
            console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
            process.exit();
        }
    }
    //Assassin
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.Opt == "Attack") {
            console.log("Attack");
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion & Your Fuel Is ${p1.fuel} `));
        }
        if (ask.Opt == "Run For Your Life...") {
            console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.Opt == "Attack") {
            console.log("Attack");
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion & Your Fuel Is ${p1.fuel} `));
        }
        if (ask.Opt == "Run For Your Life...") {
            console.log(chalk.bold.red.italic(`You loose, Better Luck Next Time`));
            process.exit();
        }
    }
} while (true);
