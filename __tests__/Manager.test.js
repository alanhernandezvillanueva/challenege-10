const Manager = require('../lib/Manager');

test('creates a Manager', () => {
    const manager = new Manager('Bill Tracy', '9', '5');


    
    expect(manager.getOfficeNumber()).toEqual(manager.managerOffice);
    expect(manager.getID()).toEqual(manager.managerID);
    expect(manager.getRole()).toBe(Manager);

})