const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", function() {
  describe("SUM", function() {
    it("returns 2 when type is SUM and input is 1 and 0.5", function() {
      expect(calculateNumber('SUM', 1, 0.5)).to.equal(2);
    });
    it("returns 1 when type is SUM and input is 1 and 0.1", function() {
      expect(calculateNumber('SUM', 1, 0.1)).to.equal(1);
    });
    it("returns 4 when type is SUM and input is 1 and 3", function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it("returns 5 when type is SUM and input is 1 and 3.7", function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it("returns 5 when type is SUM and input is 1.3 and 3.7", function() {
      expect(calculateNumber('SUM', 1.3, 3.7)).to.equal(5);
    });
    it("returns 6 when type is SUM and input is 1.5 and 3.6", function() {
      expect(calculateNumber('SUM', 1.5, 3.6)).to.equal(6);
    });
    it("returns -2 when type is SUM and input is -1 and -1", function() {
      expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
    });
    it("returns 1 when type is SUM and  input is 2 and -1", function() {
      expect(calculateNumber('SUM', 2, -1)).to.equal(1);
    });
    it("returns -1 when type is SUM and  input is -2 and 1", function() {
      expect(calculateNumber('SUM', -2, 1)).to.equal(-1);
    });
    it("returns 0 when type is SUM and  input is 0.4 and 0.2", function() {
      expect(calculateNumber('SUM', 0.4, 0.2)).to.equal(0);
    });
    it("returns 1 when type is SUM and input is 0.5 and 0", function() {
      expect(calculateNumber('SUM', 0.5, 0)).to.equal(1);
    });
  });

  describe("SUBSTRACT", function() {
    it("return 1 when input is 2 and 1", function() {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });
    it("return 1 when input is -1 and -2", function() {
      expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
    });
    it("return -4 when input is -3 and 1", function() {
      expect(calculateNumber('SUBTRACT', -3, 1)).to.equal(-4);
    });
    it("return 4 when input is 3 and -1", function() {
      expect(calculateNumber('SUBTRACT', 3, -1)).to.equal(4);
    });
    it("return -2 when input is 3 and 5", function() {
      expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(-2);
    });
    it("return 2 when input is 3.2 and 1", function() {
      expect(calculateNumber('SUBTRACT', 3.2, 1)).to.equal(2);
    });
    it("return 3 when input is 3.5 and 1", function() {
      expect(calculateNumber('SUBTRACT', 3.5, 1)).to.equal(3);
    });
    it("return 5 when input is 3.5 and -1", function() {
      expect(calculateNumber('SUBTRACT', 3.5, -1)).to.equal(5);
    });
    it("return -4 when input -3.5 and 1", function() {
      expect(calculateNumber('SUBTRACT', -3.5, 1)).to.equal(-4);
    });
    it("return -1 when input is 0 and 1", function() {
      expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
    });
    it("return 2 when input is -1.5 and -3.5", function() {
      expect(calculateNumber('SUBTRACT', -1.5, -3.5)).to.equal(2);
    });
    it("return -2 when input is -3.2 and -1.4", function() {
      expect(calculateNumber('SUBTRACT', -3.2, -1.4)).to.equal(-2);
    });
  });

  describe("DIVIDE", function() {
    it("return Error when input is 4 and 0", function() {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal("Error");
    });
    it("returns 2 when input is 4 and 2", function() {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it("returns 0.6666666666666666 when input is 2 and 3", function() {
      expect(calculateNumber('DIVIDE', 2, 3)).to.equal(0.6666666666666666);
    });
    it("returns 1.5 when input is 3 and 1.5", function() {
      expect(calculateNumber('DIVIDE', 3, 1.5)).to.equal(1.5);
    });
    it("returns 2 when input is 3.5 and 2", function() {
      expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
    });
    it("returns 3 when input is 3.2 and 1.4", function() {
      expect(calculateNumber('DIVIDE', 3.2, 1.4)).to.equal(3);
    });
    it("returns 2 when input is -4 and -2", function() {
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
    });
    it("returns -2 when input is -4 and 2", function() {
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
    });
    it("returns 2.5 when input is -4.7 and -2.3", function() {
      expect(calculateNumber('DIVIDE', -4.7, -2.3)).to.equal(2.5);
    });
    it("returns 0 when input is 0 and 3.4", function() {
      expect(calculateNumber('DIVIDE', 0, 3.4)).to.equal(0);
    });
  });
});
