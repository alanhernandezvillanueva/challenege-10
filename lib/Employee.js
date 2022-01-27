class Employee {
    constructor(employeeName, employeeEmail) {
        this.employeeName = employeeName;
        this.employeEmail = employeeEmail;
       //get employee's name 
    }
    getName(){
    return this.employeeName;
    }
   //get employee email address
    getEmail(){
        return this.employeEmail
    }
  
};

module.exports = Employee;
