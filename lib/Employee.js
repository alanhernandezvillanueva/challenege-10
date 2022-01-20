class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Number;
        this.email = '';
        this.role = ["Manager", "Engineer", "intern"];
        this.gitHub = gitHub;
    }
    getName(){
    return `${this.name}`
    }
    getId(){
        return `${this.id}`
    }
    getEmail(){
        return `${this.email}`
    }
    getRole(){

    }
    getGitHub(){
        return `${this.gitHub}`
    }
};

module.exports = Employee;
