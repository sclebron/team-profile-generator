const Manager = require("../lib/Manager");

let manager = new Manager(
    'John Blake', '4', 'jblake@gmail.com', '1'
);

test('Manager should be created', () => {
    expect(manager instanceof Manager).toBe(true);
});
