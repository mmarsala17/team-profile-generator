const Employee = require("./Employee");

class Intern extends Employee {
    constructor (school, id, email, name) {
        super (id, email, name);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;