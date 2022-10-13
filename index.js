const inquirer = require('inquirer');
const util = require('util');
const  Manager  = require('./lib/Manager');
const  Engineer  = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const html = require('./src/htmlTemp');

const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString = ``;

async function generate() {
    try {
        await init()

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i])
        };

        let finalHtml = html.generateHTML(teamString)

        writeFileAsync('./dist/index.html', finalHtml);

    } catch (err) {
        return console.log(err);
    }
}

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
        name : 'internsChoice',
        choices: ["Yes","No"],
    },
];

async function init(){
    let initialAnswers = await inquirer.prompt(initialQuestions);

    let manager = new Manager(initialAnswers.managersName,initialAnswers.managersId, initialAnswers.managersEmail, initialAnswers.managersId, initialAnswers.managersOffice)

    teamArray.push(manager);
    
    if(initialAnswers.managersChoice === "Yes"){

        var addingMoreEmployees = true;
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
                let engineer = new Engineer(answers.engineersName, answers.engineersId, answers.engineersEmail, answers.engineersGit); // use the answers
                teamArray.push(engineer);
                if(answers.engineersChoice === "No"){
                    addingMoreEmployees = false;
                    break;
                }
            } else {
                // ask intern questions
                let answers = await inquirer.prompt(internQuestions);

                let intern = new Intern(answers.internsName, answers.internsId, answers.internsEmail, answers.internsSchool); // use the answers
                teamArray.push(intern);
                if(answers.internsChoice === "No"){
                    addingMoreEmployees = false;
                    break;
                }
            }
        }
    }

};

generate();

