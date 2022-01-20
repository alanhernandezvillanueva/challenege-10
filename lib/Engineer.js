const Employee = require ('./Employee');

class Engineer extends Employee{
    constructor(name, id, role, gitHub){
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;

    }
    getEngineerInfo(){
        return `${this.name} ${this.role} ${this.id} ${this.email} ${this.gitHub}`
    }
}

module.exports = Engineer;