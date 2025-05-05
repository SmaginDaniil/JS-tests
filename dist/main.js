"use strict";

var _require = require("./utils");

var add = _require.add;
var multiply = _require.multiply;

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

module.exports = { calculate: calculate };
