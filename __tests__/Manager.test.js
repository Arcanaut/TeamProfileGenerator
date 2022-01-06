const Manager = require('../lib/Manager');

//creates Manager constructor 
test('creates a manager Object', () => {
    const manager = new Manager('Dilbert', 4213, 'fakeEmail@gmail.com', 4213);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets manager role from getRole()
test('gets manager role', () => {
    const manager = new Manager('Dilbert', 4213, 'fakeEmail@gmail.com', 4213);
    expect(manager.getRole()).toEqual("Manager"); 
});
