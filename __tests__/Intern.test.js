const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const intern = new Intern('Alan', 'UCBerkeley', '10');

    
    expect(intern.getSchool()).toEqual(intern.internSchool);
    expect(intern.getRole()).toBe(Intern);
    expect(intern.getID()).toEqual(intern.internID);
    
})