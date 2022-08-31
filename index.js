const inquirer = require('inquirer');
const { choices } = require('yargs');
const  Manager  = require('./lib/Manager');
const fs = require('fs');

const initialQuestions = [
    { 
        type: 'input',
        message: 'Please enter managers name',
        name : 'managersName'
    },
    { 
        type: 'input',
        message: 'Please enter managers employee ID',
        name : 'managersId'
    },
    { 
        type: 'input',
        message: 'Please enter managers email',
        name : 'managersEmail'
    },
    { 
        type: 'input',
        message: 'Please enter managers officeNumber',
        name : 'managersOffice'
    },
    { 
        type: 'list',
        message: 'Would you like to add Employees?',
        name : 'managersChoice',
        choices: ["Yes","No"],
    },
    
];

const engineerQuestions = [
    { 
        type: 'input',
        message: 'Please enter engineers name',
        name : 'engineersName'
    },
    { 
        type: 'input',
        message: 'Please enter engineers employee ID',
        name : 'engineersId'
    },
    { 
        type: 'input',
        message: 'Please enter engineers email',
        name : 'engineersEmail'
    },
    {
        type: 'input',
        message: 'Please enter the engineers github username',
        name: 'engineersGit',
    },
    {
        type: 'list',
        message: 'Would you like to add Employees?',
        name : 'engineersChoice',
        choices: ["Yes","No"],
    },
];

const internQuestions = [
    { 
        type: 'input',
        message: 'Please enter interns name',
        name : 'internsName'
    },
    { 
        type: 'input',
        message: 'Please enter interns employee ID',
        name : 'internsId'
    },
    { 
        type: 'input',
        message: 'Please enter interns email',
        name : 'internsEmail'
    },
    {
        type: 'input',
        message: 'Please enter the interns school',
        name: 'internsSchool',
    },
    {
        type: 'list',
        message: 'Would you like to add Employees?',
        name : 'engineersChoice',
        choices: ["Yes","No"],
    },
];

init()

async function init(){
    let initialAnswers = await inquirer.prompt(initialQuestions);
    let employees = [];

    let manager = new Manager(initialAnswers.managersName,initialAnswers.managersId, initialAnswers.managersEmail, initialAnswers.managersId, initialAnswers.managersOffice)

    employees.push(manager);
    
    if(initialAnswers.managersChoice === "Yes"){

        let addingMoreEmployees = true;
        while(addingMoreEmployees){
            let employeeTypeAnswer = await inquirer.prompt([
                {
                    type: "list",
                    message: "Which type of employee would you like to add?",
                    name: "choice",
                    choices: ["Engineer", "Intern"]
                }
            ]);

            if(employeeTypeAnswer.choice == "Engineer"){
                // ask engineer questions
                let answers = await inquirer.prompt(engineerQuestions); // this is equal to inquirer.prompt(engineerQuestions)
                let engineer = new Engineer(engineerQuestions.engineersName, engineerQuestions.engineersId, engineerQuestions.engineersEmail, engineersQuestions.engineersGit); // use the answers
                employees.push(engineer);
                if(answers.engineerQuestions == "No"){
                    addingMoreEmployees = false;
                    break;
                }
            } else{
                // ask intern questions
                let answers = await inquirer.prompt(internQuestions);
                let intern = new Intern(internQuestions.internsName, internQuestions.internsId, internQuestions.internsEmail, internQuestions.internsSchool); // use the answers
                employees.push(intern);
                if(answers.internQuestions == "No"){
                    addingMoreEmployees = false;
                    break;
                }
            }




            
        }
    }


    renderHtml(employees);

    

}

function renderHtml(employees){
    // fs.writeFile(``);
    console.log('render html here');
}