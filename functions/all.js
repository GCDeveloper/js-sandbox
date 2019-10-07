//this function does something to all arguments after cb and start
//and is an example of functional programming
function all(cb, initialValue, ...args) {
  return args.reduce(cb, initialValue);
}
module.exports = all;
