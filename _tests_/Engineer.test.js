const { TestWatcher } = require("@jest/core");
const Engineer = require("../lib/Engineer");

test("Choosing github", () => {
    const testValue = "AGitHub";
    const eng = new Engineer("Zee", 17, "testingoop@gmail.com", testValue);
    expect(eng.github).toBe(testValue);
});

test("choosing GitHub by using getGithub()", () => {
    const testValue = "AGitHub";
    const eng = new Engineer("Zee", 17, "testingoop@gmail.com", testValue);
    expect(eng.getGithub()).toBe(testValue);
});

test("getRole() returns Engineer", () => {
    const testValue = "Engineer";
    const eng = new Engineer("Zee", 17, "testingoop@gmail.com", "AGitHub");
    expect(eng.getRole()).toBe(testValue);
});