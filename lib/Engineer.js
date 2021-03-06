const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (github, id, name, email) {
        super(id, name, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;