
   
const Employee = require('../lib/Employee');

test('creates an Employee name and email', () => {
    const employee = new Employee('Julian');

    expect(employee.employeeName).toBe('Julian');
    expect(employee.getEmail()).toEqual(employee.employeeEmail);
    
})