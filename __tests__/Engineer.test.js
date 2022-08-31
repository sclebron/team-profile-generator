const Engineer = require("../lib/Engineer");

let engineer = new Engineer(
    'Bruce Wayne', '2', 'bwayne@gmail.com', 'github.com/bwayne'
);

test('Engineer should be created', () => {
    expect(engineer instanceof Engineer).toBe(true);
});

test('getGithub should return github.com/bwayne', () => {
    expect(engineer.getGithub()).toBe('github.com/bwayne');
});

test('getName should return Bruce Wayne', () => {
    expect(engineer.getName()).toBe('Bruce Wayne');
});