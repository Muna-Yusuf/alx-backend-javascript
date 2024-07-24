const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  const testCases = [
    // SUM tests
    { desc: 'SUM no Round', type: 'SUM', a: 1, b: 4, expected: 5 },
    { desc: 'SUM first round', type: 'SUM', a: 2.4, b: 4, expected: 6 },
    { desc: 'SUM second round', type: 'SUM', a: 4, b: 2.4, expected: 6 },
    { desc: 'SUM both round', type: 'SUM', a: 1.4, b: 4.5, expected: 6 },

    // SUBTRACT tests
    { desc: 'SUBTRACT no round', type: 'SUBTRACT', a: 5, b: 3, expected: 2 },
    { desc: 'SUBTRACT first round', type: 'SUBTRACT', a: 2, b: 4.5, expected: -3 },
    { desc: 'SUBTRACT second round', type: 'SUBTRACT', a: 4.5, b: 2, expected: 3 },
    { desc: 'SUBTRACT both round', type: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4 },

    // DIVIDE tests
    { desc: 'DIVIDE no round', type: 'DIVIDE', a: 8, b: 4, expected: 2 },
    { desc: 'DIVIDE first round', type: 'DIVIDE', a: 9.5, b: 2, expected: 5 },
    { desc: 'DIVIDE second round', type: 'DIVIDE', a: 2, b: 9.5, expected: 0.2 },
    { desc: 'DIVIDE both round', type: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2 },
    { desc: 'DIVIDE Error', type: 'DIVIDE', a: 1.4, b: 0, expected: 'Error' }
  ];

  testCases.forEach(({ desc, type, a, b, expected }) => {
    it(desc, function () {
      assert.equal(calculateNumber(type, a, b), expected);
    });
  });
});
