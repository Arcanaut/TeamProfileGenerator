// link to page creation
const generateHTML = require('./src/generateHTML');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

// team profiles
const generateManager = require('./lib/Manager');
const generateEngineer = require('./lib/Engineer');
const generateIntern = require('./lib/Intern');

// arrays for data to enter
let questions = [];


// start of manager prompts 
async function teamPrompts() {
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
        role,
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
            //pushes engineer data from array in to new class
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
    //Then if  employee is an intern, asks these questions too
    else if (role === 'Intern') {
        return inquirer
            .prompt([{
                    type: 'text',
                    name: 'school',
                    message: "What is the Intern's school?"
                },
                {
                    type: 'confirm',
                    name: 'extraEntry',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            
            //pushes intern data from array in to new class
            .then(data => {
                questions.push(data)
                console.log(questions);
                fs.writeFile("./index.html", generateHTML(questions), err => {
                  if (err) throw err;
                  console.log("File successfully written");
              })
                
            })
            .then(data => {
                    if (data.continue === 'Intern') {
                      fs.appendFile("./index.html", generateIntern(data), err => {
                        if (err) throw err;
                        console.log("File successfully written");
                    })
                    };
                    if (data.continue === 'Manager') {
                      fs.appendFile("./index.html", generateManager(data), err => {
                        if (err) throw err;
                        console.log("File successfully written");
                    })
                    };
                    
                    if (data.continue === 'Engineer') {
                      fs.appendFile("./index.html", generateEngineer(data), err => {
                        if (err) throw err;
                        console.log("File successfully written");
                    })
                    };
                if (data.continue === 'Intern') {
                  fs.appendFile("./index.html", generateIntern(data), err => {
                    if (err) throw err;
                    console.log("File successfully written");
                })
                };
                if (data.askAgain) {     
                  promptMembers();
              } else {
                fs.appendFile("./index.html", '</div> </body> </HTML>', err => {
                  if (err) throw err;
                  console.log("File successfully written");
              })
              }
            })
    
}

}
