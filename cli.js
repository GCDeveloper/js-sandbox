const arg = process.argv[2];
const startMessage = "Hello";
const cliArgs = process.argv.slice(2);
console.log(startMessage, arg ? arg : "");
console.log("arguments:\n", cliArgs);
