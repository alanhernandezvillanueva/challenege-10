const Employee = require ('./Employee');
 
class Manager extends Employee {
    constructor(managerOfficeNumber, managerID){
        super()
        this.managerOfficeNumber = managerOfficeNumber;
        this.managerID = managerID;

    }
    getOfficeNumber() {
        // gets the office number
        return this.managerOffice
    }
//returns role
    getRole(){
        return Manager
    }
    //returns managers id 
    getID() {
        return this.managerID;
    }
}

module.exports = Manager;