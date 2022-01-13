const Employee = require("../lib/Employee");

const generateProfiles = data => {



    const generateManager = manager => {
        let managerHtml = `
        
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
        return managerHtml;
    }

    const generateEngineer = engineer => {
        let engineerHtml = `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
        return engineerHtml;
    }


    const generateIntern = intern => {
        let internHtml = `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>supervisor_account
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="office">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
        return internHtml;
    }

const html = [];
html.push(data
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
    .join('')
    )

    html.push(data
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
    )

    html.push(data
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
        )

        return html.join('')

};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">
        
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="d-flex  mb-5 justify-content-center align-items-center">
            <h1 class=" m-0">Team Profile Generator</h1>
        </header>
            <div class="container d-flex flex-wrap justify-content-center" style="min-width: 75vw;">
                <div class="row col-8 flex-wrap justify-content-center">
                    ${generateProfiles(team)}
                </div>
            </div>
    </body>
    </html>   
        `
}