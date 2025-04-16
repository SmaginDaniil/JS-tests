const { expect } = require("chai");
const { add, multiply } = require("../src/utils");

describe("Utils functions", () => {
  describe("add()", () => {
    it("should return correct sum", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("should return 0 for (0, 0)", () => {
      expect(add(0, 0)).to.equal(0);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).to.equal(-3);
    });
  });

  describe("multiply()", () => {
    it("should return correct product", () => {
      expect(multiply(2, 4)).to.equal(8);
    });

    it("should return 0 when one operand is 0", () => {
      expect(multiply(0, 5)).to.equal(0);
    });

    it("should handle negative numbers", () => {
      expect(multiply(-2, 3)).to.equal(-6);
    });
  });
});
