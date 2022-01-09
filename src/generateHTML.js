
const generateProfiles = data => {
    teamPrompts = require('teamPrompts')

    // const {name, id, email, role, employee, id, github,} = teamArray [0];
//maps data for Manager in to profile
const manager = data.manager.map(function(teamPrompts) {
    let managerHtml =`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">supervisor_account</i>
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
});

//maps data for Engineer in to profile
engineer = data.engineer.map(function(engineer){
    let engineerProfile = `
    <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
    <div class="bg-primary justify p-2 text-light">
        <h2>${engineer.name}</h2>
        <h4><i class="bi bi-eyeglasses"></i> Engineer<h4>
    </div>
    <div class="bg-light p-4">
        <p class="border" style="font-size: large">ID: ${engineer.id}</p>
        <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p class="border mb-0"> Github Profile: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
    </div>
</div>
    `
    return engineerProfile;
});

//maps data for Intern
intern = data.intern.map(function(data){
    let internProfile = `
    <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${data.name}</h2>
                <h4><i class="bi bi-pencil-fill"></i> Intern<h4>
            </div>
            <div class="bg-light p-4">
                <p class="border" style="font-size: large">ID: ${data.id}</p>
                <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p class="border mb-0"> University: ${data.school}</p>
            </div>
        </div>
    `
    return internProfile;
})
 //combines all profiles in to one
 team = [manager + engineer + intern]
 //return output of profile functions
 return team;
}

module.exports = generateHTML => {
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
            <h1 class="text-light m-0">Team Profile Generator</h1>
        </header>
            <div class="container d-flex flex-wrap justify-content-center" style="min-width: 75vw;">
                <div class="row col-8 flex-wrap justify-content-center">
                    ${generateProfiles(questions)}
                </div>
            </div>
    </body>
    </html>   
        `
}






