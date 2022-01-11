// link to page creation
const generateHTML = require('./src/generateHTML');

// node modules 
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'team.html');


// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// arrays for data to enter
let teamArray = [];

// start of manager prompts 
async function teamPrompts() {
        console.log(`
    =======================================
    |Follow the prompts to create your team|
    =======================================
    `);

        //call inquirer module

        const  prompt = () => {

            inquirer.prompt([

                {
                    type: 'list',
                    name: 'role',
                    message: "What is the employee's role?",
                    choices: ['Manager', 'Engineer', 'Intern','done']
                },
            ]).then(userChoice => {
                switch (userChoice.role) {
                    case "Manager":
                        addManager();
                        break;
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            })


        }

        const addManager = () => {
                inquirer.prompt([{
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
                    },
                    {
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
                ]).then(data => {
                    teamArray.push(new Manager(data.employee, data.id, data.email, data.officeNumber));
                    console.log("Manager added")
                    prompt()
                })}

                const addEngineer = () => {
                    inquirer.prompt([{
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
                        },
                        {
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

                    ]).then(data => {
                        teamArray.push(new Engineer(data.employee, data.id, data.email, data.github));
                        console.log("Engineer added")
                        prompt()
                    })
                };

                const addIntern = () => {
                    inquirer.prompt([{ 
                            type: 'text',
                            name: 'employee',
                            message: "What is the name of the Intern?",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("intern name required");
                                    return false;
                                }
                            }
                        },
                        
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is the Intern's ID number?",
                            validate: nameInput => {
                                if (isNaN(nameInput)) {
                                    console.log("intern ID number required")
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
                        },

                            {
                                type: 'text',
                                name: 'school',
                                message: "What is the Intern's school?"
                            }
                        ]).then(data => {
                            teamArray.push(new Intern(data.employee, data.id, data.email, data.school));
                            console.log("Intern added")
                            prompt()
                        })
                    };
                

                    


            prompt();

                }
                const buildTeam = () => {
                    if (!fs.existsSync(OUTPUT_DIR)) {
                        fs.mkdirSync(OUTPUT_DIR)
                    }
                    fs.writeFileSync(OUTPUT_PATH, generateHTML(teamArray), 'utf-8')
                    console.log("file successfully written")
                }

                teamPrompts();