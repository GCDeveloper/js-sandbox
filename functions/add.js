//this function adds all arguments
function add(){
  return Array.from(arguments).reduce((acc, val)=>{
    return acc+val;
  }, 0);
}
module.exports = add;
