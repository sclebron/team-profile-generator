const Employee = require('./Employee');

module.exports = class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the manager's name',
            name: 'manager-name',
        },
        {
            type: 'input',
            message: 'Please enter the manager's employee ID',
            name: 'manager-id',
        },
        {
            type: 'input',
            message: 'Please enter the manager's email',
            name: 'manager-email',
        },
        {
            type: 'input',
            message: 'Please enter the manager's office number',
            name: 'manager-office',
        }
    ]);