console.log("File System - Append file example");
const fs = require('fs');

fs.appendFile("fs-example-appendfile.txt", "Hello World!\r\n", function(err){
  if(err) process.exit(err);
  console.log("file written/appended");
  process.exit(0);
})
