const { expect } = require("chai");
const { calculate } = require("../src/main");

describe("calculate()", () => {
  it("should add two numbers", () => {
    expect(calculate("add", 2, 3)).to.equal(5);
  });

  it("should multiply two numbers", () => {
    expect(calculate("multiply", 4, 5)).to.equal(20);
  });

  it("should throw error for invalid operation", () => {
    expect(() => calculate("divide", 4, 2)).to.throw("Invalid operation");
  });

  it("should throw error for invalid arguments", () => {
    expect(() => calculate("add", "a", 2)).to.throw("Invalid arguments");
  });
});
