// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

// team array
const teamArray = [];

// start of manager prompts 
const addManager = () => {
    console.log(`
    ==============================================
    |Follow the prompts to add the project manager|
    ==============================================
    `);
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "What is the name of the manager?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Manager's name required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID.",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Manager's ID required")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email.",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log("Manager's email required.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Manager's office number required")
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(managerInput => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    =======================================
    |Follow the prompts to add team members|
    =======================================
    `);

    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "What is your team member's role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your team member's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter an employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the employee's ID!")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email.",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter an email!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",
                when: (input) => input.role === "Engineer",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's github username!")
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!")
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
                default: false
            }
        ])
        .then(employeeData => {
            // data for employee types 

            let {
                name,
                id,
                email,
                role,
                github,
                school,
                confirmAddEmployee
            } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
const fs = require('fs');
const inquirer = require('inquirer');
// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning intern school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 
