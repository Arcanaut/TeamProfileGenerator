//imports Employee constructor
const Employee = require('./Employee');

//engineer constructor extends the Employee constructor using super since Employee is the parent
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calling parent constructor
        super(name, id, email);
        this.github = github;
    }

    //returns github after input
    getGithub() {
        return this.github;
    }
//returns Role from input, but displays 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

//exports Engineer
module.exports = Engineer;