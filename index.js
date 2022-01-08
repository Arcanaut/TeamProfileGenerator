// link to page creation
const generateHTML = require('./src/generateHTML');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

// team profiles
const Employee = require('./Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



// team arrays
let manager = [];
let engineer = [];
let intern = [];
let teamArray = [manager, engineer, intern];

// start of manager prompts 
async function questions() {
    console.log(`
    =======================================
    |Follow the prompts to create your team|
    =======================================
    `);

    //call inquirer module
    const {
        employee,
        id,
        email,
        role
    } = await inquirer
        //start an inquirer prompt to get employee data
        .prompt([

            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'text',
                name: 'employee',
                message: "What is the name of the employee?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("employee name required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID number?",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("employee's ID number required")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email?"
            }
        ]);
    if (role === "Manager") {
        return inquirer
            .prompt([{
                    type: 'text',
                    name: 'officeNumber',
                    message: "What is the manager's office number?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("office number required");
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'extraEntry',
                    message: "Would you like to add another employee?",
                    default: false
                }
            ])
            //then push the content from the manager array to a new Manager class instance
            .then(({
                officeNumber,
                extraEntry
            }) => {
                manager.push(new Manager(employee, id, email, officeNumber));

                if (extraEntry) {
                    return questions();
                }
            });
    }


    //Then if the employee is an engineer, ask these additional questions
    else if (role === "Engineer") {
        return inquirer
            .prompt([{
                    type: 'text',
                    name: 'github',
                    message: "What is the Engineer's Github username?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Github name required");
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'extraEntry',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            //then push the content from the engineer array to a new Engineer class instance filling in the respective methods
            .then(({
                github,
                extraEntry: extraEntry1
            }) => {
                engineer.push(new Engineer(employee, id, email, github));

                if (extraEntry1) {
                    return questions();
                }
            });
    }
    //Then if the employee is an intern, ask these additional questions
    else if (role === 'Intern') {
        return inquirer
            .prompt([{
                    type: 'text',
                    name: 'school',
                    message: "What is the Intern's school?"
                },
                {
                    type: 'confirm',
                    name: 'anotherEntry',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            //then push the content from the intern array to a new Intern class instance filling in the respective methods
            .then(({
                school,
                anotherEntry: anotherEntry2
            }) => {
                intern.push(new Intern(employee, id, email, school));

                if (anotherEntry2) {
                    return questions();
                }
            });
    }
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
            console.log(`
            ========================================
            |Team Profile created inside dist folder|
            ========================================
           `)
        }
    })
};

writeFile();

