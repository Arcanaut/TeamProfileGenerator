//imports Employee constructor
const Employee = require('./Employee');

//Intern constructor extends the Employee constructor using super since Employee is the parent
class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling parent constructor
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";

    }

};


//exports Intern 
module.exports = Intern;