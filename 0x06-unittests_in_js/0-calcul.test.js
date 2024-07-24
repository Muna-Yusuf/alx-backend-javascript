const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  const testCases = [
    { desc: 'Two Integers', a: 1, b: 3, expected: 4 },
    { desc: 'One round', a: 1, b: 3.7, expected: 5 },
    { desc: 'One round 2', a: 3.7, b: 1, expected: 5 },
    { desc: 'One round floor', a: 1, b: 3.3, expected: 4 },
    { desc: 'One round floor 2', a: 3.3, b: 1, expected: 4 },
    { desc: 'Two round', a: 1.2, b: 3.7, expected: 5 },
    { desc: 'Two round again', a: 1.5, b: 3.7, expected: 6 },
    { desc: 'Two round reversed', a: 3.7, b: 1.2, expected: 5 },
    { desc: 'Two round again floor both', a: 1.2, b: 2.1, expected: 3 }
  ];

  testCases.forEach(({ desc, a, b, expected }) => {
    it(desc, function () {
      assert.strictEqual(calculateNumber(a, b), expected);
    });
  });
});
