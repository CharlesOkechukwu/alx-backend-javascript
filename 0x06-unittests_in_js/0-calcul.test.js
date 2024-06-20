const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function() {
  it("returns 2 when input is 1 and 0.5", function() {
    assert.equal(calculateNumber(1, 0.5), 2);
  });
  it("returns 1 when input is 1 and 0.1", function() {
    assert.equal(calculateNumber(1, 0.1), 1);
  });
  it("returns 4 when input is 1 and 3", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("returns 5 when input is 1 and 3.7", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("returns 5 when input is 1.3 and 3.7", function() {
    assert.equal(calculateNumber(1.3, 3.7), 5);
  });
  it("returns 6 when input is 1.5 and 3.6", function() {
    assert.equal(calculateNumber(1.5, 3.6), 6);
  });
  it("returns -2 when input is -1 and -1", function() {
    assert.equal(calculateNumber(-1, -1), -2);
  });
  it("returns 1 when input is 2 and -1", function() {
    assert.equal(calculateNumber(2, -1), 1);
  });
  it("returns -1 when input is -2 and 1", function() {
    assert.equal(calculateNumber(-2, 1), -1);
  });
  it("returns 0 when input is 0.4 and 0.2", function() {
    assert.equal(calculateNumber(0.4, 0.2), 0);
  });
  it("returns 1 when input is 0.5 and 0", function() {
    assert.equal(calculateNumber(0.5, 0), 1);
  });
});
