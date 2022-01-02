// imports parent constructor 'Employee' 
const Employee = require('../lib/Employee');

//engineer constructor inherits from parent constructor

//gets manager role from getRole()
test('gets manager role', () => {
    const manager = new Manager('Dilbert', 4213, 'fakeEmail@gmail.com', 4213);
    expect(manager.getRole()).toEqual("Manager"); 
});
