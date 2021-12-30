// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Dilbert', 4213, 'fakeEmail@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getName()
test('gets employee name', () => {
    const employee = new Employee('Dilbert', 4213, 'fakeEmail@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets employee's id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Dilbert', 4213, 'fakeEmail@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


//gets employee's email from getEmail()
test('gets employee name', () => {
    const employee = new Employee('Dilbert', 4213, 'fakeEmail@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets employee's role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Dilbert', 4213, 'fakeEmail@gmail.com');

    expect(employee.getRole()).toEqual("Employee")
});