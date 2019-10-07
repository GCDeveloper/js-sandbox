//returns a string repeated  n times
function repeatString(str, n) {
  return Array(n)
    .fill(str)
    .join('');
}
module.exports = repeatString;
