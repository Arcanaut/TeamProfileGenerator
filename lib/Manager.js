// imports parent constructor 'Employee' 
const Employee = require('../lib/Employee');

//manager constructor inherits from parent constructor

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calling parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    
    //returns Role from input, but displays 'Manager'
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;