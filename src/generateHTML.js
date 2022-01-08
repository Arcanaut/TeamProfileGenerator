const generateProfiles = data => {

//maps data for Manager in to profile
const manager = data.manager.map(function(data){
    let managerProfile = `
    <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
    <div class="bg-primary justify p-2 text-light">
        <h2>${data.name}</h2>
        <h4><b>Manager</b><h4>
    </div>
    <div class="bg-light p-4">
        <p class="border" style="font-size: large">ID: ${data.id}</p>
        <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p class="border mb-0">Office Number: ${data.officeNumber}</p>
    </div>
</div>
    `
    return managerProfile;
})

//maps data for Engineer in to profile
const engineer = data.engineer.map(function(data){
    let engineerProfile = `
    <div class="card border col-sm m-4 p-0 shadow" style="min-width: 18rem; max-width:max-content;">
    <div class="bg-primary justify p-2 text-light">
        <h2>${data.name}</h2>
        <h4><i class="bi bi-eyeglasses"></i> Engineer<h4>
    </div>
    <div class="bg-light p-4">
        <p class="border" style="font-size: large">ID: ${data.id}</p>
        <p class="border" style="font-size: large">Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p class="border mb-0"> Github Profile: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
    </div>
</div>
    `
    return engineerProfile;
})

//maps data for Intern
const intern = data.intern.map(function(data){
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
 const team = manager + engineer + intern;
 //return output of profile functions
 return team
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
                    ${generateProfiles(generateHTML)}
                </div>
            </div>
    </body>
    </html>   
        `
}






