const Manager = require("../lib/Manager");

test("choosing office number", () => {
    const testValue = 88;
    const man = new Manager("Zee", 17, "testingoop@gmail.com", testValue);
    expect(man.officeNumber).toBe(testValue);
});

test("choosing office number using getOfficeNumber()", () => {
    const testValue = 88;
    const man = new Manager("Zee", 17, "testingoop@gmail.com", testValue);
    expect(man.getOfficeNumber()).toBe(testValue);
});

test("getRole() returns Manager", () => {
    const testValue = "Manager";
    const man = new Manager("Zee", 17, "testingoop@gmail.com", 88);
    expect(man.getRole()).toBe(testValue);
});