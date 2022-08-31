const Employee = require('./../lib/Employee');

let employee = new Employee(
    'Sophie LeBron', '1', 'sclebron@gmail.com'
);

test('Employee should be created', () => {
        expect(employee instanceof Employee).toBe(true);
});

test('getName should return Sophie LeBron', () => {
    expect(employee.getName()).toBe('Sophie LeBron');
});

test('getEmail should return sclebron@gmail.com', () => {
    expect(employee.getEmail()).toBe('sclebron@gmail.com');
});

test('getId should return 1', () => {
    expect(employee.getId()).toBe('1');
});

test('getRole should return "Employee"', () => {
    expect(employee.getRole()).toBe('Employee');
});