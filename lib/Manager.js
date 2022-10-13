const Employee = require('./Employee');

module.exports = class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole(){
        return "Manager";
    }
}