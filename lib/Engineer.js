const Employee = require ('./Employee');

class Engineer extends Employee{

    constructor(engineerGithub, engineerID){
        super();

        this.engineerGithub = engineerGithub;
        this.engineerID = engineerID;

    }
    getID() {
        return this.engineerID;
    }
    
    getRole(){
        return Engineer
    }
    getGithub(){
        return this.engineerGithub;
    }
}

module.exports = Engineer;