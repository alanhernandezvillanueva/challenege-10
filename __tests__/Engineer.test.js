const Engineer = require('../lib/Engineer');

test('create an engineer' , () => {
  const engineer  = new Engineer("Alan", "5")
  

    expect(engineer.getGithub()).toEqual(engineer.engineerGithub);
    expect(engineer.getID()).toEqual(engineer.engineerID);
    expect(engineer.getRole()).toBe(Engineer);
    });

