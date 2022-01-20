const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern  = require('./lib/Intern');
const Manager = require('./lib/Manager');


class Employees {
    constructor(){
        this.name = '';
        this.role = [];
        this.id = Number;
        this.email = '';
        this.gitHub = '';

        inquirer
        .prompt([
            {
                type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput){
                  return true;
                } else {
                  console.log("Please Enter Employee's Name!");
                  return false;
                }
              }
         },
         {
            type: 'list',
            name: 'roles',
            message: "What is Employee's Role?",
            validate: employeeRole => {
              if (employeeRole){
                return true;
              } else {
                console.log('Please Select Employee Role');
                return false;
              }
            },
            choices: ["Manager", "Engineer", "Intern"]
    
          
          },
          {
            type: 'input',
            name: 'emailAddress',
            message: 'What is employee email address? (Required)',
            validate: emailAddress => {
              if (emailAddress){
                return true;
              } else {
                console.log('Please Enter a Valid Email Address!');
                return false;
              }
            }
          },
         {
            type: 'input',
            name: 'gitHub',
            message: 'What is employee GitHub username? (Required)',
            validate: gitHubInput => {
              if (gitHubInput){
                return true;
              } else {
                console.log('Please Enter Employee GitHub Username!');
                return false;
              }
            }
          },
         
        ])
    }
   
}

module.exports = Employees;