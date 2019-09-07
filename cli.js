const cliCommands = {
  program: './program.json',
};

//get command line arguments and process them
const args = process.argv.slice(2);
console.log('\r\nArguments:\r\n', args, '\r\n');

function processArgs(args, commands) {
  args.forEach(arg => {
    //ignore all arguments which do not start with --
    if (!arg.startsWith('--')) return;
    //arg may not have a value, so it is defaulted to true below
    //and the key itself is the arg
    let key = arg;
    //default value of argument to true
    //e.g. the existence of --favouriteAnimal means its value is true
    let value = true;
    if (arg.includes('=')) {
      arg = arg.split('=');
      //key is now what is before the = char
      key = arg[0];
      value = arg[1];
      //try catch so JSON.parse does not throw an error
      //if it cannot parse the value as JSON
      try {
        value = JSON.parse(value);
      } catch (err) {
        //Could not parse argument value as JSON.
        //It will be treated as a string.
      }
    }
    //remove -- from the key
    key = key.slice(2);
    //set the argument in commands and its value
    commands[key] = value;
  });
  //return processed args using the commands object
  return commands;
}
//if the first argument doesn't start with -- then assume it is the path/file to
//the commands the user wants to process
if (!args[0].startsWith('--')) {
  cliCommands.program = args[0];
}

const { program } = processArgs(args, cliCommands);

const commands = require(program);

console.log('Processed arguments:\r\n', processArgs(args, commands), '\r\n');
