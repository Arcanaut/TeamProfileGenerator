const Intern = require('../lib/Intern');


//creates Intern constructor
test('creates an Intern Object', () => {
    const intern = new Intern('Dilbert', 4213, 'fakeEmail@gmail.com', 'SMU');
    expect(intern.school).toEqual(expect.any(String));
});


//gets Intern's school from getSchool()
test('gets intern school', () => {
    const intern = new Intern('Dilbert', 4213, 'fakeEmail@gmail.com', 'SMU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets Intern's role from getRole()
test('get intern role', () => {
    const intern = new Intern('Dilbert', 4213, 'fakeEmail@gmail.com', 'SMU');
    expect(intern.getRole()).toEqual("Intern");
});