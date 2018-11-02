const args = [
  {},
  {test:"hello"}
];

args.forEach((arg, i)=>{
  console.log("==================")
  console.log(`Object.getOwnPropertyDescriptors(${JSON.stringify(arg, null, 2)}):\n`);
  console.log(JSON.stringify(Object.getOwnPropertyDescriptors(arg), null, 2));
  console.log("\n", (i+1)+" of "+args.length, "\n==================");
});
