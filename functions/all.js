//this function does something to all arguments after cb and start
//and is an example of functional programming
function all(cb, initialValue) {
  return Array.from(arguments)
    .slice(2)
    .reduce(cb, initialValue);
}
module.exports = all;
