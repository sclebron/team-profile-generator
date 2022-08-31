const { default: inquirer } = require('inquirer');
const Employee = require('./Employee');

module.exports = class Engineer extends Employee{

    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

}

inquirer.
    prompt([
        {
            type:'input',
            message: 'Please enter the engineer's name',
            name: 'engineer-name',
        },
        {
            type:'input',
            message:'Please enter the engineer's employee ID',
            name:'engineer-id',
        },
        {
            type:'input',
            message:'Please enter the engineer's email',
            name:'engineer-email',
        },
        {
            type:'input',
            message:'Please enter the engineer's Github username',
            name:'engineer-github',
        },
    ])