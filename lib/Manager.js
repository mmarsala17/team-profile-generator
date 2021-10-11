const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (officeNumber, id, email, name) {
        super (id, email, name);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;