// importing Employee constructor 
const Employee = require('./Employee');

//Manager constructor extends the Employee constructor using super since Employee is the parent

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calls employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 