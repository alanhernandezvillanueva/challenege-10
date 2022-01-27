const Employee = require ('./Employee');
 
class Intern extends Employee {
    constructor(internSchool, internID){
        super();
        this.internSchool = internSchool;
        this.internID = internID;

    }
    getID() {
        return this.internID;
    }
   
    getRole(){
        return Intern
    }
    getSchool(){
        return this.internSchool;
    }
}

module.exports = Intern;
