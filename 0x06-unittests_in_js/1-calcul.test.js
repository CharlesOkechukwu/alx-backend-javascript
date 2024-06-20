const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function() {
  describe("SUM", function() {
    it("returns 2 when type is SUM and input is 1 and 0.5", function() {
      assert.equal(calculateNumber('SUM', 1, 0.5), 2);
    });
    it("returns 1 when type is SUM and input is 1 and 0.1", function() {
      assert.equal(calculateNumber('SUM', 1, 0.1), 1);
    });
    it("returns 4 when type is SUM and input is 1 and 3", function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it("returns 5 when type is SUM and input is 1 and 3.7", function() {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it("returns 5 when type is SUM and input is 1.3 and 3.7", function() {
      assert.equal(calculateNumber('SUM', 1.3, 3.7), 5);
    });
    it("returns 6 when type is SUM and input is 1.5 and 3.6", function() {
      assert.equal(calculateNumber('SUM', 1.5, 3.6), 6);
    });
    it("returns -2 when type is SUM and input is -1 and -1", function() {
      assert.equal(calculateNumber('SUM', -1, -1), -2);
    });
    it("returns 1 when type is SUM and  input is 2 and -1", function() {
      assert.equal(calculateNumber('SUM', 2, -1), 1);
    });
    it("returns -1 when type is SUM and  input is -2 and 1", function() {
      assert.equal(calculateNumber('SUM', -2, 1), -1);
    });
    it("returns 0 when type is SUM and  input is 0.4 and 0.2", function() {
      assert.equal(calculateNumber('SUM', 0.4, 0.2), 0);
    });
    it("returns 1 when type is SUM and input is 0.5 and 0", function() {
      assert.equal(calculateNumber('SUM', 0.5, 0), 1);
    });
  });

  describe("SUBSTRACT", function() {
    it("return 1 when input is 2 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);
    });
    it("return 1 when input is -1 and -2", function() {
      assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
    });
    it("return -4 when input is -3 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', -3, 1), -4);
    });
    it("return 4 when input is 3 and -1", function() {
      assert.equal(calculateNumber('SUBTRACT', 3, -1), 4);
    });
    it("return -2 when input is 3 and 5", function() {
      assert.equal(calculateNumber('SUBTRACT', 3, 5), -2);
    });
    it("return 2 when input is 3.2 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', 3.2, 1), 2);
    });
    it("return 3 when input is 3.5 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', 3.5, 1), 3);
    });
    it("return 5 when input is 3.5 and -1", function() {
      assert.equal(calculateNumber('SUBTRACT', 3.5, -1), 5);
    });
    it("return -4 when input -3.5 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', -3.5, 1), -4);
    });
    it("return 0 when input is 0 and 1", function() {
      assert.equal(calculateNumber('SUBTRACT', 0, 1), -1);
    });
    it("return 2 when input is -1.5 and -3.5", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.5, -3.5), 2);
    });
    it("return -2 when input is -3.2 and -1.4", function() {
      assert.equal(calculateNumber('SUBTRACT', -3.2, -1.4), -2);
    });
  });

  describe("DIVIDE", function() {
    it("return Error when input is 4 and 0", function() {
      assert.equal(calculateNumber('DIVIDE', 4, 0), "Error");
    });
    it("returns 2 when input is 4 and 2", function() {
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it("returns 0.6666666666666666 when input is 2 and 3", function() {
      assert.equal(calculateNumber('DIVIDE', 2, 3), 0.6666666666666666);
    });
    it("returns 1.5 when input is 3 and 1.5", function() {
      assert.equal(calculateNumber('DIVIDE', 3, 1.5), 1.5);
    });
    it("returns 2 when input is 3.5 and 2", function() {
      assert.equal(calculateNumber('DIVIDE', 3.5, 2), 2);
    });
    it("returns 3 when input is 3.2 and 1.4", function() {
      assert.equal(calculateNumber('DIVIDE', 3.2, 1.4), 3);
    });
    it("returns 2 when input is -4 and -2", function() {
      assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
    });
    it("returns -2 when input is -4 and 2", function() {
      assert.equal(calculateNumber('DIVIDE', -4, 2), -2);
    });
    it("returns 2.5 when input is -4.7 and -2.3", function() {
      assert.equal(calculateNumber('DIVIDE', -4.7, -2.3), 2.5);
    });
    it("returns 0 when input is 0 and 3.4", function() {
      assert.equal(calculateNumber('DIVIDE', 0, 3.4), 0);
    });
  });
});
