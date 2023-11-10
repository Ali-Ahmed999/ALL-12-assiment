#!usr/bin/env node

class School{
    name:string;
    student: student[] =[]
    teacher: Teacher[] =[]
     
    addstudent(stdObj:student){
        this.student.push(stdObj);
    }


    addteacher(teachObj:Teacher){
        this.teacher.push(teachObj)
    }

    constructor(name:string){
        this.name=name;
    }


};



class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolNme:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolNme;
    }
}


class Teacher extends student{
    email:string="";
    contact:string="";
    addInfo(email:string,contact:string){
        this.email=email;
        this.contact=contact;
    }
}



let school1 = new School("city school")
let school2 = new School("lady Bird school")



let std1 = new student("Ali",19,school1.name)
let std2 = new student("Abdul haseeb",23,school2.name)
let std3 = new student("Emaad",22,school2.name)



let T1 = new Teacher(" Sir hamza",22,school1.name)
let T2 = new Teacher("Sir zia",65,school2.name)
let T3 = new Teacher("Sir imran",45,school2.name)


T1.addInfo("hamza92@gmail.com","0304567875")
T2.addInfo("zia32@gmail.com","0304567875")
T3.addInfo("imran992@gmail.com","0304567875")



school1.addstudent(std1);
school2.addstudent(std2);
school2.addstudent(std3);



school1.addteacher(T1);
school2.addteacher(T2);
school2.addteacher(T3);



console.log(school1);
console.log(school2);