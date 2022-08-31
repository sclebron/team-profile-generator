const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test('TODO', () => {
    expect(1 === 1).toBe(true);
});

let engineer = new Engineer(
    'Bruce Wayne', 1, 'bwayne@gmail.com', 'github.com/bwayne'
);

test('Engineer should be created', () => {
    expect(engineer instanceof Engineer).toBe(true);
});

test('getGithub should return github.com/bwayne', () => {
    expect(engineer.getGithub()).toBe('github.com/bwayne');
});

//do i test get name/id/email/role again or was testing it in employee good enough since that is the parent?