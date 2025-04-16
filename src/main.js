const { add, multiply } = require("./utils");

function calculate(operation, a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: a and b must be numbers");
  }

  switch (operation) {
    case "add":
      return add(a, b);
    case "multiply":
      return multiply(a, b);
    default:
      throw new Error("Invalid operation");
  }
}

module.exports = { calculate };
