// importing Employee constructor 
const Employee = require('./Employee');

//Manager constructor extends the Employee constructor using super since Employee is the parent
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
