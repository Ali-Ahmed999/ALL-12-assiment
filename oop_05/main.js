#!usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
;
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
;
const Persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("WELCOME GUEST");
        const ans = await inquirer.prompt({
            type: "list",
            name: "Select",
            choices: ["Your Self", "Student", "Do you want to exit"],
            message: "Who would you like to talk to?"
        });
        if (ans.Select === "Do you want to exit") {
            console.log("exit progrom....");
        }
        ;
        if (ans.Select == "Your Self") {
            console.log("Hellow I`m talking to myself");
            console.log("My health is fine");
        }
        ;
        if (ans.Select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "Student",
                message: "Enter the student's name"
            });
            const student = persons.students.find(val => val.name == ans.Student);
            if (!student) {
                const name = new Student(ans.Student);
                persons.addStudent(name);
                console.log(`Hellow i am  ${name.name}, How Can I Help You`);
                console.log(persons.students);
            }
            ;
            if (student) {
                console.log(`Hellow i am  ${student.name}, & im fine........`);
                console.log(persons.students);
            }
            ;
        }
    } while (true);
};
programStart(Persons);
