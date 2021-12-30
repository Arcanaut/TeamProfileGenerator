// using Employee constructor 
const Engineer = require('../lib/Engineer');

//creates Engineer Object

test('creates an Engineer Object', () => {
    const engineer = new Engineer('Dilbert', 4213, 'fakeEmail@gmail.com', 'Arcanaut');
    expect(engineer.github).toEqual(expect.any(String));
});

//get engineer's github info from getGithub()
test('gets engineer github values', () => {
    const engineer = new Engineer('Dilbert', 4213, 'fakeEmail@gmail.com', 'Arcanaut');

    //expecting it with 'toEqual(expect.stringContaining' for confirmation
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//gets engineer from getRole()
test('get engineer role', () => {
    const engineer = new Engineer('Dilbert', 4213, 'fakeEmail@gmail.com', 'Arcanaut');

    expect(engineer.getRole()).toEqual("Engineer");
});