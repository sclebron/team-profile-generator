const Employee = require('./Employee');

module.exports = class Intern extends Employee{

    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

}

inquirer.
    prompt([
        {
            type:'input',
            message: 'Please enter the intern's name',
            name: 'intern-name',
        },
        {
            type:'input',
            message:'Please enter the intern's employee ID',
            name:'intern-id',
        },
        {
            type:'input',
            message:'Please enter the intern's email',
            name:'intern-email',
        },
        {
            type:'input',
            message:'Please enter the intern's school',
            name:'intern-school',
        },
    ])