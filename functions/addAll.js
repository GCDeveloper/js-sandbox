//This file demonstrates the power of composability in functional programming
const all = require('./all.js');
//this function adds two numbers together
function add(a, b) {
  return a + b;
}
//this function adds all arguments together
function addAll() {
  return all(add, 0, ...arguments);
}

module.exports = addAll;
