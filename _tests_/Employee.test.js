const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Create Employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });
});

    it("Choosing name", () => {
        const name = "Zee";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Choosing email", () => {
        const testValue = "testingoop@gmail.com";
        const emp = new Employee("Zee", 17, testValue);
        expect(emp.email).toBe(testValue);
    });

    it("choosing id", () => {
        const testValue = 88;
        const emp = new Employee("Zee", testValue);
        expect(emp.id).toBe(testValue);
    });

    describe("getName", () => {
        it("recieve name using getName()", () => {
            const testValue = "Zee";
            const emp = new Employee(testValue);
            expect(emp.getName()).toBe(testValue);
        });
    });

        describe("getRole", () => {
            it("return Employee", () => {
                const testValue = "Employee";
                const emp = new Employee("Zee", 17, "testingoop@gmail.com");
                expect(emp.getRole()).toBe(testValue);
            });
        });
            describe("getEmail", () => {
                it("recieve email using getEmail()", () => {
                    const testValue = "testingoop@gmail.com";
                    const emp = new Employee("Zee", 17, testValue);
                    expect(emp.getEmail()).toBe(testValue);
                });
            });
