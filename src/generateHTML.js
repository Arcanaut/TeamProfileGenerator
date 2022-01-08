const generateProfiles = data => {

//maps data for Manager in to profile

const manager = data.manager.map(function(data){
    let managerProfile = `
    html goes here
    `
    return managerProfile;
})
//maps data for Engineer in to profile

const engineer = data.engineer.map(function(data){
    let engineerProfile = `
    html goes here
    `
    return engineerProfile;
})
//maps data for Intern
const intern = data.intern.map(function(data){
    let internProfile = `
    html goes here
    `
    return internProfile;
})
 //combines all profiles in to one
 const team = manager + engineer + intern;
 //return output of profile functions
 return team
}

module.exports = generateProfiles => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
            <!-- Bootstrap Font Icon CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
            <title>CB Builds Tech Team</title>
        </head>
        <body>
            <header style="height:10rem" class="d-flex bg-danger pt-1 mb-5 justify-content-center align-items-center">
                <h1 class="text-light m-0">CB Builds Tech Team</h1>
            </header>
                <div class="container d-flex flex-wrap justify-content-center" style="min-width: 75vw;">
                    <div class="row col-8 flex-wrap justify-content-center">
                        ${printProfiles(buildHTML)}
                    </div>
                </div>
        </body>
        </html>    
        `
}






