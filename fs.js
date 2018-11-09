console.log("File System - Append file example");
const fs = require('fs');
const os = require('os');

const user = os.userInfo();
fs.appendFile("fs-example-appendfile.txt", `Hello ${user.username}!\r\n`, function(err){
  if(err) process.exit(err);
  console.log("file written/appended");
  process.exit(0);
})
