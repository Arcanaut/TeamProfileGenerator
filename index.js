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

        async const prompt = () => {

            inquirer.prompt([

                {
                    type: 'list',
                    name: 'role',
                    message: "What is the employee's role?",
                    choices: ['Manager', 'Engineer', 'Intern']
                },
            ]).then(userChoice => {
                switch (userChoice.role) {
                    case "Manager":
                        addManager();
                        break;
                    case "Engineer":
                        addEngineer();
                        break;
                    default:
                        addIntern();
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

                    if (extraEntry) {
                        return prompt();
                    } else {
                        buildTeam()
                    }
                })

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

                        if (extraEntry) {
                            return prompt();
                        } else {
                            buildTeam()
                        }
                    })
                };

                const addIntern = () => {
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
                            },

                            {
                                type: 'text',
                                name: 'school',
                                message: "What is the Intern's school?"
                            },
                        

                        ]).then(data => {
                            teamArray.push(new Intern(data.employee, data.id, data.email, data.github));
    
                            if (extraEntry) {
                                return prompt();
                            } else {
                                buildTeam()
                            }
                        })
                    };
                   


                   


                    //Then if the employee is an engineer, ask these additional questions
                    else if (role === "Engineer") {
                        return inquirer
                            .prompt([])
                            //pushes engineer data from array in to new class
                            .then(({
                                github,
                                extraEntry: extraEntry1
                            }) => {
                                engineer.push(new Engineer(employee, id, email, github));

                                if (extraEntry1) {
                                    return teamArray();
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
                                console.log('string');
                                teamArray.push(data)
                                console.log(teamArray);
                                fs.writeFile("./index.html", generateHTML(teamArray), err => {
                                    if (err) throw err;
                                    console.log("File successfully written");
                                })

                            })
                            .then(data => {
                                if (data.continue === 'Intern') {
                                    fs.appendFile("./index.html", Intern(data), err => {
                                        if (err) throw err;
                                        console.log("File successfully written");
                                    })
                                };
                                if (data.continue === 'Manager') {
                                    fs.appendFile("./index.html", Manager(data), err => {
                                        if (err) throw err;
                                        console.log("File successfully written");
                                    })
                                };

                                if (data.continue === 'Engineer') {
                                    fs.appendFile("./index.html", Engineer(data), err => {
                                        if (err) throw err;
                                        console.log("File successfully written");
                                    })
                                };
                                if (data.continue === 'Intern') {
                                    fs.appendFile("./index.html", Intern(data), err => {
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
                const buildTeam = () => {
                    if (!fs.existsSync(OUTPUT_DIR)) {
                        fs.mkdirSync(OUTPUT_DIR)
                    }
                    fs.writeFileSync(OUTPUT_PATH, generateHTML(teamArray), 'utf-8')
                }

                teamPrompts();