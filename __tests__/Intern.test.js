test('TODO', () => {
    expect(1 === 1).toBe(true);
});

const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

let intern = new Intern(
    'Selina Kyle', '3', 'skyle@gmail.com', 'University of Denver', 
);

test('Intern should be created', () => {
    expect(intern instanceof Intern).toBe(true);
});

test('getSchool should return University of Denver', () => {
    expect(intern.getSchool()).toBe('Universtiy of Denver');
});