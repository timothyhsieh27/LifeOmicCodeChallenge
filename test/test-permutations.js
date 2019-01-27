var expect  = require('chai').expect;
var request = require('request');
var permutations = require('../permutations.js');

console.log('Permutations Generator');

describe('Given valid input', () => {
    it('returns the expected permutations', () => {
        input = {
            x: [1, 2],
            y: ['a','b'],
            z: [5]
        }
        expectedOutput = [
            {x: 1, y: "a", z: 5}, 
            {x: 2, y: "a", z: 5},
            {x: 1, y: "b", z: 5}, 
            {x: 2, y: "b", z: 5},
        ]
        output = permutations(input);
        expect(output).to.deep.equal(expectedOutput);
    });
});