const Intern = require("../lib/Intern");

test("choosing school", () => {
    const testValue = "FSU";
    const int = new Intern("Zee", 17, "testingoop@gmail.com", testValue);
    expect(int.school).toBe(testValue);
});

test("choosing school using getSchool()", () => {
    const testValue = "FSU";
    const int = new Intern("Zee", 17, "testingoop@gmail.com", testValue);
    expect(int.getSchool()).toBe(testValue);
});

test("getRole() returns Intern", () => {
    const testValue = "Intern";
    const int = new Intern("Zee", 17, "testingoop@gmail.com", "FSU");
    expect(int.getRole()).toBe(testValue);
});