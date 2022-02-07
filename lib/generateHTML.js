function generateProfiles(employees) {
    let cardArray = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeRole === 'Manager') {
            cardArray.push( `
            <div class="card" style="width: 18rem;">
            <div class = "card-header">
                <h3>${employees[i].employeeName}</h3>
                <span>${employees[i].employeeRole}</span>
            </div>

  <div class="card-body">
               <div class = "card-body">
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID:${employees[i].manager.managerID}</li>
                    <li class = "list-group-item">Email<a href = "mailto:${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></li>
                    <li class = "list-group-item">Office Number:${employees[i].manager.managerOffice}</li>
                </ul>
            </div>
  
  </div>
</div>`)
        } else if (employees[i].employeeRole === 'Engineer') {
            cardArray.push( `
            <div class = "card"  style="width: 18rem;">
           <div class = "card-header">
               <h3>${employees[i].employeeName}</h3>
               <span>${employees[i].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul>
                   <li class = "list-group-item">ID:${employees[i].engineer.EngineerID}</li>
            <li class = "list-group-item">Email:<a href = "mailto:${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></li>
                   <li class = "list-group-item">Github:<a href = "http://github.com/${employees[i].engineer.engineerGithub}">${employees[i].engineer.engineerGithub}</a></li>
               </ul>
           </div>
       </div>`)
        } else if (employees[i].employeeRole === 'Intern') {
            cardArray.push( `<div class="card" style="width: 18rem;">
            <div class = "card-header">
                <h5>${employees[i].employeeName}</h5>
                <span>${employees[i].employeeRole}</span>
            </div>

  <div class="card-body">
           <div class = "card-body">
               <ul>
                   <li class = "list-group-item">ID:${employees[i].engineer.EngineerID}</li>
            <li class = "list-group-item">Email:<a href = "mailto:${employees[i].employeeEmail}">${employees[i].employeeEmail}</a></li>
                   <li class = "list-group-item">Github:<a href = "http://github.com/${employees[i].engineer.engineerGithub}">${employees[i].engineer.engineerGithub}</a></li>
               </ul>
           </div>

</div>`)
        }
        
    }
    
    return cardArray.join('');



}







function generateSite(employees) {
    
    // generateProfiles(employees);
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "stylesheet" href= "../dist/assets/style.css">
        <title>Team Profile</title>
    </head>
    <body>
       
                <header class = "header">
                <h1>Team Profile</h1>
            </header>
        </div>
        <div class = "body-of-page">
           
            
                ${generateProfiles(employees)}
                
         
        </div>
        
    </body>
    </html>`

} 

module.exports = { generateSite };