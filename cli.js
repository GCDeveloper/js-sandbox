const arg = process.argv[2];
const startMessage = "Hello";
const cliArgs = process.argv.slice(2);
console.log(startMessage, arg ? arg : "");
console.log("arguments:\n", cliArgs);
//process commands from cli args
function processCLI(cliArgs, commands){
  cliArgs.forEach((arg)=>{
    if(!arg.startsWith("--")) return;//ignore arguments which don't start with --
    let value = true;
    //get key/value from key=value
    if(arg.includes("=")){
      arg = arg.split("=");
      value = arg[1];
      arg = arg[0];
      try {
        value = JSON.parse(value);
      } catch(err){
        console.warn("Could not parse as JSON, it will be treated as a string.");
      }
    }
    //save new value for command
    commands[arg.slice(2)] = value;
  })
  console.log("commands:", commands);
  return commands;
}
const commands = processCLI(
  cliArgs,
  {
    "favouriteAnimal": "?"
  }
);
console.log("\r\n\r\nYour favourite animal is: "+commands.favouriteAnimal);
